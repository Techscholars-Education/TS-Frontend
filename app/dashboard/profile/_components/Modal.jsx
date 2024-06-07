import React, { useState } from 'react';
import './Modal.css'; // Import the CSS for styling

const ConfirmationModal = ({ isOpen, onClose, onSave }) => {
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    setConfirming(true);
    setTimeout(() => {
      if (onSave) onSave();
      onClose();
    }, 2000); // Simulate async operation like API call
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p className='text-[1.2vw]'>Are you sure you want to save changes?</p>
           <div className='mt-5'>
           <button className='py-2 px-4 bg-TechBlue text-white hover:bg-black rounded-full hover:shadow-md hover:shadow-black transition-all ease-linear duration-300' onClick={handleConfirm} style={{ marginRight: '8px' }}>
            Confirm
          </button>
          <button className='py-2 px-4 border-2 border-gray-500 hover:border-red-500 hover:text-red-600 rounded-full transition-all ease-linear duration-300' onClick={onClose}>Cancel</button>
           </div>
        </div>
      </div>
    )
  );
};


export default ConfirmationModal;