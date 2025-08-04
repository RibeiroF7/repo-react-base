// import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://repo-react-base.vercel.app',
// });

// src/services/axios.js
import axios from 'axios';
import store from '../store'; // se precisar pegar token do redux
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000, // opcional: timeout de 10s
});

// Exemplo: adicionar Authorization se tiver token armazenado
api.interceptors.request.use(
  (config) => {
    // supondo que você armazena token em state.example.data ou outro lugar
    const state = store.getState();
    const token = state.example?.data?.token; // ajuste conforme seu shape
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Exemplo: tratamento global de erro
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // você pode customizar mensagens
    if (!error.response) {
      toast.error('Erro de rede. Verifique sua conexão.');
    } else if (error.response.status === 401) {
      toast.error('Não autorizado. Faça login novamente.');
      // opcional: redirecionar para login via history ou outro mecanismo
    } else {
      const msg = error.response.data?.message || 'Ocorreu um erro.';
      toast.error(msg);
    }
    return Promise.reject(error);
  }
);

export default api;
