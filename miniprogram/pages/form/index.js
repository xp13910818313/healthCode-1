// pages/form/index.js

var pageSelf = undefined;
var plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    userInfo: {},
    url: '',
    ID: '',
    openid: null,
    formData: null,
    voice: '',
    del:false
  },
  // 表单提交
  submitForm() {
    wx.showLoading({
      title: '正在提交',
    })
    console.log(this.data.formData)
    let data=this.data.formData
    data.push({
      title:'健康管理师建议',
      value:this.data.voice,
      unit:''
    })
    console.log('data==>',data)
   
    let formData = {
      openid: this.data.openid,
      healthData: data,
      userInfo: this.data.userInfo,
      time: new Date()
    }
    console.log('formData==>',formData)

    getApp().globalData.formData=formData

    console.log('globalData.formData==>',getApp().globalData.formData)
    wx.cloud.callFunction({
      name: 'healthData',
      data: {
        type: 'add',
        formData: formData
      }
    }).then(res => {
      console.log('添加成功', res)

      wx.hideLoading({
        complete: (res) => {},
      })
      wx.navigateTo({
        url: './form',
      })

    })
  },
  //表单输入监听
  formChange(e) {
    let formData = this.data.formData
    console.log(e.detail.value)
    if (!e.currentTarget.dataset.istow) {
      formData[e.currentTarget.dataset.index].value = e.detail.value
      this.setData({
        formData: formData
      })
    } else {
      formData[e.currentTarget.dataset.index].Tow[e.currentTarget.dataset.key].value = e.detail.value
      this.setData({
        formData: formData
      })
    }
    console.log(this.data.formData)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name: 'isShow'
    }).then(res => {
      console.log(res.result.data[0].show)
      this.setData({
        show: res.result.data[0].show
      })
    })
    let openid = decodeURIComponent(options.openid)

    this.setData({
      openid: openid
    })
    console.log(this.data.openid)
    wx.cloud.callFunction({
      name: "health_userInfo",
      data: {
        fun: "get",
        get: "otherPeople",
        openid: that.data.openid
      },

    }).then(res => {
      console.log(res.result)
      this.setData({
        userInfo: res.result.data[0]
      })
    })
  },

  // 语音转文字（触发开始）
  streamRecord: function (e) {
    var plugin = requirePlugin("WechatSI")
    let manager = plugin.getRecordRecognitionManager()
    manager.onRecognize = function (res) {
      console.log("current result", res.result)
    }
    manager.onStop = function (res) {
      console.log("record file path", res.tempFilePath)
      console.log("result", res.result)
    }
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
      
    }
    manager.onError = function (res) {
      console.error("error msg", res.msg)
    }
    manager.start({
      duration: 30000,
      lang: "zh_CN"
    })
  },


  // OCR文本识别
  OCR: function () {
    var that = this
    // 调起摄像头，选择照片
    wx.chooseImage({
      success: function (res) {
        let filePath = res.tempFilePaths[0];
        console.log(filePath)
        const FM = wx.getFileSystemManager();
        FM.readFile({
          filePath: filePath,
          encoding: "base64",
          success: res => {
            let {
              data
            } = res;
            wx.cloud.callFunction({
                name: "ocr",
                data: {
                  base64: data
                }
              })
              .then(res => {
                var DATA = JSON.parse(res.result)
                console.log(DATA.TextDetections)

                console.log("获取数据form--》", that.data.formData)

                // 处理返回的数据
                var arr = [];
                var reg = /[\u4e00-\u9fa5]/gm;
                var te = /[\u4e00-\u9fa5]+[0-9]/;
                for (var i = 0; i < DATA.TextDetections.length; i++) {
                  var DetectedText = DATA.TextDetections[i].DetectedText
                  if (te.test(DetectedText)) {
                    var obj = {}
                    var txt = DetectedText.match(reg)
                    var num = DetectedText.replace(/[^0-9]/ig, "");
                    txt = txt.join('')
                    console.log('获取文本--->', txt)
                    console.log('获取数字--->', num)
                    obj.title = txt
                    obj.value = num
                    arr.push(obj)
                  }
                }
                console.log(arr)
                that.setData({
                  formData: arr
                })
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
    console.log('show')
    this.setData({
      formData: ""
    })
    wx.cloud.callFunction({
      name: "healthData",
      data: {
        type: "list"
      }
    }).then(r => {
      console.log(r.result.data[0].list)
      this.setData({
        formData: r.result.data[0].list
      })
    })
    var that = this
    manager.onRecognize = function (res) {
      // console.log('manager.onRecognize')
      // console.log(res)
      // wx.showToast({
      //   title: res.result,
      // })
      // cons.log("current result", res.result)
    }
    manager.onStop = function (res) {
      console.log('manager.onStop')
      console.log('识别结果', res.result) //语音识别信息打印
      var voice = that.data.voice
      voice = voice.concat(res.result)
      that.setData({
        voice: voice,
        del:true
      })
    }
    manager.onError = function (res) {
      console.log('manager.onError')
      console.log(res) //报错信息打印
    }
  },
  //添加两个方法
  touchdown_plugin: function () {
    var _this = this
    wx.showLoading({
      title: '录音中……',
    })
    // UTIL.stopTTS();
    manager.start({
      duration: 30000,
      lang: "zh_CN"
    })
  },
  //手指松开
  touchup_plugin: function () {
    manager.stop();
    wx.hideLoading({
      complete: (res) => {},
    })
    wx.showToast({
      title: '正在识别……',
      icon: 'loading',
      duration: 2000
    })
  },

  del:function() {
    this.setData({
      voice:'',
      del:false
    })

  },
  text(e){
    console.log(this.data.voice)
    console.log(e.detail.value)
    this.setData({
      voice:e.detail.value.trim()
    })
    if(this.data.voice=='') {
      this.setData({
        del:false
      })
    } else {
      this.setData({
        del:true
      })
    }
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