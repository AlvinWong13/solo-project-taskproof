import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTeam() {
  try {
    const response = yield axios.get('/api/team', );
    yield put({
      type: 'SET_TEAM',
      payload: response.data
    })
  }
  catch (error) {
    console.log('Team get request failed', error);
  }
}

function* teamSaga() {
  yield takeLatest('FETCH_TEAM', fetchTeam);
}

export default teamSaga;