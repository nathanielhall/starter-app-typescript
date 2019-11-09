import React from 'react'
import TestRenderer from 'react-test-renderer'
import { App } from './app'

test('renders without crashing', () => {
  TestRenderer.create(<App />)

  expect(true).toBeTruthy()
})
