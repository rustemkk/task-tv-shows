const apiUrl = 'https://api.tvmaze.com';

export const apiGET = (path) => {
  return fetch(`${apiUrl}${path}`, { method: 'GET' })
    .then(res => res.json())
    .catch(err => console.log('Error: ', err));
}