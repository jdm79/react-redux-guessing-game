import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'

import GuessedWords from '../components/GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'face', letterMatchCount: 3 }],
}

const setup = (props={}) => {
  const setupProps= { ...defaultProps,  ...props }
  return shallow(<GuessedWords { ...setupProps } />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  test('it renders with no error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('it renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {

})