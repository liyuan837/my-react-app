/**
 * Created by stb on 2018/1/31.
 */
import FirstService from '../services/firstService.js'
import { call, put } from 'redux-saga/effects'

export function* firstRequest() {
    try {
        const products = yield call(FirstService.firstRequest,'http://localhost:3000/')
        console.log('成功')
        yield put({ type: 'GET_FIRST_ACTION_RESPONSE', products })
    }
    catch(error) {
        console.log('失败')
        yield put({ type: 'GET_FIRST_ACTION_FAILED', error })
    }
}