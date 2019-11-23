import Mock from 'mockjs';
const Random = Mock.Random

Mock.setup({
    timeout: '200 - 400'
})

let basicData = Mock.mock({
    'list|1-20': [{
        'id|+1': 1,
        "title": Random.ctitle(4),
        "text": Random.cparagraph(),
        "rank|+1": 100,//随机生成1-100的数字
        "img": Random.image('150x150', '#eee')
    }]
});



// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news', 'get', basicData);
