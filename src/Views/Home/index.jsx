import React from "react";
import {
    Container,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Grid,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
//import { NavLink } from "react-router-dom";
import useStyle from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Store/actions/movie";
import { useCallback } from "react";
import { createAction } from "../../Store/actions";
import { actionTypes } from "../../Store/actions/types";

const Home = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const page = useSelector((state) => {
        return state.movie.page;
    });

    const movieList = useSelector((state) => {
        return state.movie.movieList;
    });

    useEffect(() => {
        dispatch(fetchMovies(page));
    }, [dispatch, page]);

    const hanldChangePage = useCallback(
        (event, value) => {
            dispatch(createAction(actionTypes.SET_PAGE, value));
            dispatch(fetchMovies(value));
            window.scroll({ top: 0, behavior: "smooth" });
        },
        [dispatch]
    );

    const directDetail = useCallback(
        (maPhim) => {
            return () => {
                localStorage.getItem("taiKhoan")
                    ? props.history.push(`/detail/${maPhim}/`)
                    : dispatch(createAction(actionTypes.SET_LOGIN, true));
            };
        },
        [dispatch, props.history]
    );

    return (
        <Container maxWidth="lg" style={{ margin: "20px auto" }}>
            <Grid container spacing={3}>
                {movieList.items?.map((movie) => {
                    return (
                        <Grid
                            key={movie.maPhim}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="400"
                                        image={movie.hinhAnh}
                                        title="imgae"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            color="textPrimary"
                                        >
                                            {movie.tenPhim}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textPrimary"
                                            component="p"
                                        >
                                            {movie.moTa.substring(0, 100) +
                                                "..."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        component={Button}
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        onClick={directDetail(movie.maPhim)}
                                    >
                                        Chi tiết
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <Pagination
                count={movieList.totalPages}
                className={classes.pagination}
                onChange={hanldChangePage}
                defaultPage={page}
            />
        </Container>
    );
};

export default Home;
