// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  switch (event.type) {
    case 'get': {
      if (event.openid) {
        return await cloud.database().collection('healthData').where({
          openid: event.openid
        }).orderBy('time', 'desc').field({
          userInfo: false
        }).get()
      } else if (event.mydata) {
        return await cloud.database().collection('healthData').where({
          openid: wxContext.OPENID
        }).orderBy('time', 'desc').get()
      }
      return await cloud.database().collection('healthData').get()

    }
    case 'add': {
      return await cloud.database().collection('healthData').add({
        data: event.formData
      })
    }
    case 'count': {
      return await cloud.database().collection('healthData').where({
        openid: wxContext.OPENID
      }).count()
    }
    case 'list': {
      return await cloud.database().collection('health_list').get()
    }
    case 'getlist': {
      return await cloud.database().collection('health_list').add({
        data: {
          list: event.list
        }
      })
    }
  }
}