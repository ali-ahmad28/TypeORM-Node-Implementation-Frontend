import react, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerCom = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const pages = ["User", "Books", "SignUp", "Login"]
    return (
        <react.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((pages, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{pages}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </react.Fragment>
    )
}
export default DrawerCom;