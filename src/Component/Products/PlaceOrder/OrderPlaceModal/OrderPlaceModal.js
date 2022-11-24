import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import './OrderPlaceModal.css'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderPlaceModal(props) {
    const firstName = window.sessionStorage.getItem('FName');
    return (
        <div>
            <Dialog
                open= {props.data}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className='modal-name'>{`Hello ${firstName}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className='modal-details'>
                        The order has been placed successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.func}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
