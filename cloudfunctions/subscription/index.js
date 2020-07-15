// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: wxContext.OPENID,
      page: 'pages/index/index',
      lang: 'zh_CN',
      data: {
        thing1: {
         value: '假的会议'
        },
        date2: {
          value: '2020年6月15日'
        },
        thing3: {
          value: '假地点'
        },
      },
      templateId: 'jQgJw3HDkse2VTSKXgmCS9qL1idVdyPxskFnB75a0T4',
      miniprogramState: 'developer'
    })
    return result
  } catch (err) {
    return err
  }
}