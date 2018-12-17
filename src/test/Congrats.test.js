import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr, checkProps } from './testUtils'
import Congrats from '../components/Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

// props default is empty obj, which is what will return when prop = false
const setup = ( props={} ) => {
  // spread operator takes props and turns into key/value pairs
  return shallow(<Congrats {...props} />)
} 

// 
test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats text when success prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text()).not.toBe(0)
})

test('does not throw a warning with expected props', () => {
  const expectedProps = { success: false}
  checkProps(Congrats, expectedProps)
})