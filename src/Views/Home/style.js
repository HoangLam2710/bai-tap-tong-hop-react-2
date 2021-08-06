import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
    return {
        pagination: {
            "& > *": {
                marginTop: theme.spacing(5),
                justifyContent: "center",
            },
        },
    };
});

export default useStyle;
