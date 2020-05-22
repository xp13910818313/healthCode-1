// pages/form/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src2: '',
    ID: 1234567,
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
      ID: 1234567,
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
    // wx.cloud.callFunction({
    //   name: 'demo'
    // }).then(res=>{
    //   console.log(res)
    //   this.writeFile(res.result.buffer)

    // })
    var that = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx8e92a960e893778a&secret=54c91375f96d0e16a041e3687873f5cb',
      success: res => {
        console.log('token==>', res.data)
        // 生成页面的二维码
        wx.request({
          //注意：下面的access_token值可以不可以直接复制使用，需要自己请求获取
          url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res.data.access_token,
          data: {
            scene: '000',
            page: "pages/index/index" //这里按照需求设置值和参数   
          },
          method: "POST",
          responseType: 'arraybuffer', //设置响应类型
          success(res) {
            console.log(res)
            var src2 = wx.arrayBufferToBase64(res.data); //对数据进行转换操作
            console.log(src2)
            that.setData({
              src2
            })
          },
          fail(e) {
            console.log(e)
          }
        })
      }
    })





  },
  writeFile(buffer) {
    const FILE = wx.getFileSystemManager()
    const FILE_PATH = wx.env.USER_DATA_PATH + '/qrcode.jpg'
    FILE.writeFile({
      filePath: FILE_PATH,
      encoding: 'binary',
      data: buffer,
      success: res => {
        console.log(FILE_PATH)
      }
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