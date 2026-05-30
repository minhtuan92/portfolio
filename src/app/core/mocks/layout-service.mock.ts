import { vi } from 'vitest';

export const layoutServiceMock = {
  screenSize: vi.fn(() => 'Handset'),
  isMobile: vi.fn(),
};
