import React, {useState} from 'react';
import './scss/CustomerDetails.scss';
import StyledToggleButton from '../components/material-ui/StyledToggleButton';
import StyledButton from '../components/material-ui/StyledButton';
import PostCodeDetail from '../components/PostCodeDetails';
import RegoDetails from '../components/RegoDetails';


function CustomerDetails() {
  const toggleParam = [
    {value:'rego', name:'Registration number'}, 
    {value:'post', name:'Postcode'}
  ]
  const [toggleVal, setToggleValue] = useState(toggleParam[0].value);

  return (
    <div className='customer-details'>
      <section className="panel">
        <div className="panel__content">
          <h4>One more thing</h4>
          <p>What’s your vehicle registration number or garaging postcode?</p>
          <StyledToggleButton toggleParam={toggleParam} onToggleChange={setToggleValue} />
          {toggleVal === toggleParam[0].value && <RegoDetails/>}
          {toggleVal === toggleParam[1].value && <PostCodeDetail/>}
          <StyledButton buttonText="Continue"/>
        </div>
      </section>
    </div>
  );
}

export default CustomerDetails;