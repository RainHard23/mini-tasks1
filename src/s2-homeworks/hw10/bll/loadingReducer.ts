const initState = {
    isLoading: false,
}

export type loadingReducerProps = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: loadingReducerProps): typeof state=> { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {
                isLoading: !state.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
