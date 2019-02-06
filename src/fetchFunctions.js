export function fetchCompanies() {
  return fetch(
    "http://www.federicodonner.com/clublibros_api/public/api/empresas"
  );
}

export function fetchUsers(empresa) {
  return fetch(
    "http://www.federicodonner.com/clublibros_api/public/api/usuarios?empresa=" +
      empresa
  );
}

export function fetchUser(token, id) {
  const url =
    "http://www.federicodonner.com/clublibros_api/public/api/usuarios/" + id;

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  });
}

export function fetchActiveUser(token) {
  const url = "http://www.federicodonner.com/clublibros_api/public/api/yo";

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  });
}

export function loginUser(user) {
  const data = { grant_type: "password", user: user.nombre };
  const url = "http://www.federicodonner.com/clublibros_api/public/api/oauth";

  return fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      "accept-encoding": "gzip, deflate"
    }
  });
}

export function fetchBooks(token, availables) {
  const url =
    "http://www.federicodonner.com/clublibros_api/public/api/libros?disponibles=" +
    availables;

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  });
}

export function fetchBook(token, id) {
  const url =
    "http://www.federicodonner.com/clublibros_api/public/api/libros/" + id;

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  });
}

// This function verifies login information in local storage
// If not found, it navigates to userselect
// Should be called from componentDidMount in every route
export function verifyLogin() {
  const username = localStorage.getItem("libroclub_username");
  const token = localStorage.getItem("libroclub_token");
  const user_id = localStorage.getItem("libroclub_id");

  if (username && token && user_id) {
    return { username: username, user_id: user_id, token: token };
  }
}

// This function verifies that the company has been selected
// and stored in localstorage
export function verifyCompany() {
  const company = localStorage.getItem("libroclub_company");
  if (company) {
    return { company };
  }
}
