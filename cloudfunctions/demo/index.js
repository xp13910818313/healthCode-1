const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.createQRCode({
        path: '/pages/index/index?openid='+event.openID,
        width: 450
      })
     return cloud.uploadFile({
       cloudPath:'code.png',
       fileContent:result.buffer
     })
  } catch (err) {
    return err
  }
}