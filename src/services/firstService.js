/**
 * Created by stb on 2018/1/31.
 */
import ApiUtil from './apiUtil.js'
export default new class FirstService {

    /**
     * 测试异步接口
     * @returns {*}
     */
    firstRequest(apiUrl) {
        return ApiUtil.fetch({apiUrl})
    }
}