import React, { Component } from 'react';
import loading from './loading.gif';
import './spinner.css';

export class Spinner extends Component {
    render() {
        return (

            <div className="spinner-container">
                <img src={loading} alt="loading" />
            </div>

        )
    }
}

export default Spinner
