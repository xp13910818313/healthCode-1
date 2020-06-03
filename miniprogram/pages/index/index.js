var _this
var app = getApp()
Page({
  data: {
    show: false,
    openid: '',
    lable: [{
        title: '血压'
      },
      {
        title: '视力'
      },
      {
        title: '体脂'
      },
      {
        title: '身高'
      },
      {
        title: '体重'
      },
      {
        title: '血糖'
      },
      {
        title: '尿酸'
      },
    ]
  },
  toABoutUs() {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },

  openConfirm: function (e) {
    if (_this.data.userInfo == null) {

      this.setData({
        dialogShow: true,
        clickType: e.currentTarget.dataset.btn
      })
    } else {
      console.log("生产二维码", _this.data.userInfo.openid)
      wx.navigateTo({
        url: '/pages/QRcode/QRcode?userInfo=' + _this.data.userInfo.openid,
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
            userID: String(y).substring(2) + m + d
          },
          success: res => {
            console.log("存储成功", res)
            app.globalData.userInfo = r.userInfo
            _this.setData({
              userInfo: r.userInfo
            })
            switch (this.data.clickType) {
              case 'code': {
                wx.navigateTo({
                  url: '/pages/QRcode/QRcode?userInfo=' + _this.data.userInfo.openid,
                })
                break
              }
              case 'record': {
                wx.navigateTo({
                  url: '/pages/record/record',
                })
              }
            }
          },
          fail: err => {
            console.log("存储失败", err)
          }
        })
      }
    })

  },
  toRecord(e) {
    if (!getApp().globalData.userInfo) {
      this.setData({
        dialogShow: true,
        clickType: e.currentTarget.dataset.btn
      })
    } else {
      wx.navigateTo({
        url: '/pages/record/record',
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this
    wx.cloud.callFunction({
      name: 'isShow'
    }).then(res => {
      console.log(res.result.data[0].show)
      this.setData({
        show: res.result.data[0].show
      })
    })
    setTimeout(function () {
      console.log("全局信息", app.globalData.userInfo)
      if (app.globalData.userInfo) {
        _this.setData({
          openid: app.globalData.userInfo.openid
        })
      }

      console.log(_this.data.openid)
      if (app.globalData.userInfo) {
        _this.setData({
          userInfo: app.globalData.userInfo
        })

      }
    }, 1000)
  },

  // 数值详情页
  toDetail: function (e) {
    console.log(e.target.dataset.id)
    wx.navigateTo({
      url: `../detail/detail?id=${e.target.dataset.id}&openid=${this.data.openid}`,
    })
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
  userInfo:getApp().globalData.userInfo
})
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