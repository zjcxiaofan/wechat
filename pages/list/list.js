var app = getApp();
Page({
  data: {
    list: [],
    loading: true
  },
  onLoad (option) {
    wx.request({
      url: 'https://api.douban.com/v2/movie/'+ option.type, 
      data: {},
      header: {
          'content-type': 'json'
      },
      success: (res) => {
        console.log(res)
          this.setData({ 
            list: res.data.subjects,
            loading: false
          })
          if( option.type != 'top250') {
            wx.setNavigationBarTitle({
              title: '豆瓣电影 > ' + (res.data.title).substr(0,4)
            })
          } else {
            wx.setNavigationBarTitle({
              title: '豆瓣电影 > ' + (res.data.title).split('影')[1]
            })
          }
          
        console.log(this.data.list)
      }
    })
  },
})
