export function changeAreMounted(areMounted) {
  return function action(dispatch) {
      dispatch({
        type: 'CHANGE_ARE_MOUNTED',
        payload: {
          areMounted,
        },
      });
  };
}
