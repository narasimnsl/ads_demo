import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ValidationTextField = styled(TextField)({
    "&": {
        margin: 20
        
    },
    '& label.Mui-focused': {
        color: '#0A1F44',
    },
    '& .MuiFilledInput-root': {
        fontFamily: 'Inter',
        '&:after': {
            borderColor: '#4E5D78',
        }
    },
    '& .MuiFormHelperText-root': {
        fontFamily: 'Inter'
    }
    
});

export default function StyledTextField({formDetails}) {
  return (
   
      <div>
        <ValidationTextField
          id="filled-helperText"
          label={formDetails.label}
          helperText={formDetails.helperText}
          variant="filled"
        />
      </div>
   
  );
}

StyledTextField.propTypes = {
    formDetails: PropTypes.object
  };