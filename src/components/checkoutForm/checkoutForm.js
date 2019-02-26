import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import "./checkoutForm.css";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
//user clicked submit
  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) this.setState({complete: true});
    // if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        {/* <p>Would you like to complete the purchase?</p> */}
        <CardElement className="card-layout"/>
        <br/>
        <div className="donate-display">
        <Button onClick={this.submit} variant="outlined" color="primary" id="donate">DONATE</Button>
        </div>     
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);



  

  