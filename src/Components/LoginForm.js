import { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `8px`,
        '& .MuiTextField-root': {
            margin: `4px`,
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: `8px`,
        },
    },
});
const LoginForm = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        handleClose();
    };
    const handleCancle = e => {
        e.preventDefault();
        handleClose();
    };

    const classes = useStyles()
    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit} onReset={handleCancle}>
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <Button variant="contained" type='reset'>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </div>
            </form>
        </>
    )
}
export default LoginForm;