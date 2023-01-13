import React from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';

function PostCodeDetails() {
 
  const postParm = {
    label:'Postcode',
    helperText:'Please enter the postcode where your car is garaged',
    inputProps:{maxLength: 4},
    error:false
  }

  return (
    <div className='form-input-details'>
        <h4>What's your postcode?</h4>
        <StyledTextField formDetails= {postParm}/>
    </div>
  );
}

export default PostCodeDetails;