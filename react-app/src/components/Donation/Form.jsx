import React, {Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BranchSelect from './BasicSelect';
import { DonationDefaultSelect } from './BasicSelect';

import { DateTimePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    paddingTop: '200px',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },

  },
}));


const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    
    <form className={classes.root} onSubmit={handleSubmit}>
    <BranchSelect />
    <DonationDefaultSelect />
    <Fragment>
      <DateTimePicker
        label="Validity Start"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    <DateTimePicker
        label="Validity End"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
      <TextField
        label="Message"
        variant="filled"
        required
        value={"Thank you for your donation"}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Generate QR Payment Tag
        </Button>
      </div>
    </form>
  );
};

export default Form;