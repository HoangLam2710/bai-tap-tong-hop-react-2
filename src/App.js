import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/";
import Detail from "./Views/Detail/";
import User from "./Views/User/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Store/actions/auth";
import PageNotFound from "./Views/PageNotFound";
import Layout from "./HOC/Layout";
import { AuthRoute } from "./HOC/Route";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser);
    }, [dispatch]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <AuthRoute
                            path="/detail/:id"
                            Component={Detail}
                            redirectPath="/"
                        />
                        <AuthRoute
                            path="/user"
                            Component={User}
                            redirectPath="/"
                        />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
