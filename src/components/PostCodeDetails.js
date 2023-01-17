import React from 'react';
import './scss/FormInput.scss';
import StyledTextField from './material-ui/StyledTextField';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

function PostCodeDetails() {
  const isMobile = useMediaQuery('(max-width:425px)', { noSsr: true });
  const postParm = {
    label:'Postcode',
    helperText:isMobile ? 'Please enter the postcode':'Please enter the postcode where your car is garaged',
    inputProps:{maxLength: 4},
    error:false,
    type: 'number'
  }

  return (
    <div className='form-input-details' data-testid="post-cmp">
        <h4 className="inline-ele-mid">What's your postcode?<span><InfoOutlinedIcon aria-label="Postcode Info Icon" className="info-icon"/></span></h4>
        <StyledTextField aria-label="Postcode Input field" formDetails= {postParm}/>
    </div>
  );
}

export default PostCodeDetails;