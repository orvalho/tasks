export default() => () => {
  window.gapi.auth2.getAuthInstance().signOut();
};
