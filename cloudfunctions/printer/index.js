// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  var orderInfo = '';
  orderInfo += '<CB>社区健康驿站</CB><BR>';
  orderInfo += '<C>（上水径）</C><BR>';
  orderInfo += '<CB>体测记录</CB><BR>';
  orderInfo += `地址：${event.landmark.address}<BR>`;
  let phone = ''
  event.landmark.phone.forEach(el => {
    phone += el + ' '
  });
  orderInfo += `电话：${phone}<BR>`;

  orderInfo += `时间：${new Date(event.time).getFullYear()}-${new Date(event.time).getMonth()+1}-${new Date(event.time).getDate()} ${new Date(event.time).getHours()}:${new Date(event.time).getMinutes()}:${new Date(event.time).getSeconds()}<BR>`;
  orderInfo += `用户ID:${event.userID}<BR>`;
  orderInfo += '--------------------------------<BR>';
  event.formData.forEach(elem => {

    if (!elem.isTow) {

      if (elem.title == '健康管理师建议') {
        orderInfo += '--------------------------------<BR>';
        orderInfo += `${elem.title}：<BR>`;
        orderInfo += `${elem.value+elem.unit}<BR>`;
      } else {
        orderInfo += `${elem.title}：${elem.value+elem.unit}<BR>`;
      }
    } else {
      orderInfo += `${elem.title}：<BR>`;
      elem.Tow.forEach(el => {
        orderInfo += ` ${el.title}：${el.value+el.unit}<BR>`;
      })
    }
  });

  orderInfo += '--------------------------------<BR>';
  orderInfo += '<C>和谐邻里    健康社区</C><BR>';
  orderInfo += '扫描下方二维码查看体测记录<BR>';
  orderInfo += '<QR>https://wec.antbiz.cn/qrcode?openid=o7CqC4tuyzdJoM-feijSFwmdkIEE</QR><BR>'; //把二维码字符串用标签套上即可自动生成二维码
  orderInfo += '备注：本单据只做健康咨询使用，不具有医学诊断功能。';
  return orderInfo
}