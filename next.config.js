module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/feijianyingzhan-vup-song-list': {page: "/feijianyingzhan-vup-song-list"},
      '/404': {page: "/404"}
    }
  },
  images: {
    loader: "custom"
  }
};
