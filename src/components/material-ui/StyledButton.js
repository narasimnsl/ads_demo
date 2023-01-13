import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';



const ColorButton = styled(Button)(() => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    border: '1px solid',
    borderRadius: '28px',
    lineHeight: '21px',
    backgroundColor: '#F7F8F9',
    borderColor: '#F7F8F9',
    fontFamily:'Inter',
    color:'#4D515B',
    height: '52px',
    width: '116px',
    '&:hover': {
        backgroundColor: '#F7F8F9',
        borderColor: '#F7F8F9',
        boxShadow: 'none',
      },
}));

export default function StyledButton({buttonText}) {
  return (

      <ColorButton variant="contained">{buttonText}</ColorButton>
     
  );
}

StyledButton.propTypes = {
    buttonText: PropTypes.string
};