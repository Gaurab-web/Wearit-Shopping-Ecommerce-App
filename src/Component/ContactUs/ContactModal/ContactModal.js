import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ContactModal(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.data}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className='modal-name'>
                    {"Hello User"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className='modal-details'>
                        Your query has been sent successfully
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.func} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
