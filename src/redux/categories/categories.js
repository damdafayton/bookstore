const UNDER_CONSTRUCTION = 'categories/under_construction';
const CHECK_STATUS = 'categories/check_status';

export const underConstruction = () => ({ type: UNDER_CONSTRUCTION });
export const checkStatus = (payload) => ({ type: CHECK_STATUS, payload });

const underConstructionStr = 'Under Construction';

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return underConstructionStr;
    case CHECK_STATUS: {
      const item = Object.keys(state).filter((category) => category === action.payload);
      return state[item[0]].status;
    }
    default:
      return state;
  }
}

export const categoryTests = () => {
  const initialState = [];

  test('if categories/under_construction action works', () => {
    expect(categoriesReducer(initialState, underConstruction())).toBe(underConstructionStr);
  });

  const categories = { 'Sci-Fi': { status: '10%' } };

  test('status of the category', () => {
    expect(categoriesReducer(categories, checkStatus('Sci-Fi'))).toBe('10%');
  });
};
