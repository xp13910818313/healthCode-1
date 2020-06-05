// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: [],
    userInfo: null,
    landmark: null
  },

  printer() {
    console.log('test')
    console.log(this.data.formData)

    //USER和UKEY在飞鹅云（ http://admin.feieyun.com/ ）管理后台的个人中心可以查看
    var USER = "1061090734@qq.com"; //必填，飞鹅云 http://admin.feieyun.com/ 管理后台注册的账号名
    var UKEY = "dYLwK6pk2N4FAP3v"; //必填，这个不是填打印机的key，是在飞鹅云后台注册账号后生成的UKEY

    var SN = '921547049'; //必填，打印机编号,打印机必须要在管理后台先添加

    //以下URL参数不需要修改
    var HOST = "api.feieyun.cn"; //域名
    var PATH = "/Api/Open/"; //接口路径
    var STIME = new Date().getTime(); //请求时间,当前时间的秒数
    var SIG = hex_sha1(USER + UKEY + STIME); //获取签名
    var hexcase = 0;
    var chrsz = 8;
    wx.cloud.callFunction({
      name: 'printer',
      data: {
        landmark: this.data.landmark,
        time: this.data.time,
        formData: this.data.formData,
        userID: this.data.userInfo.userInfo.userID
      }
    }).then(res => {
      console.log('printer==>', res.result)
      print_r(SN, res.result, 1);
    })

    //***接口返回值说明***
    //正确例子：{"msg":"ok","ret":0,"data":"123456789_20160823165104_1853029628","serverExecutedTime":6}
    //错误：{"msg":"错误信息.","ret":非零错误码,"data":null,"serverExecutedTime":5}
    // console.log(orderInfo);
    //打开注释可测试
    // print_r(SN, orderInfo, 1);

    function hex_sha1(s) {
      return binb2hex(core_sha1(AlignSHA1(s)));
    }

    function core_sha1(blockArray) {
      var x = blockArray;
      var w = Array(80);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var e = -1009589776;
      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for (var j = 0; j < 80; j++) {
          if (j < 16)
            w[j] = x[i + j];
          else
            w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
          var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
          e = d;
          d = c;
          c = rol(b, 30);
          b = a;
          a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
      }
      return new Array(a, b, c, d, e);
    }

    function sha1_ft(t, b, c, d) {
      if (t < 20)
        return (b & c) | ((~b) & d);
      if (t < 40)
        return b ^ c ^ d;
      if (t < 60)
        return (b & c) | (b & d) | (c & d);
      return b ^ c ^ d;
    }

    function sha1_kt(t) {
      return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
    }

    function safe_add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    }

    function rol(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    function AlignSHA1(str) {
      var nblk = ((str.length + 8) >> 6) + 1,
        blks = new Array(nblk * 16);
      for (var i = 0; i < nblk * 16; i++)
        blks[i] = 0;
      for (i = 0; i < str.length; i++)
        blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);
      blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
      blks[nblk * 16 - 1] = str.length * 8;
      return blks;
    }

    function binb2hex(binarray) {
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var str = "";
      for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
          hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
      }
      return str;
    }

    /*
     *  打印订单方法：Open_printMsg
     */
    function print_r(SN, orderInfo, TIMES) {

      wx.showLoading({
        title: '正在打印',
      })
      wx.request({
        url: 'https://' + HOST + PATH,
        data: {
          user: USER, //账号
          stime: STIME, //当前时间的秒数，请求时间
          sig: SIG, //签名

          apiname: "Open_printMsg", //不需要修改
          sn: SN, //打印机编号
          content: orderInfo, //打印内容
          times: TIMES, //打印联数,默认为1
        },
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data)
          wx.hideLoading({
            complete: (res) => {},
          })
        },
        fail: err => {
          wx.hideLoading({
            complete: (res) => {},
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'landmark',
      data: {
        type: 'get'
      }
    }).then(res => {
      console.log(res.result.data[0])
      this.setData({
        landmark: res.result.data[0]
      })
      wx.hideLoading({
        complete: (res) => {},
      })
    })
    if (getApp().globalData.formData) {
      this.setData({
        formData: getApp().globalData.formData.healthData,
        time: getApp().globalData.formData.time,
        userInfo: getApp().globalData.formData.userInfo
      })
      console.log('formdata==>', this.data.formData)
     
    }
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