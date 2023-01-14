import { configureStore } from "@reduxjs/toolkit";

import { users } from "./reducers";


const store = configureStore({ reducer: { users } })

export default store;