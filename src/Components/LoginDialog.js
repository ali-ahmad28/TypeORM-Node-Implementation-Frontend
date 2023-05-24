import { Dialog} from '@mui/material';
import LoginForm from './LoginForm';

const LoginDialog = ({handleClose}) => {
    return (
        <Dialog open={true}>
            <LoginForm handleClose={handleClose}/>
        </Dialog>
    )
}
export default LoginDialog;