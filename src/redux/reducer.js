import {createStore} from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import Storage from 'redux-persist/lib/storage'

initialState ={
    finishedOnboarding: false,
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FINISHED_ONBOARDING':
            return{...state,finishedOnboarding:action.status}
        default:
            return state
    }

}
const persistConfig ={
    key:'root',
    storage,
    blacklistL:['selectedTime']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)