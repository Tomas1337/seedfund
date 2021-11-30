import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const handleChange = event => {
    return event
    //setAge(event.target.value)
};

const BranchSelect = (props) => {
    const [branch, setBranch] = React.useState("");
    
    return (
        <Box >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branch}  
              label="Branch"
              onChange={e => setBranch(handleChange(e.target.value))}
            >
              <MenuItem value={10}>Main Branch</MenuItem>
              <MenuItem value={20}>Las Pinas Branch</MenuItem>
              <MenuItem value={30}>Paranaque Branch</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
    }

          
export default BranchSelect

export const DonationDefaultSelect = (props) => {
  const [branch, setBranch] = React.useState("");
      return (
          <Box >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Default Donation Amount</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="Branch"
                onChange={e => setBranch(handleChange(e.target.value))}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={150}>150</MenuItem>
                <MenuItem value={200}>200</MenuItem>

              </Select>
            </FormControl>
          </Box>
        );
      }


