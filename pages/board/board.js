// const app = getApp()
var app = getApp();

Page({
  data: {
    boards: [],
    imgUrl: [],
    loading: true
  },
  onLoad () {
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters', 
      data: {},
      header: {
          'content-type': 'json'
      },
      success: (res) => {
        console.log(res)
        this.setData({ 
          boards: res.data.subjects,
          imgUrl: res.data.subjects.splice(0,5),
          loading: false
        })
        console.log(this.data.boards)
        console.log(this.data.imgUrl)
      }
    })
  },
})
