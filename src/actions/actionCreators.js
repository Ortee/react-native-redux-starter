export function changeRoute(name) {
  return (dispatch) => {
    dispatch({ type: 'CHANGE_ROUTE', route: name });
  };
}
