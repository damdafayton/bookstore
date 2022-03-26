const UNDER_CONSTRUCTION = 'categories/under_construction'

export const underConstruction = () => ({ type: UNDER_CONSTRUCTION })

const categoriesUnderConstruction = 'Under Construction'
const initialState = []

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return categoriesUnderConstruction;
    default:
      return state
  }
}


test('if categories/under_construction action works', () => {
  expect(categoriesReducer(initialState, underConstruction())).toBe(categoriesUnderConstruction)
})