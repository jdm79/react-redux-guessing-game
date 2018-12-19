// this is where we keep all the action variables
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
}

// our action creator for correct guesses
// redux actions are objects that have a type key and sometimes have some kind of payload
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS }
}