import { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';


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
const SignUpForm = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        //const data = { email, password, image };
        try {
            // let result = await axios.post('http://localhost:5000/user',data,{
            //     headers:
            //     {
            //         'Content-Type': 'application/json',
            //     },
            // })
            // console.log(result)
            //console.log(email, password,image);
            var bd = new FormData()
            bd.append('image', image)
            bd.append('email', email)
            bd.append('password', password)
            const result = await fetch("http://localhost:5000/user", {
                method: "POST",
                body: bd,
            })
            const jsonResult = await result.json()
            console.log(jsonResult)
        } catch (err) {
            console.log(err)
        }
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
                <Typography variant="h6" sx={{ marginRight: '175px', marginBottom: '5px' }}>Select Image</Typography>
                <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <div>
                    <Button variant="contained" type='reset'>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Signup
                    </Button>
                </div>
            </form>
        </>
    )
}
export default SignUpForm;