function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  localStorage.setItem("token", token);
}

function clearToken() {
  localStorage.removeItem("token");
}

function isLogin() {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
}

export { getToken, setToken, clearToken, isLogin };
