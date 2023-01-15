import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const StyledStepper = styled(Stepper)({
  "&": {
   padding:'0px 10px 20px 10px'
 },

 '& .MuiStep-root': {
      '&.MuiStep-alternativeLabel': {
        padding:2
      },
      '& .MuiStepLabel-root': {
          '& .MuiStepIcon-root': {
              display:'none'
          },
          '& .MuiStepLabel-label':
          {
              fontFamily: 'Inter',
              fontSize: '16px',
              color: '#fff',
              marginTop: '0px',
              textAlign:'right',
              borderBottom:'3px solid #A7AEBB',
              paddingBottom:'1px',
              '&.Mui-active':
              {
                  borderBottom:'3px solid #00C457',
                  paddingRight:0,
                  textAlign:'left'
              }
          },
      },
      '& .MuiStepConnector-root': {
          display:'none'
      }
 }
});


export default function StyledLineStepper({stepDetails}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <StyledStepper alternativeLabel activeStep={0}>
        {stepDetails.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </Stack>
  );
}

StyledLineStepper.propTypes = {
  stepDetails: PropTypes.array
};