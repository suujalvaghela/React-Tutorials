import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from '../sliceFolder/Slice'

export const store = configureStore({
    reducer: todoReducer
})