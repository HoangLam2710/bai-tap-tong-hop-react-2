import React from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Backdrop,
    Fade,
    Modal,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../Store/actions/types";
import { createAction } from "../../Store/actions";

const Header = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    // biến login trên store quản lý việc bật tắt modal signin, signup
    const login = useSelector((state) => {
        return state.user.login;
    });

    const isSignIn = useSelector((state) => {
        return state.user.isSignIn;
    });

    const user = useSelector((state) => {
        return state.user.user;
    });

    const handleOpen = useCallback(
        (isSignIn) => {
            // set để bật popup
            dispatch(createAction(actionTypes.SET_LOGIN, true));
            // isSignIn để kiểm tra hiện SignIn hay SignUp
            dispatch(createAction(actionTypes.SET_SIGNIN, isSignIn));
        },
        [dispatch]
    );

    const handleClose = useCallback(() => {
        // set để tắt popup
        dispatch(createAction(actionTypes.SET_LOGIN, false));
    }, [dispatch]);

    return (
        <AppBar position="sticky" style={{ backgroundColor: "#000" }}>
            <Toolbar>
                <Container>
                    <NavLink exact to="/">
                        <div className={classes.logo}></div>
                    </NavLink>
                </Container>

                <Container className={classes.menu}>
                    <NavLink to="/" className={classes.navLink}>
                        Lịch chiếu
                    </NavLink>
                    <NavLink to="/" className={classes.navLink}>
                        Cụm rạp
                    </NavLink>
                    <NavLink to="/" className={classes.navLink}>
                        Tin tức
                    </NavLink>
                    <NavLink to="/" className={classes.navLink}>
                        Ứng dụng
                    </NavLink>
                </Container>
                <Container className={classes.menu}>
                    {user ? (
                        <NavLink to="/user" className={classes.navLink}>
                            Hi, {user.hoTen?.toUpperCase()}
                        </NavLink>
                    ) : (
                        <>
                            <Typography
                                onClick={() => handleOpen(true)}
                                className={classes.navLink}
                            >
                                Đăng nhập
                            </Typography>
                            <Typography style={{ margin: "0 5px 0 -19px" }}>
                                |
                            </Typography>
                            <Typography
                                onClick={() => handleOpen(false)}
                                className={classes.navLink}
                            >
                                Đăng ký
                            </Typography>
                        </>
                    )}
                </Container>
            </Toolbar>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={login}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={login}>
                    <div className={classes.paper}>
                        {isSignIn ? <SignIn /> : <SignUp />}
                    </div>
                </Fade>
            </Modal>
        </AppBar>
    );
};

export default Header;
