const initState = {
    themeId: 1,
}


    type kek = ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: kek): typeof state=> { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

   type changeThemeIdType = {
        type: 'SET_THEME_ID',
        id: number
    }

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
