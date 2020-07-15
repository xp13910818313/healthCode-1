// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let limit = event.limit ? event.limit : 20
  let skip = event.skip ? event.skip : 0
  let db = cloud.database().command
  const $ = cloud.database().command.aggregate
  const wxContext = cloud.getWXContext()

  switch (event.type) {
    case 'count': {
      return await cloud.database().collection('dataTest').count()
    }
    case 'indicator': {
      if (event.unionId) {
        return await cloud.database().collection('dataTest').aggregate().match({
          Member: {
            WXUnionid:event.unionId
          }
        }).sort({
          time: -1,
        }).skip(skip).sample({
          size: limit
        }).project({
          Record: $.filter({
            input: '$Record',
            as: 'item',
            cond: $.eq(['$$item.ProjectCode', event.ProjectCode])
          })
        }).end()
      } else {
        return await cloud.database().collection('dataTest').aggregate().sort({
          time: -1,
        }).skip(skip).sample({
          size: limit
        }).project({
          Record: $.filter({
            input: '$Record',
            as: 'item',
            cond: $.eq(['$$item.ProjectCode', event.ProjectCode])
          })
        }).end()
      }
    }
    case 'report': {
      if (event.unionId) {
        // return await cloud.database().collection('dataTest').aggregate().match({
        //   Member: {
        //     IdCode: event.IdCode
        //   }
        // }).sample({
        //   size: 2
        // }).project({
        //   Record: $.filter({
        //     input: '$Record',
        //     as: 'item',
        //     cond: $.eq(['$$item.ProjectCode', '']),
        //   })
        // }).project({
        //   first: $.arrayElemAt(['$Record', 0]),
        // }).end()
        return await cloud.database().collection('dataTest').aggregate().match({
          Member: {
            WXUnionid:event.unionId
          }
        })
          .addFields({
            Record0: $.arrayElemAt(['$Record', 0])
          })
          .addFields({
            Record0Items0: $.arrayElemAt(['$Record0.Items', 0])
          })
          .project({
            _id: 0,
            Record0Items0: 1,

          }).match({
            Record0Items0:{
              Code:'Result'
            }
          })
          .end()
      }
    }
  }


}