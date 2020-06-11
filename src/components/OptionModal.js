import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) =>
(

    <Modal className= 'modal' isOpen ={!!props.selectedOption}
      contentLabel="Select Option">
      <h3 className='modal_title'>Select Option</h3>
      {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
      <button className='button' onClick ={props.eventClearAllOptions}>OK</button>
   </Modal>
);

export default OptionModal;