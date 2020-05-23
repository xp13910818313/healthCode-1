// pages/QRcode/QRcode.js
let drawQrcode = require("../../dist/weapp.qrcode.js");
wx.cloud.init()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openID:'123',
    result: '',
    miniImg:'',
    openID:'',
  },
  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res.result)
        wx.navigateTo({
          url: '../index/index?title=' + res.result
        })
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  },
  // 设置二维码


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options.userInfo)
    if(options.userInfo){
      this.setData({
        userInfo:JSON.parse(options.userInfo),
        openID:JSON.parse(options.userInfo).openid,
      })
    }
    console.log('openID',that.data.openID)
    wx.cloud.callFunction({
      name:'QRCode-get',
      success:res=>{
        console.log(res.result.fileID)
        that.setData({
          miniImg:res.result.fileID
        })
      }
    })
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
      text: `${that.data.userInfo}`,
      // 执行成功后
      
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