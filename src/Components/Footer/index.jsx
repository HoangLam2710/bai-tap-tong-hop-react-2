import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./style";

const Footer = () => {
    const classes = useStyle();
    const imgPartner = [
        {
            link: "https://www.cgv.vn/",
            src: "../assets/img/cgv.png",
            alt: "cgv",
        },
        {
            link: "https://www.bhdstar.vn/",
            src: "../assets/img/bhd.png",
            alt: "bhd",
        },
        {
            link: "https://www.galaxycine.vn/",
            src: "../assets/img/galaxycine.png",
            alt: "galaxycine",
        },
        {
            link: "http://cinestar.com.vn/",
            src: "../assets/img/cinestar.png",
            alt: "cinestar",
        },
        {
            link: "https://lottecinemavn.com/",
            src: "../assets/img/lottecinema.png",
            alt: "lottecinema",
        },
        {
            link: "https://www.megagscinemas.vn/",
            src: "../assets/img/megags.png",
            alt: "megags",
        },
        {
            link: "https://www.betacinemas.vn/home.htm",
            src: "../assets/img/beta.jpeg",
            alt: "beta",
        },
        {
            link: "http://ddcinema.vn/",
            src: "../assets/img/dongdacinema.png",
            alt: "dongdacinema",
        },
        {
            link: "https://touchcinema.com/",
            src: "../assets/img/TOUCH.png",
            alt: "touch",
        },
        {
            link: "https://cinemaxvn.com/",
            src: "../assets/img/cnx.jpeg",
            alt: "cnx",
        },
        {
            link: "http://starlight.vn/",
            src: "../assets/img/STARLIGHT.png",
            alt: "starlight",
        },
        {
            link: "https://www.dcine.vn/",
            src: "../assets/img/dcine.png",
            alt: "dcine",
        },
        {
            link: "https://zalopay.vn/",
            src: "../assets/img/zalopay_icon.png",
            alt: "zalopay",
        },
        {
            link: "https://www.payoo.vn/",
            src: "../assets/img/payoo.jpeg",
            alt: "payoo",
        },
        {
            link: "https://portal.vietcombank.com.vn/",
            src: "../assets/img/VCB.png",
            alt: "vietcombank",
        },
        {
            link: "https://www.agribank.com.vn/",
            src: "../assets/img/AGRIBANK.png",
            alt: "agribank",
        },
        {
            link: "https://www.vietinbank.vn/",
            src: "../assets/img/VIETTINBANK.png",
            alt: "viettinbank",
        },
        {
            link: "https://www.indovinabank.com.vn/",
            src: "../assets/img/IVB.png",
            alt: "ivb",
        },
        {
            link: "https://webv3.123go.vn/",
            src: "../assets/img/123go.png",
            alt: "123go",
        },
        {
            link: "https://laban.vn/",
            src: "../assets/img/laban.png",
            alt: "laban",
        },
    ];

    return (
        <Container maxWidth="false" className={classes.footer}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid xs={12} sm={4}>
                        <Typography
                            component="h2"
                            className={classes.titleFooter}
                        >
                            MOVIESTAR
                        </Typography>
                        <Grid container>
                            <Grid xs={6}>
                                <a href="/" className={classes.contentFooter}>
                                    FAQ
                                </a>
                            </Grid>
                            <Grid xs={6}>
                                <a href="/" className={classes.contentFooter}>
                                    Thỏa thuận sử dụng
                                </a>
                            </Grid>
                            <Grid xs={6}>
                                <a href="/" className={classes.contentFooter}>
                                    Brand Guidelines
                                </a>
                            </Grid>
                            <Grid xs={6}>
                                <a href="/" className={classes.contentFooter}>
                                    Chính sách bảo mật
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Typography
                            component="h2"
                            className={classes.titleFooter}
                        >
                            ĐỐI TÁC
                        </Typography>
                        <Grid container>
                            {imgPartner.map((img) => {
                                return (
                                    <Grid
                                        key={img.alt}
                                        className={classes.gridIconConnect}
                                    >
                                        <a href={img.link}>
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className={classes.iconConnect}
                                            />
                                        </a>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <Grid container>
                            <Grid xs={6}>
                                <Typography
                                    component="h2"
                                    className={classes.titleFooter}
                                >
                                    MOBILE APP
                                </Typography>
                                <a href="https://www.apple.com/app-store/">
                                    <img
                                        src="../assets/img/apple-logo.png"
                                        alt="apple"
                                        className={classes.iconApp}
                                    />
                                </a>
                                <a href="https://play.google.com/store">
                                    <img
                                        src="../assets/img/android-logo.png"
                                        alt="android"
                                        className={classes.iconApp}
                                    />
                                </a>
                            </Grid>
                            <Grid xs={6}>
                                <Typography
                                    component="h2"
                                    className={classes.titleFooter}
                                >
                                    SOCIAL
                                </Typography>
                                <a href="https://www.facebook.com/">
                                    <img
                                        src="../assets/img/facebook-logo.png"
                                        alt="facebook"
                                        className={classes.iconApp}
                                    />
                                </a>
                                <a href="https://zalo.me/">
                                    <img
                                        src="../assets/img/zalo-logo.png"
                                        alt="zalo"
                                        className={classes.iconApp}
                                    />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    style={{ borderTop: "1px solid rgba(255,255,255,.5)" }}
                >
                    <Typography component="h2" className={classes.copyright}>
                        2021 © Movie Star
                    </Typography>
                </Grid>
            </Container>
        </Container>
    );
};

export default Footer;
