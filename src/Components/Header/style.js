import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        logo: {
            backgroundImage: 'url("../logo.svg")',
            height: 50,
            width: 250,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginLeft: 40,
        },
        menu: {
            display: "flex",
            justifyContent: "flex-end",
        },
        navLink: {
            marginRight: theme.spacing(3),
            color: "rgba(255,255,255,.5)",
            textDecoration: "none",
            fontSize: 16,
            lineHeight: 1.4,
            transition: "all .5s",
            "&:hover": {
                color: "#fff",
            },
            "&.active": {
                color: "#fbbd61",
            },
        },
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    };
});

export default useStyle;
