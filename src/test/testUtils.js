// this helper function can be imported into all our test files
// #DRY

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}