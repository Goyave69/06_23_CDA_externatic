const ApiHelper = async (
  route,
  method,
  token = null,
  body = null,
  contentType = "application/json"
) => {
  const myHeaders = new Headers();
  if (contentType !== "") myHeaders.append("Content-Type", contentType);
  if (token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }
  const requestOptions = {
    method,
    headers: myHeaders,
    body,
  };
  return fetch(import.meta.env.VITE_BACKEND_URL + route, requestOptions);
  // return fetch(`http://localhost:5000${route}`, requestOptions); // en dur car problème :
  // rajoute après .env un élement qui ressort en "undefined"
};

export default ApiHelper;
