// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    dialogShow: false
  },
  login() {
    this.setData({
      dialogShow: true
    })
  },
  bindgetuserinfo() {
    let _this = this
    var y = new Date().getFullYear();
    var m = new Date().getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = new Date().getDate();
    d = d < 10 ? ('0' + d) : d;

    wx.getUserInfo({
      success: r => {
        console.log("用户信息", r.userInfo)
        wx.cloud.callFunction({
          name: "health_userInfo",
          data: {
            fun: "add",
            userInfo: r.userInfo,
            userID: String(y).substring(2) + m + d
          },
          success: res => {
            console.log("存储成功", res)
            wx.cloud.callFunction({
              name: 'health_userInfo',
              data: {
                fun: 'get',
                get: 'oneself'
              }
            }).then(res => {
              console.log('用户信息==>', res.result.data[0])
              this.setData({
                userInfo: res.result.data[0]
              })
            })


          },
          fail: err => {
            console.log("存储失败", err)
          }
        })
      }
    })

  },
  openConfirm() {
    if (!this.data.userInfo) {
      this.setData({
        dialogShow: true
      })
    } else {
      wx.navigateTo({
        url: '../record/record',
      })
    }
  },
  jump(e) {
    switch (e.currentTarget.dataset.type) {
      case 'about':{
        wx.navigateTo({
          url: '../aboutUs/aboutUs',
        })
      }
      case 'setting':{
        wx.navigateTo({
          url: '../setting/setting',
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo
      })
    } else {
      console.log('wu')
      wx.getSetting({
        complete: (res) => {
          console.log(res)
          if (res.authSetting['scope.userInfo']) {
            wx.cloud.callFunction({
              name: "health_userInfo",
              data: {
                fun: "get",
                get: "oneself"
              },
            }).then(res => {
              console.log('获取用户信息==>', res.result.data)
              this.setData({
                userInfo: res.result.data[0]
              })
              getApp().globalData.userInfo=res.result.data[0]
            })
          }
        },
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.setData({
        userInfo: getApp().globalData.userInfo
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})