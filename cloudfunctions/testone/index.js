// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise');
cloud.init({
  env:'health-1u6oj'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9487505d3a876738&secret=eeffdbe7b7336ae6a02ccb2db07209f9';
  return await rp(url)
    .then(function (res) {
      return await rp(`https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${JSON.parse(res).access_token}&env=health-1u6oj&name=data_processing&POSTBODY=eeee`).then(res=>{
        return res
      }).catch(err=>{
        return {
          msg:'失败',
        }
      })
      return JSON.parse(res).access_token

    })
    .catch(function (err) {
      return '失败'
    });
}