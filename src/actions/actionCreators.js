export function changeRoute(name) {
  return (dispatch) => {
    dispatch({ type: 'CHANGE_ROUTE', route: name });
  };
}
export function showPosts() {
  const request = fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
  .then((response) => response.json()
  .catch((error) => {
    console.log(error);
  }));
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'SHOW_POSTS', payload: response });
    });
  };
}
