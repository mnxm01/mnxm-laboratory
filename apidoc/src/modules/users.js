/**
 * 获得某个用户
 * @api {GET} /users/getUserInfo 获得某个用户
 * @apiDescription 根据ID获得某个用户
 * @apiName getUserInfo
 * @apiParam (path参数) {Number} id
 * @apiSampleRequest /users/getUserInfo
 * @apiGroup User
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  消息
 * @apiSuccess {Object} data  数据对象
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    _id: 11111,
 *    name: "张三"
 *  }
 * @apiSampleRequest http://localhost:3000/register
 * @apiVersion 1.0.0
 */
export function getUserInfo(id) {
  return {
    _id: 11111,
    name: "张三"
  };
}


/**
 * 获得某个用户123
 * @api {GET} /users/getUserInfo333 获得某个用户123
 * @apiDescription 根据ID获得某个用户
 * @apiName getUserInfo123
 * @apiParam (path参数) {Number} id
 * @apiSampleRequest /users/getUserInfo123
 * @apiGroup User
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  消息
 * @apiSuccess {Object} data  数据对象
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    _id: 11111,
 *    name: "张三"
 *  }
 * @apiSampleRequest http://localhost:3000/register
 * @apiVersion 1.0.0
 */
export default {
  methods: [
    {
      url: "/users/getUserInfo333",
      action(){

      }
    }
  ]
}