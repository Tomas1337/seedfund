import React, { useState } from "react";
import { FormGroup, Label , Col, Row} from "reactstrap";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AvForm, AvField } from 'availity-reactstrap-validation'

const Step1 = props => {

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [deathDate, setDeathDate] = useState(new Date());
  const [email, setEmail] = useState({email: false});

  if (props.currentStep !== 1) {
    return null;
  }

  const handleBirthDate = (date, event) => {
    setBirthDate(date);
    console.log(date);
  };

  const handleDeathDate = (date, event) => {
    setDeathDate(date);
    console.log(date);
  };

  // Use the submitted data to set the state
  const handleChange = event => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "middleName") {
      setMiddleName(value);
    } else if (name === "setBirthDate") {
      setBirthDate(value);
    } else if (name === "setDeathDate") {
      setDeathDate(value);
    }
  };



  return (
      <AvForm>
        <p className="new-obit-form__header">Details of departed</p>
        <Label> Departed's Name </Label>
       <Row>
       
        <Col md={4}>

        <div>
        
        </div>
          <AvField className="new-obit-form__input-field"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={props.firstName} 
              onChange={props.handleChange}
              maxLength= {20}
              minLength= {2} 
              required />
        </Col>
        <Col md={4}>
          <FormGroup>
            <AvField className="new-obit-form__input-field"
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
              value={props.middleName} 
              onChange={props.handleChange}
              maxLength={20} 
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <AvField className="new-obit-form__input-field"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={props.lastName} 
              onChange={props.handleChange}
              maxLength={20}
              minLength={2} 
              required
            />
          </FormGroup>
        </Col>
      </Row>
        <FormGroup>
        <AvField className="new-obit-form__input-field"
          type="text"
          name="nickName"
          id="nickName"
          placeholder="Nickame"
          value={props.nickName} 
          onChange={props.handleChange}
        />
        <Row >
            <Col md={3}>
              <Label for="birthDate"> Birth date </Label>
              <DatePicker className="new-obit-form__date-field"
                id="birthDate"
                name = "birthDate"
                label="Required"
                placeholderText = "Birth date" 
                closeOnScroll={(e) => e.target === document} 
                selected={birthDate}
                onChange={(date) => handleBirthDate(date)}/>
            </Col>
            <Col md={3}>
              <Label for="deathDate"> Passing date </Label>
              <DatePicker className="new-obit-form__date-field"
                id="deathDate"
                name = "deathDate"
                label="Required"
                placeholderText = "Passing  date" 
                closeOnScroll={(e) => e.target === document} 
                selected={deathDate}
                onChange={(date) => handleDeathDate(date)} />
              
            </Col>
        </Row>
      </FormGroup>
      </AvForm>
  );
};

export default Step1;
