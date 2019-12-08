import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOWE_NOTE } from "../types"

const helpers = {
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [ADD_NOTE]: (state, { payload }) => ({
        ...state, notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload, loading: false }),
    [REMOWE_NOTE]: (state, { payload }) => (
        { ...state, notes: state.notes.filter(note => note.id !== payload) }
    ),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = helpers[action.type] || helpers.DEFAULT
    return handle(state, action)
}