import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
   isOpen={!!props.selectedOption} 
   contentLabel="Selected Option"
   onRequestClose={props.handleCloseModal}
   >
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Ok</button>
  </Modal>
);
Modal.setAppElement(document.getElementById('app-root'));
export default OptionModal;
