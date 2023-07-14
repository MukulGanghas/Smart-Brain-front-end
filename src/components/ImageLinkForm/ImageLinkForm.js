import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Brain will provide description of the pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa3 br2 shadow-6'>
          <input className='f3 pa3 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f3 link ph4 pv3 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;