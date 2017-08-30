import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

const logger = createLogger({})

let finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore)

export default function configureStore(initialState = { results: [] }) {
  return finalCreateStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())
}
