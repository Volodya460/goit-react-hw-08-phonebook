const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getRefreshing = state => state.auth.isRefreshing;

const authSelectord = {
  getIsLoggedIn,
  getUsername,
  getRefreshing,
};

export default authSelectord;
