let express = require('express');
let app = express();
app.listen(3000);
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

let axios = require('axios');
// 我想访问珠峰的网站 我想访问我的服务，我的服务访问珠峰的服务，把数据返回给我的前端

// 轮播图
app.get('/sliders',function (request,response) {
  axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
    response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
  })
});

// 获取课程接口
// 服务端一共有 20条 第一次 获取五条 下一次从五条偏移五条
// offset 偏移量
// limit  每次取多少条
// type 课程类型
let lessons = require('./mock/lessons');
app.get('/lessons/:offset/:limit/:type',(req,res,next) => {
  let {offset,limit,type} = req.params;
  // all react vue
  let lists = lessons;
  if(type !== 'all'){ // 如果不是要全部数据 就要进行过滤
    lists = lessons.filter((item,index)=>{ // list可能有十个
      return item.type===type
    });
  }
  offset = parseInt(offset);
  limit = parseInt(limit);
  let newArrs = lists.slice(offset,offset+limit);
  let hasMore = offset+limit>=lists.length?false:true;
    res.json({hasMore,list:newArrs});
});