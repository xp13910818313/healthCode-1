// pages/healthResult/healthReslt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    report:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    })
    let type='indicator'
    if(options.code==''){
      type='report'
    }
    wx.setNavigationBarTitle({
      title: options.name
    })
    console.log(options.code)
    this.setData({
      ProjectCode: options.code
    })

    wx.cloud.callFunction({
      name: 'healthData',
      data: {
        type: 'count'
      }
    }).then(res => {
      console.log(res)
      wx.cloud.callFunction({
        name: 'get_healthData',
        data: {
          type:type,
          unionId:'ogRo8v17SfJvgtf7l3NHlx5AFlu8',
          ProjectCode: this.data.ProjectCode,
        }
      }).then(res => {
        wx.hideLoading({
          complete: (res) => {},
        })
        if(type=='report'){
          console.log('type==>',type)
          console.log('res.result.list==>',res.result.list)
          this.setData({
            report:res.result.list
          })
          return
        }
        console.log(res.result)
        let Data = res.result.list
        if(!res.result.list){
          return
        }
        let allData = []
        Data.forEach((elem, index) => {
          if (elem.Record && elem.Record.length !== 0) {
            allData.push(elem)
          }
        });
        console.log(allData)
        allData.forEach((elem, index) => {
          elem.Record.forEach(targetItem => {
            switch (targetItem.ProjectCode) {
              case '10': {
                targetItem.ProjectCode = '尿常规'
                break
              }
              case '20': {
                targetItem.ProjectCode = '餐前血糖'
                break
              }
              case '21': {
                targetItem.ProjectCode = '餐后30分钟血糖'
                break
              }
              case '22': {
                targetItem.ProjectCode = '餐后60分钟血糖'
                break
              }
              case '23': {
                targetItem.ProjectCode = '餐后120分钟血糖'
                break
              }
              case '30': {
                targetItem.ProjectCode = '血压检测'
                break
              }
              case '31': {
                targetItem.ProjectCode = '血压检测（右侧）'
                break
              }
              case '40': {
                targetItem.ProjectCode = '血氧检测'
                break
              }
              case '50': {
                targetItem.ProjectCode = '体温检测'
                break
              }
              case '70': {
                targetItem.ProjectCode = '血红蛋白'
                break
              }
              case '80': {
                targetItem.ProjectCode = '心电检测'
                break
              }
              case '90': {
                targetItem.ProjectCode = '身高体重'
                break
              }
              case '130': {
                targetItem.ProjectCode = '血脂'
                break
              }
              case '140': {
                targetItem.ProjectCode = '肺功能'
                break
              }
              case '180': {
                targetItem.ProjectCode = '体脂(人体成分)'
                break
              }
              case '190': {
                targetItem.ProjectCode = '血脂'
                break
              }
              case '200': {
                targetItem.ProjectCode = '胎心'
                break
              }
              case '210': {
                targetItem.ProjectCode = '尿酸'
                break
              }
              case '220': {
                targetItem.ProjectCode = '尿糖'
                break
              }
              case '230': {
                targetItem.ProjectCode = '中医体质辨识'
                break
              }
              case '240': {
                targetItem.ProjectCode = '视力'
                break
              }
              case '250': {
                targetItem.ProjectCode = '电子尺'
                break
              }
            }
          });
        });
        this.setData({
          dataList: allData
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