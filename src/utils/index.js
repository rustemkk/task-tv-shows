const apiUrl = 'http://api.tvmaze.com';

export const apiGET = (path) => {
  return fetch(`${apiUrl}${path}`, { method: 'GET' })
    .then(res => res.json());
}