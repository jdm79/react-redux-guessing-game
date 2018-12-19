import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    // this action creator returns our action
    const action = correctGuess()
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})