var plugin = requirePlugin("WechatSI")

var innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.onError((res) => {
  // 播放音频失败的回调
})

function playTTS(text) {
  //need to add WXAPP plug-in unit: WechatSI
  plugin.textToSpeech({
    lang: "zh_CN",
    tts: true,
    content: text,
    success: function (res) {
      log("succ tts", res.filename)
      innerAudioContext.src = res.filename;
      innerAudioContext.play()
    },
    fail: function (res) {
      log("fail tts", res)
    }
  })
}

function stopTTS() {
  innerAudioContext.stop();
}

module.exports = {
  playTTS: playTTS,
  stopTTS: stopTTS,
}