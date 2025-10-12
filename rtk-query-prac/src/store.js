import  {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit" 
import { jsonplaceholderApi } from "./services/JsonPlaceholderApi"

const store = configureStore({
    reducer : {
        [jsonplaceholderApi.reducerPath] : jsonplaceholderApi.reducer,
    }, 

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonplaceholderApi.middleware)
})
