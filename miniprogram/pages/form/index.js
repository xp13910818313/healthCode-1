// pages/form/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    url: '',
    ID: '',
    formData: [{
      title: '血压',
      value: ''
    }, {
      title: '视力',
      value: ''
    }, {
      title: '体脂',
      value: ''
    }, {
      title: '身高',
      value: ''
    }, {
      title: '体重',
      value: ''
    }, {
      title: '血糖',
      value: ''
    }, {
      title: '尿酸',
      value: ''
    }, ]

  },
  submitForm() {
    wx.showLoading({
      title: '正在提交',
    })
    console.log(this.data.formData)
    let formData = {
      ID: this.data.ID,
      healthData: this.data.formData,
      time: new Date()
    }
    console.log(formData)
    wx.cloud.callFunction({
      name: 'healthData',
      data: {
        type: 'add',
        formData: formData
      }
    }).then(res => {
      console.log('添加成功', res)
      let formData = this.data.formData
      formData.forEach(elem => {
        elem.value = ''
      });
      this.setData({
        formData: formData
      })
      wx.hideLoading({
        complete: (res) => {},
      })
      wx.showToast({
        title: '提交成功',
      })
    })
  },
  formChange(e) {
    let formData = this.data.formData
    formData[e.currentTarget.dataset.index].value = e.detail.value
    this.setData({
      formData: formData
    })
    console.log(this.data.formData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: "health_userInfo",
      data: {
        fun: "get",
        get: "otherPeople",
        openid: 'osXMd5M2TCZ-n7oTTwA8Ro1OQ7fQ'
      },

    }).then(res=>{
      console.log(res)
    })
    wx.cloud.callFunction({
      name: 'demo',
      data: {
        openid: '123'
      }
    }).then(res => {
      console.log(res.result.fileID)
      this.setData({
        url: res.result.fileID
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