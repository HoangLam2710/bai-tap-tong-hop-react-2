import React from "react";
import {
    Typography,
    TextField,
    InputAdornment,
    Button,
} from "@material-ui/core";
import useStyle from "./style";
import { AccountCircle, Lock } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUpUser } from "../../Store/actions/auth";
import { actionTypes } from "../../Store/actions/types";
import { createAction } from "../../Store/actions";

const validationSchema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required!"),
    matKhau: yup.string().required("This field is required!"),
});

const SignUp = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const signIn = useCallback(() => {
        // isSignIn để kiểm tra hiện SignIn hay SignUp
        dispatch(createAction(actionTypes.SET_SIGNIN, true));
    }, [dispatch]);

    const signUp = useCallback(() => {
        dispatch(createAction(actionTypes.SET_SIGNIN, false));
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        validationSchema,
        validateOnMount: true,
    });

    const setAllTouched = useCallback(() => {
        Object.keys(formik.values).forEach((key) =>
            formik.setFieldTouched(key)
        );
    }, [formik]);

    const goToHome = useCallback(() => {
        alert("Đăng nhập thành công!!!");
        // đăng nhập thành công thì tắt popup
        dispatch(createAction(actionTypes.SET_LOGIN, false));
    }, [dispatch]);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setAllTouched();
            if (!formik.isValid) return;
            dispatch(signUpUser(formik.values, goToHome));
        },
        [dispatch, formik.isValid, formik.values, setAllTouched, goToHome]
    );

    return (
        <>
            <Typography component="h2" variant="h6">
                Đăng nhập
            </Typography>
            <form onSubmit={handleSubmit}>
                <div className={classes.margin}>
                    <TextField
                        className={classes.textField}
                        id="username"
                        label="Tài khoản"
                        name="taiKhoan"
                        value={formik.values.taiKhoan}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.taiKhoan && (
                        <Typography color="error" variant={"subtitle2"}>
                            {formik.errors.taiKhoan}
                        </Typography>
                    )}
                </div>
                <div className={classes.margin}>
                    <TextField
                        className={classes.textField}
                        id="password"
                        type="password"
                        label="Mật khẩu"
                        name="matKhau"
                        value={formik.values.matKhau}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.matKhau && (
                        <Typography color="error" variant={"subtitle2"}>
                            {formik.errors.matKhau}
                        </Typography>
                    )}
                </div>
                <div>
                    <Typography onClick={signIn} variant="button">
                        Đăng nhập
                    </Typography>
                    <Typography variant="button" style={{ margin: "0 5px" }}>
                        |
                    </Typography>
                    <Typography onClick={signUp} variant="button">
                        Đăng ký
                    </Typography>
                </div>
                <div className={classes.margin}>
                    <Button type="submit" variant="contained" color="primary">
                        Đăng Nhập
                    </Button>
                </div>
            </form>
        </>
    );
};

export default SignUp;
