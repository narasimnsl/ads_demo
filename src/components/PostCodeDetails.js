import React from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function PostCodeDetails() {
 
  const postParm = {
    label:'Postcode',
    helperText:'Please enter the postcode where your car is garaged',
    inputProps:{maxLength: 4},
    error:false,
    type: 'number'
  }

  return (
    <div className='form-input-details'>
        <h4 className="inline-ele-mid">What's your postcode?</h4>
        <InfoOutlinedIcon aria-label="Postcode Info Icon" className="inline-ele-mid info-icon"/>
        <StyledTextField aria-label="Postcode Input field" formDetails= {postParm}/>
    </div>
  );
}

export default PostCodeDetails;