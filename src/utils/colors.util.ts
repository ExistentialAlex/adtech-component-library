import {
  AdTechComponentColors,
  AdTechNumericColors,
  AdTechStatusColors,
} from '../enums';

/**
 * 
 * @returns An array of all the possible component colors
 */
export const getAllColorsAsArray = () => {
  return [
    ...Object.values(AdTechComponentColors),
    ...Object.values(AdTechStatusColors),
    ...Object.values(AdTechNumericColors),
  ];
};
