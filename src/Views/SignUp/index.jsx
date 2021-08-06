import React from "react";
import {
    Typography,
    TextField,
    InputAdornment,
    Button,
} from "@material-ui/core";
import useStyle from "./style";
import {
    AccountCircle,
    Lock,
    Email,
    PhoneIphone,
    Person,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInUser } from "../../Store/actions/auth";
import { actionTypes } from "../../Store/actions/types";
import { createAction } from "../../Store/actions";

const validationSchema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required!"),
    matKhau: yup.string().required("This field is required!"),
    hoTen: yup.string().required("This field is required!"),
    email: yup
        .string()
        .email("Invalid Email")
        .required("This field is required!"),
    soDt: yup
        .string()
        .required("This field is required!")
        .matches(/^[0-9]{10}$/g, "Invalid Phone number"),
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
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
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
        alert("Đăng ký thành công!!!");
        // đăng ký thành công thì tắt popup
        dispatch(createAction(actionTypes.SET_LOGIN, false));
    }, [dispatch]);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setAllTouched();
            if (!formik.isValid) return;
            dispatch(signInUser(formik.values, goToHome));
        },
        [dispatch, formik.isValid, formik.values, setAllTouched, goToHome]
    );

    return (
        <>
            <Typography component="h2" variant="h6">
                Đăng ký
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
                <div className={classes.margin}>
                    <TextField
                        className={classes.textField}
                        id="fullname"
                        label="Họ tên"
                        name="hoTen"
                        value={formik.values.hoTen}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.hoTen && (
                        <Typography color="error" variant={"subtitle2"}>
                            {formik.errors.hoTen}
                        </Typography>
                    )}
                </div>
                <div className={classes.margin}>
                    <TextField
                        className={classes.textField}
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.email && (
                        <Typography color="error" variant={"subtitle2"}>
                            {formik.errors.email}
                        </Typography>
                    )}
                </div>
                <div className={classes.margin}>
                    <TextField
                        className={classes.textField}
                        id="phone"
                        label="Số điện thoại"
                        name="soDt"
                        value={formik.values.soDt}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIphone />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {formik.touched.soDt && (
                        <Typography color="error" variant={"subtitle2"}>
                            {formik.errors.soDt}
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
                        Đăng ký
                    </Button>
                </div>
            </form>
        </>
    );
};

export default SignUp;
