const UNDER_CONSTRUCTION = 'categories/under_construction';

export const underConstruction = () => ({ type: UNDER_CONSTRUCTION });

const underConstructionStr = 'Under Construction';

export const BOOK_CATEGORIES = {
  Fantasy: { status: '50%' },
  'Sci-Fi': { status: '10%' },
  Mystery: { status: '20%' },
  Thriller: { status: '6%' },
  Romance: { status: '60%' },
  Westerns: { status: '80%' },
  Dystopian: { status: '34%' },
  Contemporary: { status: '24%' },
};

export default function categoriesReducer(state = BOOK_CATEGORIES, action) {
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
