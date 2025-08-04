// src/modules/example/slice.js
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    botaoClicadoRequest(state) {
      state.loading = true;
      state.error = null;
    },
    botaoClicadoSuccess(state) {
      state.loading = false;
      state.data = 'ok'; // ou o dado que quiser guardar
    },
    botaoClicadoFailure(state, action) {
      state.loading = false;
      state.error = action.payload || 'Erro';
    },
  },
});

export const {
  botaoClicadoRequest,
  botaoClicadoSuccess,
  botaoClicadoFailure,
} = exampleSlice.actions;

export default exampleSlice.reducer;
