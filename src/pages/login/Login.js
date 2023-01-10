import {withRouter} from "react-router-dom";

// styles
import useStyles from './styles';

//logo
import logo from './logo.svg';
import google from './google.svg';

//context
import {useUserDispatch, loginUser} from "../../context/UserContext";
import {Grid, Typography} from "@material-ui/core";

function Login(props) {
    let classes = useStyles();

    //global
    let useDispatch = useUserDispatch();

    //local
    //...

    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}>
                <img src={logo} alt="logo" className={classes.logotypeImage}/>
                <Typography className={classes.logotypeText}>Material Admin</Typography>
            </div>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <p>form占位</p>
                </div>
                <Typography color="primary" className={classes.copyright}>
                    © 2014-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic</a>, LLC. All rights reserved.
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