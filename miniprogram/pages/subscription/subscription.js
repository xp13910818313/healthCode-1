// pages/subscription/subscription.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  sendSubScrip() {
    wx.cloud.callFunction({
      name: 'subscription'
    }).then(res => {
      console.log('发送订阅', res)
    })
  },
  subScrip() {
    console.log('订阅')
    wx.requestSubscribeMessage({
      tmplIds: ['jQgJw3HDkse2VTSKXgmCS9qL1idVdyPxskFnB75a0T4'],
      success: (res) => {
        console.log('订阅授权', res)
        if (res['jQgJw3HDkse2VTSKXgmCS9qL1idVdyPxskFnB75a0T4'] == 'accept') {
          wx.cloud.callFunction({
            name: 'subscription'
          }).then(res => {
            console.log('发送订阅', res)
          })
        }



      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.sendSubScrip() 
    wx.getSetting({
      complete: (res) => {
        console.log('getsetting==>', res)
      },
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