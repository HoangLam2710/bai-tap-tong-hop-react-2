import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const fetchMovies = (currentPage) => (dispatch) => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
        method: "GET",
        params: {
            maNhom: "GP01",
            soTrang: currentPage,
            soPhanTuTrenTrang: 12,
        },
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_MOVIES, res.data.content));
        })
        .catch((err) => console.log(err));
};

export const fetchMovieId = (id) => (dispatch) => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
        method: "GET",
        params: {
            MaPhim: id,
        },
    })
        .then((res) =>
            dispatch(createAction(actionTypes.SET_DETAIL_MOVIE, res.data))
        )
        .catch((err) => console.log(err));
};

export const fetchBanner = (dispatch) => {
    request({
        url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
    })
        .then((res) =>
            dispatch(createAction(actionTypes.SET_BANNER, res.data.content))
        )
        .catch((err) => console.log(err));
};
