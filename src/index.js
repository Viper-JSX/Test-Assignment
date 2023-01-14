import React from "react"
import { ReactDOM } from "react"
import { createRoot } from 'react-dom/client'
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

import { theme } from "./mui/theme";
import { ThemeProvider } from "@emotion/react";

const root = createRoot( document.getElementById("root") );
root.render(    
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
);