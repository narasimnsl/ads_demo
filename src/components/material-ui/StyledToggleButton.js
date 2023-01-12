import * as React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "&": {
    border: '1px solid #717D92',
    bordeRadius: 5
  },
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: 3,
    },
    '&:first-of-type': {
      borderRadius: 3,
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#4E5D78'
    },
    textTransform: 'none',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    paddingLeft:26,
    paddingRight:26,
    paddingTop:6,
    paddingBottom:6
  },
}));

export default function StyledToggleButton({toggleParam,onToggleChange}) {
  const [alignment, setAlignment] = React.useState('rego');
  
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      onToggleChange(newAlignment)
    }
  };

  return (
    <div>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Toggle button"
        >
          {toggleParam.map((item, index) => {
            return (
              <ToggleButton key={index} value={item.value} aria-label={item.name}>
                {item.name}
              </ToggleButton>
            );
          })}
        </StyledToggleButtonGroup>
    </div>
  );
}

StyledToggleButton.propTypes = {
  toggleParam: PropTypes.array,
  onToggleChange: PropTypes.func
};