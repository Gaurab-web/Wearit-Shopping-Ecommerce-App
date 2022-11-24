import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ProtectRouting(props) {
    const navigate = useNavigate();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const isAuth = window.sessionStorage.getItem('Token');
    return isAuth ? <Outlet /> :
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.data}
                onClose={props.func1}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Alert!! Login First"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hey!! You need to login first.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> {props.func1(); navigate('/login_user')}} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
}
