// src/modules/example/sagas.js
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  botaoClicadoRequest,
  botaoClicadoSuccess,
  botaoClicadoFailure,
} from './slice';

// simula requisição assíncrona
const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('resultado');
    }, 600);
  });

function* handleBotaoClicado() {
  try {
    yield call(requisicao);
    yield put(botaoClicadoSuccess());
  } catch (err) {
    toast.error('Deu erro');
    yield put(botaoClicadoFailure(err?.message || 'Erro'));
  }
}

export default function* exampleSaga() {
  yield all([takeLatest(botaoClicadoRequest.type, handleBotaoClicado)]);
}
