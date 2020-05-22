const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.get({
        path: `page/index/index?userInfo=${event.userInfo}`,
        width: 430
      })
    return  result,result.buffer.toString('base64')
  } catch (err) {
    return err
  }
}