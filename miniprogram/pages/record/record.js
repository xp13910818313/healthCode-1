// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log(getApp().globalData.userInfo)
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo
      })

    }
    wx.cloud.callFunction({
      name: 'healthData',
      data: {
        type: 'count'
      }
    }).then(res => {
      console.log('数据库长度==>', res.result.total)
      wx.cloud.callFunction({
        name: 'healthData',
        data: {
          type: 'get',
          mydata:"mydata"
        }
      }).then(res => {
        console.log('记录查询==>', res.result.data)
        res.result.data.forEach(elem => {
          elem.time = `${new Date(elem.time).getFullYear()}-${new Date(elem.time).getMonth()+1>=10?new Date(elem.time).getMonth()+1:'0'+(new Date(elem.time).getMonth()+1)}-${new Date(elem.time).getDate()>=10?new Date(elem.time).getDate():'0'+new Date(elem.time).getDate()} ${new Date(elem.time).getHours()>=10?new Date(elem.time).getHours():'0'+new Date(elem.time).getHours()}:${new Date(elem.time).getMinutes()>=10?new Date(elem.time).getMinutes():'0'+new Date(elem.time).getMinutes()}:${new Date(elem.time).getSeconds()>=10?new Date(elem.time).getSeconds():'0'+new Date(elem.time).getSeconds()}`
        });
        
        console.log('记录查询==>', res.result.data[0].userInfo)
        that.setData({
          dataList: res.result.data,
          userInfo: res.result.data[0].userInfo
        })
      })
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