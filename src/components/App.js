import React from 'react';
import {useUserState} from "../context/UserContext";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/login";
import Error from '../pages/error';

export default function App() {
    let {isAuthenticated} = useUserState();

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard"/>}/>
                <Route exact path="/app" render={() => <Redirect to="/app/dashboard"/>}/>
                <PrivateRoute path="/app" component={Layout}/>
                <PublicRoute path="/login" component={Login}/>
                <Route component={Error}/>
            </Switch>
        </HashRouter>
    );

    //##########################################################################################
    function PrivateRoute({component, ...rest}) {
        console.log("PrivateRoute => rest: " + JSON.stringify(rest))
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        React.createElement(component, props)
                    ) : (
                        <Redirect to={{
                            pathname: "/login",
                            state: {
                                from: props.location,
                            },
                        }}
                        />
                    )
                }
            />
        )
    }

    function PublicRoute({component, ...rest}) {
        console.log("PublicRoute => rest: " + JSON.stringify(rest))
        return (
            <Route
                {...rest}
                render={props => isAuthenticated ? (
                    <Redirect to={{
                        pathname: "/",
                    }}
                    />
                ) : (
                    React.createElement(component, props)
                )}
            />
        )
    }
}