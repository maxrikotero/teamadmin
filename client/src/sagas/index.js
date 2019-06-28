import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchPlayers() {
    const json = yield fetch('http://localhost:5000/api/player/players')
                            .then(response => response.json());

    yield put({ type: "PLAYERS_RECEIVED", json: json.players});
}

function* actionWatcher() {
    yield takeLatest('GET_PLAYERS', fetchPlayers);
}

export default  function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}