// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let health = cloud.database().collection("health_userInfo")
  if (event.fun == "add") {
    let len = await (await health.where({
      openid: wxContext.OPENID,
    }).get()).data.length

    let userLen = await (await health.get()).data.length + 1
    
    if (len == 0) {
      return await health.add({
        data: {
          openid: wxContext.OPENID,
          userInfo: event.userInfo,
          userID: event.userID + userLen
        }
      })
    } else return "用户名已存在"

  } else if (event.fun == "get") {
    if (event.get == "oneself") {
      return await health.where({
        openid: wxContext.OPENID,
      }).get()
    } else if (event.get == "otherPeople") {
      
      return await cloud.database().collection('health_userInfo').where({
        openid: event.openid
      }).get()
    }
  }
}