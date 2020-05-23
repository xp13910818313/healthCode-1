const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.get({
      path: '/pages/index/index',
      width: 430
    })
    return cloud.uploadFile({
      cloudPath: 'code.png',
      fileContent: result.buffer
    })
  } catch (err) {
    return err
  }
}