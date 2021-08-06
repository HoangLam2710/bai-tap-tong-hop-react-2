import { createAction } from "./index";
import { actionTypes } from "./types";
import { request } from "../../API/request";

export const fetchMovies = (currentPage) => (dispatch) => {
    request({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01",
        method: "GET",
        params: {
            soTrang: currentPage,
            soPhanTuTrenTrang: 12,
        },
    })
        .then((res) => {
            dispatch(createAction(actionTypes.SET_MOVIES, res.data));
        })
        .catch((err) => console.log(err));
};

export const fetchMovieId = (id) => (dispatch) => {
    request({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
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
