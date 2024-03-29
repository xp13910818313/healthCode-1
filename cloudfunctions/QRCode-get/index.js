// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    const result = await cloud.openapi.wxacode.get({
      path: `/pages/form/index?openid=${event.openid}`,
      width: 460
    })

    return await cloud.uploadFile({
      cloudPath: `QRCode/${wxContext.OPENID}/name.png`,
      fileContent: result.buffer
    })
  } catch (err) {
    console.log(err)
    return err
  }
}