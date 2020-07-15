// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    healthClassify: []
  },
  toResult(e) {
    wx.navigateTo({
      url: '../healthResult/healthReslt?code='+e.currentTarget.dataset.code+'&name='+e.currentTarget.dataset.name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'health_userInfo',
      data: {
        fun: 'get',
        get: 'oneself'
      }
    }).then(res => {
      console.log('我的用户信息==>', res.result.data)
      this.setData({
        userInfo: res.result.data[0]
      })
    })
    wx.cloud.callFunction({
      name: 'database_manage',
      data: {
        method: 'get',
        collectionName: 'healthClassify'

      }
    }).then(res => {
      console.log('检测项目==>', res)
      this.setData({
        healthClassify: res.result.data
      })
      wx.hideLoading({
        complete: (res) => {},
      })
    })
    // wx.cloud.callFunction({
    //   name: 'healthData',
    //   data: {
    //     type: 'count'
    //   }
    // }).then(res => {

    //   wx.cloud.callFunction({
    //     name: 'healthData',
    //     data: {
    //       type: 'get',
    //     }
    //   }).then(res => {

    //     let allData = res.result.data
    //     allData.forEach(elem => {
    //       elem.Member.Sex = elem.Member.Sex == 0 ? '保密' : elem.Member.Sex == 1 ? '男' : '女'
    //       elem.Record.forEach(targetItem => {
    //         switch (targetItem.ProjectCode) {
    //           case '10': {
    //             targetItem.ProjectCode = '尿常规'
    //             break
    //           }
    //           case '20': {
    //             targetItem.ProjectCode = '餐前血糖'
    //             break
    //           }
    //           case '21': {
    //             targetItem.ProjectCode = '餐后30分钟血糖'
    //             break
    //           }
    //           case '22': {
    //             targetItem.ProjectCode = '餐后60分钟血糖'
    //             break
    //           }
    //           case '23': {
    //             targetItem.ProjectCode = '餐后120分钟血糖'
    //             break
    //           }
    //           case '30': {
    //             targetItem.ProjectCode = '血压检测'
    //             break
    //           }
    //           case '31': {
    //             targetItem.ProjectCode = '血压检测（右侧）'
    //             break
    //           }
    //           case '40': {
    //             targetItem.ProjectCode = '血氧检测'
    //             break
    //           }
    //           case '50': {
    //             targetItem.ProjectCode = '体温检测'
    //             break
    //           }
    //           case '70': {
    //             targetItem.ProjectCode = '血红蛋白'
    //             break
    //           }
    //           case '80': {
    //             targetItem.ProjectCode = '心电检测'
    //             break
    //           }
    //           case '90': {
    //             targetItem.ProjectCode = '身高体重'
    //             break
    //           }
    //           case '130': {
    //             targetItem.ProjectCode = '血脂'
    //             break
    //           }
    //           case '140': {
    //             targetItem.ProjectCode = '肺功能'
    //             break
    //           }
    //           case '180': {
    //             targetItem.ProjectCode = '体脂(人体成分)'
    //             break
    //           }
    //           case '190': {
    //             targetItem.ProjectCode = '血脂'
    //             break
    //           }
    //           case '200': {
    //             targetItem.ProjectCode = '胎心'
    //             break
    //           }
    //           case '210': {
    //             targetItem.ProjectCode = '尿酸'
    //             break
    //           }
    //           case '220': {
    //             targetItem.ProjectCode = '尿糖'
    //             break
    //           }
    //           case '230': {
    //             targetItem.ProjectCode = '中医体质辨识'
    //             break
    //           }
    //           case '240': {
    //             targetItem.ProjectCode = '视力'
    //             break
    //           }
    //           case '250': {
    //             targetItem.ProjectCode = '电子尺'
    //             break
    //           }
    //         }
    //       });
    //     });
    //     this.setData({
    //       dataList: allData
    //     })
    //   })
    // })

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