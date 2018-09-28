import { combineReducers } from 'redux'

const noop = (r) => r
export const createModules = (modules, {
  initialActions={},
  initialInitialState={},
  initialReducers={}
}={}) => {
  // Copies of initially passed in config objects
  let actions = Object.assign({}, initialActions)
  let initialState = Object.assign({}, initialInitialState)
  let reducers = Object.assign({}, initialReducers)

  Object.keys(modules).forEach(key => {
    const module = modules[key]

    initialState[key] = Object.assign({},
                          initialState[key] || {},
                          module.initialState || {})

    actions[key] = Object.assign({},
                          actions[key] || {},
                          module.actions || {})

    reducers[key] = module.reducer || noop
  })

  return {initialState, actions, reducers}
}
