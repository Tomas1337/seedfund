import React, { Component } from 'react';
// import Box from '@mui/material/Box';
class DonateButton extends Component {
    render() { 
        return (
        <div>
            <button className="donation-text" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
                }} >
                Generate Payment QR!
            </button>
        </div>
        );
    }
}
 
export default DonateButton;
