// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
 
  const wxContext = cloud.getWXContext()
  let _ = cloud.database().command
  let skip = event.skip ? event.skip : 0
  let limit = event.limit ? event.limit : 100
  switch (event.method) {
    case 'get': {
      if (event.whereData) {

        return await cloud.database().collection(event.collectionName).where(event.whereData).skip(skip).limit(limit).get()
      }
      return await cloud.database().collection(event.collectionName).skip(skip).limit(limit).get()

    }
    case 'add': {
      return await cloud.database().collection(event.collectionName).add({
        data: event.addData
      })
    }
    case 'update': {
      return await cloud.database().collection(event.collectionName).where(event.whereData).update({
        data: event.upData
      })
    }
    case 'remove': {
      return await cloud.database().collection(event.collectionName).where(event.whereData).remove()
    }
    case 'count': {
      return await cloud.database().collection(event.collectionName).count()
    }
  }
}