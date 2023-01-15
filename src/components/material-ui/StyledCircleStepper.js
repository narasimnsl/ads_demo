import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledStepper = styled(Stepper)({
    "&": {
       width:'280px',
    },

   '& .MuiStep-root': {
        padding:0,
        '& .MuiStepLabel-root': {
            '& .MuiStepIcon-root': {
                width:'28px',
                height:'28px',
                border: "2px solid #B0B7C3",
                color:'#14284B',
                borderRadius:'50%',
                '&.Mui-active':
                {
                    color: '#00C457',
                    border: "2px solid #00C457",
                },
                '& .MuiStepIcon-text': {
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: '500',
                    letterSpacing: '0',
                    lineHeight: '24px'
                }
            },
            '& .MuiStepLabel-label':
            {
                fontFamily: 'Inter',
                fontSize: '14px',
                color: '#fff',
                marginTop: '10px',
                '&.Mui-active':
                {
                    color: '#00C457', // Just text label (ACTIVE)
                }
            },
        },
        '& .MuiStepConnector-root': {
            top: '15px',
            left: "calc(-50% + 16px)",
            right: "calc(50% + 16px)",
            '& .MuiStepConnector-line':{
                borderTop: '1px dashed #B0B7C3'
            }
        }
   }
});

export default function StyledCircleStepper({stepDetails}) {
  return (
    <StyledStepper nonLinear activeStep={0} alternativeLabel>
    {stepDetails.map((label) => (
        <Step key={label}>
        <StepLabel>{label}</StepLabel>
        </Step>
    ))}
    </StyledStepper>
  );
}

StyledCircleStepper.propTypes = {
    stepDetails: PropTypes.array
};