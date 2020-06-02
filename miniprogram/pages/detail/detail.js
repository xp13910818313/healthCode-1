// pages/detail/detail.js
wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:false,
      data:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options.id)
    console.log(options.openid)
    wx.cloud.callFunction({
      name:'healthData',
      data:{
        type:'get',
        openid:options.openid
      },
      success:res=>{
        console.log(res.result.data[0].time)
        const data =  res.result.data[0].healthData
        var time = res.result.data[0].time
        time = time.split('-')
        // 日期
        var mouth = time[1]
        var date = time[2]
        // console.log(mouth,date[0],date[1],)
        // console.log(mouth+'月'+date[0]+date[1]+'日') 
        var date = mouth+'月'+date[0]+date[1]+'日'   

        // 时间
        console.log(time[2].split(':'))
        var time1 = time[2].split(':')
        var hour = time1[1]  // 时
        var min = time1[2]  // 分
        var min = time1[2].split('.')
        var min = min[0]
        console.log(hour+ ':'+ min)
        var time2 = hour+ ':'+ min

        for(var i = 0;i<data.length;i++) {
          // console.log(data[i])
          if(options.id==data[i].title) {
              console.log(data)
              data[i].date = date
              data[i].time = time2
              var arr = []
              arr.push(data[i])
              that.setData({
                data:arr
              })
              console.log(that.data.data)
          }
        }
      },
      file:err=>{
        console.log(err)
      }
    })
  },

  show:function(e) {
    this.setData({
      show:true
    })
  },

  // amplification:function() {
  //   wx.previewImage({
  //     urls:['https://pics.images.ac.cn/image/5ed4ae688a5f3.html'],
  //     success:res=>{
  //       console.log(res)
  //     }
  //   })
  // },

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