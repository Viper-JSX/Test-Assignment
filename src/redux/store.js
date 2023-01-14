import { configureStore } from "@reduxjs/toolkit";
import { defaultState } from "./default_state";

import { user, users, message } from "./reducers";


const store = configureStore({ reducer: { user, users, message } })

export default store;