var config = {
    database: 'test', // 使用哪个数据库
    username: 'www', // 用户名
    password: '', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

module.exports = config;

// create table posts (
//     id varchar(50) not null,
//     title varchar(100) not null,
//     publish_time varchar(10) not null,
//     content varchar(9000) not null,
//     createdAt bigint not null,
//     updatedAt bigint not null,
//     version bigint not null,
//     primary key (id)
// ) engine=innodb;