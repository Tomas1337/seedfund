import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonateButton from "./DonateButton";
import BasicSelect from "./BasicSelect";
import Form from "./Form"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class QrGenPage extends React.Component {
    render() { 
        return (<div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Form />
                </MuiPickersUtilsProvider>
                </div>);
    }
}

export default QrGenPage;

