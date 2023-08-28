// util/headers.js
const createHeaders = () => {
    const token = window.localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    };
    return headers;
  };
  
  export default createHeaders;
  