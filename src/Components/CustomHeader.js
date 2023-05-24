import react, { useEffect, useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import BoyIcon from '@mui/icons-material/Boy';
import DrawerCom from './DrawerCom';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';

const CustomHeader = () => {
    const [value, setValue] = useState();
    const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
    const [logInialogOpen, setLogInDialogOpen] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const pages = ["User", "Books"]
    const handleSignUpClick = () => {
        setSignUpDialogOpen(true)
    }
    const handleSignUpClose = () => {
        setSignUpDialogOpen(false)
    };
    const handleLogInClick = () => {
        setLogInDialogOpen(true)
    }
    const handleLogInClose = () => {
        setLogInDialogOpen(false)
    };
    return (
        <react.Fragment>
            <AppBar sx={{ background: '#063950' }}>
                <Toolbar>
                    <BoyIcon />
                    <Typography sx={{ fontSize: '1.5rem', paddingLeft: '2%' }}>UMS</Typography>
                    {
                        isMatch ?
                            (
                                <>
                                    <DrawerCom />
                                </>
                            ) :
                            (
                                <>
                                    <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
                                        {
                                            pages.map((page, index) => (
                                                <Tab key={index} label={page} />
                                            ))
                                        }
                                    </Tabs>

                                    <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={handleSignUpClick}>Signup {signUpDialogOpen && <SignUpDialog handleClose={handleSignUpClose}/>}</Button>
                                    <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={handleLogInClick}>Login  {logInialogOpen && <LoginDialog handleClose={handleLogInClose}/>}</Button>
                                </>
                            )
                    }
                </Toolbar>
            </AppBar>
        </react.Fragment>
    )
}

export default CustomHeader;