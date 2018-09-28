const noop = (r) => r

export const createModules = (modules, {
  initialInitialState={},
  initialReducers={}
}={}) => {
  let initialState = Object.assign({}, initialInitialState)
  let reducers = Object.assign({}, initialReducers)

  Object.keys(modules).forEach(key => {
    const module = modules[key]

    initialState[key] = Object.assign({},
                          initialState[key] || {},
                          module.initialState || {})


    reducers[key] = module.reducer || noop
  })

  return {initialState, reducers}
}
