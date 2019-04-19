const Sequelize = require('sequelize');
const config = require('../config');

// 创建sequelize对象实例
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
// 定义模型
var Profile = sequelize.define('profile', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    job: Sequelize.STRING(100),
    location: Sequelize.STRING(100),
    post: Sequelize.BIGINT,
    tags: Sequelize.BIGINT,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
}, {
    timestamps: false
});

var Post = sequelize.define('post', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    title: Sequelize.STRING(100),
    publish_time: Sequelize.STRING(10),
    content: Sequelize.STRING(255),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
});

// var now = Date.now();
// // 数据库写入数据
// (async () => {
// 	var post_1 = await Post.create({
// 		id: 'p-' + now,
// 		title: '第一篇blog',
//         publish_time: '2019-4-1',
//         content: '第一篇blog第一篇blog第一篇blog第一篇blog第一篇blog',
// 		createdAt: now,
//         updatedAt: now,
//         version: 0
// 	});
// 	console.log('created' + JSON.stringify(post_1));
// })();
var profile = {};
var posts = [];
// 查询数据
(async () => {
    var Profiles = await Profile.findAll({
        where: {
            name: 'cyl'
        }
    });
    var Posts = await Post.findAll();
    
    console.log(`find ${Profiles.length} Profile:`);
    // console.log()
    console.log(`find ${Posts.length} Post:`);
    for (let p of Profiles) {
        profile = JSON.stringify(p); 
    }
    for (let p of Posts) {
        var post = JSON.stringify(p)
        posts.push(JSON.parse(post));      
    }  
})();

var recent = [
    {
        category: '前端',
        title: '我的第一篇博客',
        publish_time: '2019-4-1'
    },
    {
        category: '前端',
        title: '我的第二篇博客',
        publish_time: '2019-4-2'
    },{
        category: '前端',
        title: '我的第二篇博客',
        publish_time: '2019-4-3'
    },
]   

const pageSize = 3

var jsonReturn = function(ctx, data) {
    ctx.response.type = 'application/json';
    ctx.response.body = data
}

var getPageData = function(data, page) {
    var offset = (page -1 ) * pageSize
    return data = data.slice(offset, offset+pageSize)
}

module.exports = {
    'GET /api/profile': async (ctx, next) => {
        jsonReturn(ctx, profile) 
    },
    'GET /api/archives': async (ctx, next) => {
        jsonReturn(ctx, getPageData(posts, ctx.request.query.page))
    },
    'GET /api/post': async (ctx, next) => {
        var num = ctx.request.query.num
        
        var post = getPageData(posts, ctx.request.query.page)

        if(num >= 0){
            post = post[num];
        }
        

        jsonReturn(ctx, post)
    },
    'GET /api/recent': async (ctx, next) => {
        jsonReturn(ctx, recent)
    },
    'POST /api/write': async (ctx, next) => {
        let {title, publish_time, content} = ctx.request.body
        var now = Date.now();
        // 数据库写入数据
        (async () => {
	        var blog = await Post.create({
		        id: 'p-' + now,
		        title: title,
                publish_time: publish_time,
                content: content,
		        createdAt: now,
                updatedAt: now,
                version: 0
	        });
            console.log('created' + JSON.stringify(blog));  
            var Posts = await Post.findAll();
            posts = [];
            for (let p of Posts) {
                var post = JSON.stringify(p)
                posts.push(JSON.parse(post));      
            }
        })();
        jsonReturn(ctx, {'msg': 'OK'});
    }
}