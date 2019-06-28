import {
    GET_PLAYERS,
    PLAYERS_RECEIVED
} from '../actions/types'

const INITIAL_STATE = {
    players: []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                loading: true
            }
        case PLAYERS_RECEIVED:
            return { ...state, players: action.json[0], loading: false }
        default:
            return state;
    }
}