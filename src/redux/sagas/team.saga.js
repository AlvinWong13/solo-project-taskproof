import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTeams(action) {
  try {
    const team = yield axios.get(`/api/team/${action.payload}`);
    yield put({
      type: 'SET_TEAM',
      payload: team.data
    })
  }
  catch (error) {
    console.log('Failed getting teams', error);
  }
}

function* selectTeam() {
  try {
    const response = yield axios.get('/api/team')
    yield put({
      type: 'SELECT_TEAM',
      payload: response.data
    })
  }
  catch (error) {
    console.log('Error selecting team', error)
  }
}

function* postNewTeam(action) {
  try {
    const response = yield axios.post('/api/team', action.payload);
  }
  catch (error) {
    console.log('Error posting new team', error)
  }
}

function* teamSaga() {
  yield takeEvery('FETCH_TEAMS', fetchTeams);
  yield takeEvery('GET_ALL_TEAMS', selectTeam);
  yield takeEvery('CREATE_TEAM', postNewTeam)
}

export default teamSaga;