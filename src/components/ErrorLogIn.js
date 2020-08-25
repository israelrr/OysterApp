import React from 'react';
import Modal from 'react-modal';

const ErrorLogIn = (props) => {
    return (
        <Modal
         isOpen={ props.isFailed }
         closeTimeoutMS = {200}
         onRequestClose = { props.handleClose }
         className="modal"
         handleCloseOptionModal={props.handleClose}
        >
            <h3 className="modal__title">Failed to log in</h3>
            <p className="modal___body">{ props.errorMessage }</p>
            <button 
                className="button" 
                onClick={ props.handleClose }
            >
                OK
            </button>
        </Modal>
    );
};

export default ErrorLogIn;