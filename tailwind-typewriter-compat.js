const typewriterPlugin = require('tailwind-typewriter');

function flattenDeep(arr) {
  if (!Array.isArray(arr)) return [arr];
  return arr.reduce((acc, item) => acc.concat(flattenDeep(item)), []);
}

function mergeUtilities(utilities) {
  const items = flattenDeep(Array.isArray(utilities) ? utilities : [utilities]);
  return items.reduce((acc, item) => {
    if (item && typeof item === 'object' && !Array.isArray(item)) Object.assign(acc, item);
    return acc;
  }, {});
}

module.exports = function (options) {
  const original = typewriterPlugin(options);

  return {
    handler({ addBase, addUtilities }) {
      const interceptAddUtilities = (utilities) => {
        const flat = mergeUtilities(utilities);
        const keyframes = {};
        const classes = {};
        for (const [key, value] of Object.entries(flat)) {
          if (key.startsWith('@keyframes')) {
            keyframes[key] = value;
          } else {
            classes[key] = value;
          }
        }
        if (Object.keys(keyframes).length) addBase(keyframes);
        if (Object.keys(classes).length) addUtilities(classes);
      };

      original.handler({ addBase, addUtilities: interceptAddUtilities });
    },
    config: original.config ?? {},
  };
};
