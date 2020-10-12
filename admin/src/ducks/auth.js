import {appName} from '../config'
import {all, take, put, takeEvery} from 'redux-saga/effects'
import {Record} from 'immutable'
import { push } from 'react-router-redux';

/**
 * Constants
 * */

export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_START = `${prefix}/SIGN_IN_START`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`

export const RESTORE_REQUEST = `${prefix}/RESTORE_REQUEST`
export const RESTORE_START = `${prefix}/RESTORE_START`
export const RESTORE_SUCCESS = `${prefix}/RESTORE_SUCCESS`
export const RESTORE_ERROR = `${prefix}/RESTORE_ERROR`

/**
 * Reducer
 * */

export const ReducerRecord = Record({
    user: null,
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action
    
    switch (type) {
        case SIGN_IN_SUCCESS:
            return state.set('user', payload)
        case RESTORE_SUCCESS:
            return state
        default:
            return state
    }
}

/**
 * Selectors
 * */

export const userSelector = state => state[moduleName].user

/**
 * Action Creators
 * */

export function signIn(email, password) {
    return {
        type: SIGN_IN_REQUEST,
        payload: { email, password }
    }
}

export function sendRestore(email) {
    return {
        type: RESTORE_REQUEST,
        payload: email
    }
}

/**
 * Sagas
 **/

export const signInSaga = function * () {
    while (true) {
        const {payload} = yield take(SIGN_IN_REQUEST)

        // yield put({
        //     type: SIGN_IN_START,
        //     payload
        // })
      
        if(payload.password){
            yield put({
                type: SIGN_IN_SUCCESS,
                payload: payload
            })
          
            yield put(push('/clients'))

        } else {
            yield put({
                type: SIGN_IN_ERROR,
                payload: "Ошибка авторизации"
            })
        }
    }
}

export const saga = function * () {
    yield all([
      takeEvery(SIGN_IN_REQUEST, signInSaga)
    ])
}