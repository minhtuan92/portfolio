import { SkillName, SkillType } from '@core/constants';

export interface TechCardItem {
  id: number;
  image: string;
  label: SkillName;
  type: TechCardCategory;
}

export type TechCardCategory = SkillType;
