import React from "react"
import { ReactDOM } from "react"
import { createRoot } from 'react-dom/client'
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

import { theme } from "./mui/theme";

const root = createRoot( document.getElementById("root") );
root.render(    
    <Provider store={store}>
       <App />
    </Provider>
);