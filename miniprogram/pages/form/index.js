// pages/form/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
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
      openid: this.data.ID,
      healthData: this.data.formData,
      userInfo:this.data.userInfo,
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
    let openid=options.openid?options.openid:'osXMd5M2TCZ-n7oTTwA8Ro1OQ7fQ'
    console.log(openid)
    this.setData({
      ID:openid
    })
    wx.cloud.callFunction({
      name: "health_userInfo",
      data: {
        fun: "get",
        get: "otherPeople",
        openid: openid
      },

    }).then(res=>{

      console.log(res)
      this.setData({
        userInfo:res.result.data[0]
      })
    })



  },

// OCR文本识别
OCR: function () {
  var that = this
  // 调起摄像头，选择照片
  wx.chooseImage({
    success: function(res) {
      let filePath = res.tempFilePaths[0];
      const FM = wx.getFileSystemManager();
      FM.readFile({
        filePath: filePath,
        encoding: "base64",
        success: res => {
          let { data } = res;
          wx.cloud.callFunction({
            name: "ocr",
            data: {
              base64: data
            }
          })
          .then( res => {
            // console.log(JSON.parse(res.result));
            var DATA = JSON.parse(res.result)
            console.log(DATA.TextDetections)

            console.log("获取数据form--》",that.data.formData)
            
            // 处理返回的数据
            var arr = [];
            for (var i=2;i<DATA.TextDetections.length;i++) {
              // console.log(DATA.TextDetections[i])
              // console.log(that.data.formData[i])
              var obj = {}
              // console.log('iiiiii',DATA.TextDetections[i].DetectedText)
              var title = DATA.TextDetections[i].DetectedText
              var num = title.replace(/[^0-9]/ig,"");     
              var reg= /[\u4e00-\u9fa5]/gm
              var txt = title.match(reg)
              txt=txt.join('')
              console.log('获取文本--->',txt)
              console.log('获取数字--->',num)
              obj.title=txt
              obj.value=num
              arr.push(obj)
            }
            that.setData({
              formData:arr
            })
            console.log(arr)
          })
        }
      })
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