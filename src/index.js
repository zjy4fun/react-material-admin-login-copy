import React from 'react';
import ReactDOM from 'react-dom';
import {LayoutProvider} from "./context/LayoutContext";
import {UserProvider} from "./context/UserContext";
import App from './components/App';
import {ThemeProvider} from "@material-ui/styles";
import Themes from "./themes";

ReactDOM.render(<LayoutProvider>
    <UserProvider>
        <ThemeProvider theme={Themes.default}>
            <App/>
        </ThemeProvider>
    </UserProvider>
</LayoutProvider>, document.getElementById("root"),);