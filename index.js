import CreateTypes from "./src/createTypes"

export default CreateTypes

export function createActionTypes(...types) {
    return new CreateTypes(types);
}



export * from './src/createModules'
export * from './src/createReducer'
export * from './src/helpers'
