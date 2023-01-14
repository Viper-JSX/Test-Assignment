import React from "react"
import { ReactDOM } from "react"
import { createRoot } from 'react-dom/client'

import App from "./App";
 
import store from "./redux/store";
import { Provider } from "react-redux";



const root = createRoot( document.getElementById("root") );
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);