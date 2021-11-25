import { getThemeProps } from "@material-ui/styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Input, Button} from "reactstrap";
import ImageUploader from "../image-uploader";

const Step3 = props => {
  
  const [ onlineService, setOnlineService] = useState (false);
  const [ memorialStartDate, setMemorialStartDate] = useState(new Date())
  const [ memorialEndDate, setMemorialEndDate] = useState(new Date())
  const [ memorialStartTime, setMemorialStartTime] = useState("")
  const [ memorialEndTime, setMemorialEndTime] = useState("")

  const [ financialAssistance, setFinancialAssistance ] = useState(false);
  const [ bankClientName, setBankClientName ] = useState("")
  const [ bankName, setBankName ] = useState("")
  const [ bankAccountNumber, setBankAccountNumber ] = useState("")

  const [ donateCharity, setDonateCharity ] = useState(false);

  const donateCharityChangeHandler = () => {
    setDonateCharity(!donateCharity)
  }
  const onlineServiceChangeHandler = () => {
    setOnlineService(!onlineService)
  }

  const financialAssistanceChangeHandler = () => {
    setFinancialAssistance(!financialAssistance)
  }

  const handeMemorialStartDate = (date, event) => {
    setMemorialStartDate(date)
  }

  const handeMemorialEndDate = (date, event) => {
    setMemorialEndDate(date)
  }

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
        <FormGroup check inline 
          style = {{ width: "100%",
            paddingTop:"30px" }}>

          <div className="new-obit-form_options_label" >
            <Input 
              className = "new-obit-form__options-input-checkbox"
              type= "checkbox"
              id = 'onlineService'
              value = {onlineService} 
              onChange = {onlineServiceChangeHandler}/>
            <Label check>
              Online Service / Memorial
            </Label>
          </div>
          { onlineService ? 
            <div className="new-obit-form__options-input-fields">
            <FormGroup >
              <Label> Invitation Link </Label>
              <Input
              type = "text"
              name = "onlineServiceLink"
              id = "onlineServiceLink"
              placeholder = "Zoom / Invitation Link"
              value = {props.onlineServiceLink}
              maxLength={100}
              />
              <Label> Invitation Password </Label>
              <Input
              type = "text"
              name = "onlineServicePassword"
              id = "onlineServicePassword"
              placeholder = "Zoom / Invitation Password"
              value = {props.onlineServiceLinkPassword}
              maxLength={100}
              />
              <Label> Start Date </Label>
              <DatePicker className="new-obit-form__date-field"
                    showTimeSelect
                    id="onlineMemorialStartDate"
                    name = "onlineMemorialStartDate"
                    label="Required"
                    placeholderText = "Start date of Online Memorial" 
                    closeOnScroll={(e) => e.target === document} 
                    selected={memorialStartDate}
                    onChange={(date) => handeMemorialStartDate(date)}
                    timeClassName={handleColor} 
                    startDate = {memorialStartDate}
                    endDate = {memorialEndDate}
                    />
                    
              <Label> End Date  </Label>
              <DatePicker className="new-obit-form__date-field"
                    showTimeSelect
                    id="onlineMemorialEndDate"
                    name = "onlineMemorialEndDate"
                    label="Required"
                    placeholderText = "End date of Online Memorial" 
                    closeOnScroll={(e) => e.target === document} 
                    selected={memorialEndDate}
                    onChange={(date) => handeMemorialEndDate(date)}
                    startDate = {memorialStartDate}
                    endDate = {memorialEndDate}
                    minDate = {memorialStartDate} />
            </FormGroup>
            </div>
          : null }
        </FormGroup>
      

      <div>
      <FormGroup check inline
        style = {{ width: "100%",
            paddingTop:"1.5rem" }}
      >
        <div className="new-obit-form_options_label" >
        <Input type="checkbox" 
          className = "new-obit-form__options-input-checkbox"
          value = {financialAssistance} 
          id = 'financialAssistance'
          name = 'financialAssistance'
          onChange = {financialAssistanceChangeHandler}/>
        <Label check>
          Financial Assistance
        </Label>
        </div>
        { financialAssistance ? 
          <FormGroup>
            <Label> Name of Account </Label>
            <Input
            type = "text"
            name = "bankClientName"
            id = "bankClientName"
            placeholder = "Name of Account Holder"
            value = {props.bankClientName}
            maxLength={100}
            />
            <Label> Bank </Label>
            <Input
            type = "text"
            name = "bankName"
            id = "bankName"
            placeholder = "Name of Bank"
            value = {props.bankName}
            maxLength={100}
            />
            <Label> Account Number </Label>
            <Input
            type = "text"
            name = "bankAccountNumber"
            id = "bankAccountNumber"
            placeholder = "Account number"
            value = {props.bankAccountNumber}
            maxLength={25}
            />
          </FormGroup>
        : null }
      </FormGroup>
      </div>

      <div>
      <FormGroup
        check
        inline
        style = {{ width: "100%",
            paddingTop:"1.5rem" }}
      >
        <div className="new-obit-form_options_label" >
        <Input type="checkbox"
          className = "new-obit-form__options-input-checkbox"
          value = {donateCharity} 
          id = 'donateCharity'
          onChange = {donateCharityChangeHandler}/>
        <Label check>
          Donate to Charity
        </Label>

        

        </div>
        <div> 
        { donateCharity ? 
          <Label
          style = {{ color: "black",
        fontSize: "2.5rem",
        margin: "auto",
      alignContent: "center",
    alignItems: "center",
  display: "flex"}}
          > COMING SOON! </Label>: null}
        </div>
      </FormGroup>
      </div>
        </>
  );
};

export default Step3;
