import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieId } from "../../Store/actions/movie";
import {
    Container,
    Grid,
    ButtonBase,
    Typography,
    CardMedia,
} from "@material-ui/core";

const Detail = (props) => {
    const dispatch = useDispatch();
    const movieDetail = useSelector((state) => {
        return state.movie.movieDetail;
    });

    useEffect(() => {
        dispatch(fetchMovieId(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const { danhGia, hinhAnh, moTa, ngayKhoiChieu, tenPhim, trailer } =
        movieDetail || {};
    return (
        <>
            {movieDetail && (
                <Container maxWidth="lg" style={{ margin: "20px auto" }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase>
                                <img width="300" alt="complex" src={hinhAnh} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                            >
                                <Grid item xs>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h1"
                                    >
                                        {tenPhim}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {moTa}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Ngày khởi chiếu: {ngayKhoiChieu}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        Đánh giá: {danhGia}/10
                                    </Typography>
                                    <CardMedia
                                        component="iframe"
                                        height="500"
                                        image={
                                            trailer.indexOf("embed") !== -1
                                                ? trailer
                                                : trailer.indexOf("e/") !== -1
                                                ? "https://www.youtube.com/embed/" +
                                                  trailer.split("e/")[1]
                                                : "https://www.youtube.com/embed/" +
                                                  trailer.split("=")[1]
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default Detail;
