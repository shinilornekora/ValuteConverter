import { ConvertAction, StoreState } from "@types"

import { createStore } from "redux"

const history: StoreState = {
    hist: []
}

function dispatch(state = history, action: ConvertAction) {
    switch (action.type) {
        case "ADD_TO_HISTORY":
            return {...state, hist: [...state.hist, action?.payload]}
        case "ACTION__SEE":
            return {...state, hist: [...state.hist]}
        default:
            return state
    }
}

export const store = createStore(dispatch)