import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const signInUser = (user, callback) => () => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: user,
    })
        .then((res) => {
            console.log(res);
            callback();
        })
        .catch((err) => console.log(err));
};

export const signUpUser = (user, callback) => (dispatch) => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_USER, res.data));
            localStorage.setItem("t", res.data.accessToken);
            localStorage.setItem("taiKhoan", res.data.taiKhoan);
            callback();
        })
        .catch((err) => console.log(err));
};

export const getUser = (dispatch) => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: {
            taiKhoan: localStorage.getItem("taiKhoan"),
        },
    })
        .then((res) => {
            console.log(res);
            dispatch(createAction(actionTypes.SET_USER, res.data));
        })
        .catch((err) => console.log(err));
};
