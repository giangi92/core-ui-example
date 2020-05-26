import React from 'react';
import { Modal, ModalBody } from 'reactstrap'

const LoadingPopup = (toggle) => {
    return (
        <div className="animated fadeIn">
            <Modal className="modal-info" isOpen={toggle.show} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <ModalBody>
                    Loading...
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoadingPopup;