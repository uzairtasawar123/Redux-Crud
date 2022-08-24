import {configureStore} from '@reduxjs/toolkit';
import CustomerReducer from './Reducer/CustomerSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage  from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'customer',
//     storage,
//   }

//const rootReducer =  persistReducer(persistConfig , CustomerReducer)
//console.warn("PERSIST" , rootReducer)
export const Store = configureStore({
    reducer:{
        customer:CustomerReducer
    }
})

//export const Persistor = persistStore(Store)