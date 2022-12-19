import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import  userReducer  from './user-slice/userSlice'
import movieReducer from './movie-slice/movieSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer

    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    })
})