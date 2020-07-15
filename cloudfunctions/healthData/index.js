// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let db = cloud.database().command
  const $ = cloud.database().command.aggregate
  switch (event.type) {
    case 'get': {
      if (event.openid) {
        return await cloud.database().collection('dataTest').where({
          openid: event.openid
        }).orderBy('time', 'desc').field({
          userInfo: false
        }).get()
      } else if (event.mydata) {
        return await cloud.database().collection('dataTest').where({
          openid: wxContext.OPENID
        }).orderBy('time', 'desc').get()
      } else if (event.phone) {
        return await cloud.database().collection('dataTest').where({
          Member: {
            Mobile: event.phone
          }
        }).orderBy('time', 'desc').get()
      } else if (event.ProjectCode) {
        return cloud.database().collection('dataTest').aggregate().match({
          Member:{
            IdCode:event.IdCode
          }
        }).project({
            Record: $.filter({
              input: '$Record',
              as: 'item',
              cond: $.eq(['$$item.ProjectCode', event.ProjectCode])
            })
          }).end()
      }else{
        return await cloud.database().collection('dataTest').where({
          Record: db.elemMatch({
            ProjectCode: db.eq(event.ProjectCode)
          })
        }).orderBy('time', 'desc').get()
      }


    }
    case 'add': {
      return await cloud.database().collection('dataTest').add({
        data: event.formData
      })
    }
    case 'count': {
      if (event.countType && event.countType == 'mine') {
        return await cloud.database().collection('dataTest').where({
          openid: wxContext.OPENID
        }).count()
      } else {
        return await cloud.database().collection('dataTest').count()
      }

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