import React from "react";
import { Route, Redirect } from "react-router-dom";

const createRoute = (condition) => {
    return ({ path, Component, redirectPath }) => {
        return (
            <Route
                path={path}
                render={(routeProps) => {
                    if (condition()) {
                        return <Component {...routeProps} />;
                    }
                    return <Redirect to={redirectPath} />;
                }}
            />
        );
    };
};

export const AuthRoute = createRoute(() => localStorage.getItem("taiKhoan"));
