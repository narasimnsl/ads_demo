import React from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';

function RegoDetails() {
 
  const regoParm = {
    label:'Registration number',
    helperText:'Please enter the registration of the insured vehicle'
  }

  return (
    <div className='form-input-details'>
      <h4>What's your vehicle registration number?</h4>
      <StyledTextField formDetails= {regoParm}/>
    </div>
  );
}

export default RegoDetails;