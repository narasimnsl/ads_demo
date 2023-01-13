import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';

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

export default function StyledTextField({formDetails, validateOnBlur}) {

    const handleOnBlur = (event) => {
        validateOnBlur(event.target.value);
    };
    const isMobile = useMediaQuery('(max-width:425px)', { noSsr: true });

    return (
    
        <div>
            <ValidationTextField
            id="filled-helperText"
            error = {formDetails.error}
            label={formDetails.label}
            helperText={formDetails.helperText}
            variant="filled"
            inputProps={formDetails.inputProps}
            onBlur={handleOnBlur}
            sx={{ minWidth:isMobile? 250: 350 }}
            />
        </div>
    
    );
}

StyledTextField.propTypes = {
    formDetails: PropTypes.object,
    validateOnBlur: PropTypes.func
};