import React, {useState} from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';

function RegoDetails() {
 
  const regoParmDefault = {
    label:'Registration number',
    helperText:'Please enter the registration of the insured vehicle',
    inputProps:{},
    error:false
  }
  const [regoParm, setRegoParam] = useState(regoParmDefault);

const validateOnBlur = (_val) => {
    // Validation failed for special charecters
    if (! /^[a-zA-Z0-9\-]+$/.test(_val)) {
      const errParam = {...regoParmDefault}
      errParam.error = true;
      errParam.helperText ='Special charecters found in registration number';
      setRegoParam(errParam)
    } else {
      setRegoParam(regoParmDefault)
    }
 };
 

  return (
    <div className='form-input-details'>
      <h4>What's your vehicle registration number?</h4>
      <StyledTextField formDetails= {regoParm} validateOnBlur={validateOnBlur} />
    </div>
  );
}

export default RegoDetails;