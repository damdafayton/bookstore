const UNDER_CONSTRUCTION = 'categories/under_construction';

export const underConstruction = () => ({ type: UNDER_CONSTRUCTION });

const underConstructionStr = 'Under Construction';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return underConstructionStr;
    default:
      return state;
  }
}

export const categoryTests = () => {
  const initialState = [];

  test('if categories/under_construction action works', () => {
    expect(categoriesReducer(initialState, underConstruction())).toBe(underConstructionStr);
  });
};
