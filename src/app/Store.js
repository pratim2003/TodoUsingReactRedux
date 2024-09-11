import {configureStore} from "@reduxjs/toolkit"
import TodoSlice from "../Features/TodoSlice"
export const TodoStore = configureStore({
    reducer : TodoSlice
})