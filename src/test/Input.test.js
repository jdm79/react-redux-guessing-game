import React from 'react'
import { shallow } from 'enzyme'

import { findTestByAttr } from './testUtils'
import Input from '../components/Input'

const setup = (initialState={}) => {
  // using dive should allow us to see what is inside the child component
  // otherwise, it's just the higher order component (without dive())
  // React 6 and some Enzyme bugs mean that the way to test this has changed 
  
  // Would like to use shallow to create a virtual dom,
  // then dive() to get the child component (input)
  // to see the prop from the test store in testUtils
  // n.b. find a new way to mock/create a test store to test
  const wrapper = shallow(<Input />).dive()
  console.log(wrapper.debug())
}

setup()
// react-redux 6 deprecated support for passing store as a prop to connected components
// (changing back to React 5.0.7 only causes other conflicts...)
// It is not clear the best way to test store configurations going forward
// There are a couple bugs in Enzyme (664 and 1647) that make using context untenable here -- 
// not to mention the storeKey option to connect 
// (for letting the component know to access the store from the context) has also been deprecated
// (stay tuned) redux-mock-store?

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