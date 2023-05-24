import { Dialog} from '@mui/material';
import SignUpForm from './SignUpForm';

const SignUpDialog = ({handleClose}) => {
    return (
        <Dialog open={true}>
            <SignUpForm handleClose={handleClose}/>
        </Dialog>
    )
}
export default SignUpDialog;