import React from 'react';
import logo from './assets/QBE-logo-on-dark@3x.png';
import CloseIcon from './assets/Icon-r@3x.png';
import './scss/Header.scss';
import StyledCircleStepper from './material-ui/StyledCircleStepper';
import StyledLineStepper from './material-ui/StyledLineStepper';

function Header() {
  const stepperCircleParam = [
    'Confirm your details',
    'Consent'
  ]
  const stepperLineParam = [
    'Confirm your details',
    '1 of 2'
  ]
  
  return (
    <div className='Header'>
      <div className='header-wrapper'>
        <div className='logo-wrapper' aria-label="QBE Logo">
              <img className="logo-img" src={logo} alt={'QBE logo'}></img>
          </div>
          <div className='step-wrapper-desk' aria-label="Steps">
            <StyledCircleStepper stepDetails={stepperCircleParam}/>
          </div>
          <div className='close-wrapper' aria-label="Close Button">
              <img className="close-img" src={CloseIcon} alt={'Close'}></img>
          </div>
      </div>
      <div className='step-wrapper-tab' aria-label="Steps">
        <StyledLineStepper stepDetails={stepperLineParam}/>
      </div>
    </div>
  );
}

export default Header;