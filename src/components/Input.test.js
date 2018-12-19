import React from 'react'
import { shallow } from 'enzyme'

import { findTestByAttr } from '../test/testUtils'
import Input from '../components/Input'

const setup = (initialState={}) => {
  const wrapper = shallow(<Input />)
  console.log(wrapper.debug())
}

// react-redux 6 deprecated support for passing store as a prop to connected components
// It is not clear the best way to test store configurations going forward
// There are a couple bugs in Enzyme (664 and 1647) that make using context untenable here -- 
// not to mention the storeKey option to connect 
// (for letting the component know to access the store from the context) has also been deprecated
// (stay tuned)

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {
      
    })
    test('renders input box', () => {

    })
    test('renders submit button', () => {

    })
  })  

  describe('word has been guessed', () => {
    test('renders component without error', () => {
      
    })
    test('does not render input box', () => {

    })
    test('does not render submit button', () => {

    })
  })  
})

describe('update state', () => {

})