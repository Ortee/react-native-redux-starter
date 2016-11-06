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
  .catch(() => {
    dispatch({ type: 'SHOW_POSTS', payload: [] });
  }));

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'SHOW_POSTS', payload: response });
    });
  };
}

export function addPost(name, content) {
  const request = fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{
      name: name,
      content: content,
    }]),
  })
  .catch(() => {
    dispatch({ type: 'ADD_POSTS', res: false });
  });
  return (dispatch) => {
    request.then(() => {
      dispatch({ type: 'ADD_POSTS', res: true, req: {'name': name, 'content': content}});
    });
  };
}

export function removePost(name, indexInState) {
  const request = fetch('http://localhost:3000/api/postremove', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{
      name: name,
    }]),
  })
  .catch(() => {
    dispatch({ type: 'REMOVE_POST', res: false });
  });
  return (dispatch) => {
    request.then(() => {
      dispatch({ type: 'REMOVE_POST', res: true, req: { 'name': name, 'indexInState': indexInState}});
    });
  };
}
