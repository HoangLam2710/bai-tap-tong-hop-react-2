import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        footer: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            backgroundColor: "#222",
            color: "#949494",
        },
        titleFooter: {
            color: theme.palette.primary.main,
            fontSize: 11,
            marginBottom: theme.spacing(2),
        },
        contentFooter: {
            display: "block",
            fontSize: 12,
            textDecoration: "none",
            color: "#949494",
            transition: "all .5s",
            marginBottom: theme.spacing(1),
            "&:hover": {
                color: "white",
            },
        },
        gridIconConnect: {
            width: "17%",
        },
        iconConnect: {
            backgroundColor: "white",
            borderRadius: "50%",
            height: 30,
            width: 30,
            marginBottom: 15,
        },
        iconApp: {
            background: "0 0",
            height: 30,
            width: "auto",
            margin: 5,
        },
        copyright: {
            paddingTop: theme.spacing(2),
            color: "white",
            fontSize: 13,
        },
    };
});

export default useStyle;
