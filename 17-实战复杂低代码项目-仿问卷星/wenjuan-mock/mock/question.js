const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/question/:id", // 获取单个问卷信息
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          id: Random.integer(1, 100),
          title: Random.cword(5, 10),
          description: Random.cword(10, 20)
        }
      };
    }
  },
  {
    // 获取所有问卷列表
    url: "/api/question",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          list: new Array(5).fill(null).map(() => ({
            id: Random.integer(1, 100),
            title: Random.cword(5, 10),
            description: Random.cword(10, 20),
            createdAt: Random.datetime()
          }))
        }
      };
    }
  },
  {
    url: "/api/question", // 创建问卷
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {
          id: Random.integer(1, 100),
          title: Random.cword(5, 10),
          description: Random.cword(10, 20)
        }
      };
    }
  }
];
