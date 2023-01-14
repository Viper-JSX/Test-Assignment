import { configureStore } from "@reduxjs/toolkit";
import { defaultState } from "./default_state";

import { users } from "./reducers";


const store = configureStore({ reducer: { users } })

export default store;