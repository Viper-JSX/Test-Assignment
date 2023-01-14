import { configureStore } from "@reduxjs/toolkit";
import { defaultState } from "./default_state";

import { user, users } from "./reducers";


const store = configureStore({ reducer: { user, users } })

export default store;