import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
} from "@material-ui/core";
import { Email, PhoneIphone, Person } from "@material-ui/icons";
import { useSelector } from "react-redux";

const User = () => {
    const user = useSelector((state) => {
        return state.user.user;
    });

    return (
        <>
            <Container maxWidth="lg" style={{ margin: "20px auto" }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary={user?.hoTen} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary={user?.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIphone />
                        </ListItemIcon>
                        <ListItemText primary={user?.soDT} />
                    </ListItem>
                </List>
            </Container>
        </>
    );
};

export default User;
