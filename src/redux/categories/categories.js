const UNDER_CONSTRUCTION = 'categories/under_construction';

export const underConstruction = () => ({ type: UNDER_CONSTRUCTION });

const underConstructionStr = 'Under Construction';
const initialState = [];

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return underConstructionStr;
    default:
      return state;
  }
}

test('if categories/under_construction action works', () => {
  expect(categoriesReducer(initialState, underConstruction())).toBe(underConstructionStr);
});
