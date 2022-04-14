export const localService = {
  setUserInfo: (values) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
  },
  getUserInfo: () => {
    const data = localStorage.getItem("userInfo");
    return !data ? null : JSON.parse(data);
  },
  removeUserInfo: () => {
    localStorage.setItem("userInfo", null);
  },
};
