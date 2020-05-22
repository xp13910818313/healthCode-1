const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.createQRCode({
        path: '/pages/form/index',
        width: 430
      })
    return result
  } catch (err) {
    return err
  }
}