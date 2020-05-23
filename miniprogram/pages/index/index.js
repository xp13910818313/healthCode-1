var _this
var app = getApp()
Page({
  data: {

  },

  openConfirm: function (e) {
    if (_this.data.userInfo == null) {
      this.setData({
        dialogShow: true
      })
    } else {
      console.log("生产二维码", _this.data.userInfo)
      let userInfo = JSON.stringify(_this.data.userInfo)
      wx.navigateTo({
        url: '/pages/QRcode/QRcode?userInfo=' + userInfo,
      })
    }
  },
  bindgetuserinfo() {
    
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
            userID:String(y).substring(2) + m + d
          },
          success: res => {
            console.log("存储成功", res)
            app.globalData.userInfo = r.userInfo
            _this.setData({
              userInfo: r.userInfo
            })
          },
          fail: err => {
            console.log("存储失败", err)
          }
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(function () {
      console.log("全局信息", app.globalData.userInfo)
      if (app.globalData.userInfo) {
        _this.setData({
          userInfo: app.globalData.userInfo
        })
        wx.hideLoading({
          complete: (res) => {},
        })
      }
    }, 1000)
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

    // console.log("月", Number(new Date().getMonth() + 1) > 9 ? Number(new Date().getMonth() + 1) : "0" + Number(new Date().getMonth() + 1))
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