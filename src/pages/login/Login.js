import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from './styles';

//logo
import logo from './logo.svg';
import google from './google.svg';

//context
import {useUserDispatch, loginUser} from "../../context/UserContext";
import {Button, CircularProgress, Fade, Grid, Tab, Tabs, TextField, Typography} from "@material-ui/core";

function Login(props) {
    let classes = useStyles();

    //global
    let useDispatch = useUserDispatch();

    //local
    let [activeTabId, setActiveTabId] = useState(0);
    let [error, setError] = useState(null);
    let [loginValue, setLoginValue] = useState("admin@gmail.com");
    let [passwordValue, setPasswordValue] = useState("password");
    let [isLoading, setIsLoading] = useState(false);
    let [nameValue, setNameValue] = useState("");

    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}>
                <img src={logo} alt="logo" className={classes.logotypeImage}/>
                <Typography className={classes.logotypeText}>Material Admin</Typography>
            </div>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <Tabs
                        value={activeTabId}
                        onChange={(e, id) => setActiveTabId(id)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Login" classes={{root: classes.tab}}/>
                        <Tab label="New User" classes={{root: classes.tab}}/>
                    </Tabs>
                    {activeTabId === 0 && (
                        <React.Fragment>
                            <Typography variant="h1" className={classes.greeting}>
                                Good Morning, User
                            </Typography>
                            <Button size="large" className={classes.googleButton}>
                                <img src={google} alt="google" className={classes.googleIcon}/>
                                &nbsp;Sign in with Google
                            </Button>
                            <div className={classes.formDividerContainer}>
                                <div className={classes.formDivider}/>
                                <Typography className={classes.formDividerWord}>or</Typography>
                                <div className={classes.formDivider}/>
                            </div>
                            <Fade in={error}>
                                <Typography color="secondary" className={classes.errorMessage}>
                                    Something is wrong with your login or password :(
                                </Typography>
                            </Fade>
                            <TextField
                                id="email"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    }
                                }}
                                value={loginValue}
                                onChange={e => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Address"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div className={classes.formButtons}>
                                {isLoading ? (
                                    <CircularProgress size={26} className={classes.loginLoader}/>
                                ) : (
                                    <Button
                                        disabled={
                                            loginValue.length === 0 || passwordValue.length === 0
                                        }
                                        onClick={() =>
                                            loginUser(
                                                useDispatch,
                                                loginValue,
                                                passwordValue,
                                                props.history,
                                                setIsLoading,
                                                setError,
                                            )
                                        }
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Login
                                    </Button>
                                )}
                                <Button
                                    color="primary"
                                    size="large"
                                    className={classes.forgetButton}
                                >
                                    Forget Password
                                </Button>
                            </div>
                        </React.Fragment>
                    )}
                    {activeTabId === 1 && (
                        <React.Fragment>
                            <Typography variant="h1" className={classes.greeting}>
                                Welcome!
                            </Typography>
                            <Typography variant="h2" className={classes.subGreeting}>
                                Create your account
                            </Typography>
                            <Fade in={error}>
                                <Typography color="secondary" className={classes.errorMessage}>
                                    Something is wrong with your login or password :(
                                </Typography>
                            </Fade>
                            <TextField
                                id="name"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={nameValue}
                                onChange={e => setNameValue(e.target.value)}
                                margin="normal"
                                placeholder="Full Name"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                id="email"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={loginValue}
                                onChange={e => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Address"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div className={classes.createingButtonContainer}>
                                {isLoading ? (
                                    <CircularProgress size={26}/>
                                ) : (
                                    <Button onClick={() => {
                                        loginUser(
                                            useDispatch,
                                            loginValue,
                                            passwordValue,
                                            props.history,
                                            setIsLoading,
                                            setError,
                                        )
                                    }}
                                            disabled={
                                                loginValue.length === 0 ||
                                                passwordValue.length === 0 ||
                                                nameValue.length === 0
                                            }
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            className={classes.createAccountButton}
                                    >
                                        Create Your account
                                    </Button>
                                )}
                            </div>
                            <div className={classes.formDividerContainer}>
                                <div className={classes.formDivider}/>
                                <Typography className={classes.formDividerWord}>or</Typography>
                                <div className={classes.formDivider}/>
                            </div>
                            <Button
                                size="large"
                                className={classnames(
                                    classes.googleButton,
                                    classes.googleButtonCreating,
                                )}
                            >
                                <img src={google} alt="google" className={classes.googleIcon}/>
                                &nbsp;Sign in with Google
                            </Button>
                        </React.Fragment>
                    )}
                </div>
                <Typography color="primary" className={classes.copyright}>
                    © 2014-{new Date().getFullYear()} <a style={{textDecoration: 'none', color: 'inherit'}}
                                                         href="https://flatlogic.com" rel="noopener noreferrer"
                                                         target="_blank">Flatlogic</a>, LLC. All rights reserved.
                </Typography>
            </div>
        </Grid>
    )

}

export default withRouter(Login);
/**
 * 关于 withRouter
 * 可以通过 withRouter 高阶组件访问历史对象的属性和最近的 <Route> 匹配项
 * withRouter 会在渲染时将更新的匹配、位置和历史属性传递给包装的组件
 *
 * withRouter 不像 React Redux 的 connect 订阅状态变化那样订阅位置变化
 * 相反，在位置更改从 <Router> 组件传播出去后重新渲染
 * 这意味着 withRouter 不会在路由转换时重新渲染，除非它的父组件重新渲染
 * 静态方法和属性所有非 react 特定的静态方法和包装组件的属性都会自动复制到“connected”组件
 *
 * 参考： https://v5.reactrouter.com/web/api/withRouter
 */