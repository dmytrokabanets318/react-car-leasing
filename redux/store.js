import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { results: [] }) {
  return finalCreateStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())
}

// import { applyMiddleware, compose, createStore } from 'redux'
// import rootReducer from './reducers'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
//
// let finalCreateStore = compose(
//   applyMiddleware(thunk, logger())
// )(createStore)
//
//
// export default function configureStore(initialState = { todos: [], user: {} }) {
//   return finalCreateStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())
// }
