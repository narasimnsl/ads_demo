import React, {useState} from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

function RegoDetails() {

  const isMobile = useMediaQuery('(max-width:425px)', { noSsr: true });
  const regoParmDefault = {
    label:'Registration number',
    helperText:isMobile ? 'Please enter the registration number': 'Please enter the registration of the insured vehicle',
    inputProps:{},
    error:false
  }
  const [regoParm, setRegoParam] = useState(regoParmDefault);
  
const validateOnBlur = (_val) => {
    // Validation failed for special charecters
    if (! /^[a-zA-Z0-9-]+$/.test(_val) && _val !=='') {
      const errParam = {...regoParmDefault}
      errParam.error = true;
      errParam.helperText ='Special character in registration number';
      setRegoParam(errParam);
    } else {
      setRegoParam(regoParmDefault);
    }
 };
 

  return (
    <div className='form-input-details' data-testid="rego-cmp">
      <h4>What's your vehicle registration number?<span><InfoOutlinedIcon aria-label="Rego Input Icon" className="info-icon"/></span></h4>
      <StyledTextField aria-label="Rego Input field" formDetails= {regoParm} validateOnBlur={validateOnBlur} />
    </div>
  );
}

export default RegoDetails;