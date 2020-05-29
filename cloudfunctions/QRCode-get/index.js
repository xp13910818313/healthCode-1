// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    const result = await cloud.openapi.wxacode.get({
        path: `/pages/form/index?openID=${event.openID}`,
        width: 460
      })
    console.log(result)
    const upload = await cloud.uploadFile({
      cloudPath: `QRCode/name.png`,
      fileContent:result.buffer
    })
    return upload
  } catch(err) {
    console.log(err)
    return err
  }
}