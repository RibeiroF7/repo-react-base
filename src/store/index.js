import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../modules/rootReducer';
import rootSaga from '../modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'REACT-BASE',
  storage,
  whitelist: ['example'], // só persiste o slice "example"
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora ações do redux-persist para evitar warning
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
    devTools: true,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
export default store;
