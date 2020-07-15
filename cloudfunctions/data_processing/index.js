// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  delete event.userInfo
  event.time=new Date().getTime()
    return await cloud.database().collection('dataTest').add({
      data: {...event}
    })

}