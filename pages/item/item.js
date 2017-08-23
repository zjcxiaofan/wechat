var app = getApp();

Page({
  data: {
    movie: [],
    loading: true,
  },
  onLoad (option) {
    console.log(option)
    wx.request({
      url:'https://api.douban.com/v2/movie/subject/' + option.id, 
      data: {},
      header: {
          'content-type': 'json'
      },
      success: (res) => {
        console.log(res)
        this.setData({
          movie: res.data,
          loading: false,
        })
        wx.setNavigationBarTitle({
          title: res.data.title
        })
      }
    })
  },
})
