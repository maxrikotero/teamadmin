import axios from 'axios';
import {
    GET_PLAYERS
} from './types'

export const getPlayers = () => async dispatch => {
    const response = await axios.get('api/player/players');

    dispatch({
        type: GET_PLAYERS,
        payload: response.data
    })
}