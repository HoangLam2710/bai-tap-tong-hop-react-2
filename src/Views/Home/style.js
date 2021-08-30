import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        pagination: {
            "& > *": {
                marginTop: theme.spacing(5),
                justifyContent: "center",
            },
        },
        nextArrow: {
            right: 30,
            "&:before": {
                fontSize: 40,
            },
        },
        prevArrow: {
            left: 30,
            "&:before": {
                fontSize: 40,
            },
        },
        bannerHome: {
            position: "relative",
            "&:hover": {
                "& $showHover": {
                    visibility: "visible",
                    opacity: 1,
                },
            },
        },
        bannerImg: {
            width: "100%",
            height: "100%",
        },
        backgroundLinear: {
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top,#000,transparent 20%)",
            top: 0,
        },
        playTrailer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 3,
            fontSize: "3rem",
            color: "white",
            border: "2px solid white",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,.5)",
        },
        showHover: {
            visibility: "hidden",
            opacity: 0,
            transition: "all .2s",
        },
    };
});

export default useStyle;
