import sendRequest from './send-request';
const BASE_URL = '/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(`http://localhost:3000${BASE_URL}`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(){
  return sendRequest(`${BASE_URL}/check-token`);
}