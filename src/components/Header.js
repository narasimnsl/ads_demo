import React from 'react';
import logo from './assets/QBE-logo-on-dark@3x.png';
import CloseIcon from './assets/Icon-r@3x.png';
import './scss/Header.scss';
import StyledSteppedComp from './material-ui/StyledStepper';

function Header() {
  const stepperParam = [
    'Confirm your details',
    'Consent'
  ]
  
  return (
    <div className='Header'>
      <div className='header-wrapper'>
        <div className='logo-wrapper' aria-label="QBE Logo">
              <img className="logo-img" src={logo} alt={'QBE logo'}></img>
          </div>
          <div className='step-wrapper-desk' aria-label="Steps">
            <StyledSteppedComp stepDetails={stepperParam}/>
          </div>
          
          <div className='close-wrapper' aria-label="Close Button">
              <img className="close-img" src={CloseIcon} alt={'Close'}></img>
          </div>
      </div>
      <div className='step-wrapper-tab' aria-label="Steps">
          STEP Tablet <br></br>trr
      </div>
    </div>
  );
}

export default Header;