import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';
import "./form.css";
import About from "../about/about"
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkoutForm/CheckoutForm';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 200,
    [theme.breakpoints.between('md','lg')]: {
        width:'47%',
      },
    [theme.breakpoints.between('sm','md')]: {
        width:'45%',
      },
      [theme.breakpoints.between('sm','xs')]: {
        width:'100%',
      },
       
  },
  textButton: {
      width:50,
      height: 25,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
    button: {
      margin: theme.spacing.unit,
      backgroundColor: '#F2D36C',
      width:'15%',
            
    },
    button1: {
        margin: theme.spacing.unit,
        width:'45%',
        [theme.breakpoints.between('xs','sm')]: {
            width:'100%',
          },
        backgroundColor: '#F2D36C',
        
    },
    input: {
      display: 'none',
    },
});


const states = [
    {
        value: 'USA_AK',
        label: 'AK',
    },
    {
        value: 'USA_AL',
        label: 'AL',
    },
    {
        value: 'USA_AR',
        label: 'AR',
    },
    {
        value: 'USA_AZ',
        label: 'AZ',
    },
    {
        value: 'USA_CA',
        label: 'CA',
    },
    {
        value: 'USA_CO',
        label: 'CO',
    },
    {
        value: 'USA_CT',
        label: 'CT',
    },
    {
        value: 'USA_DE',
        label: 'DE',
    },
    {
        value: 'USA_FL',
        label: 'FL',
    },
    {
        value: 'USA_GA',
        label: 'GA',
    },
    {
        value: 'USA_HI',
        label: 'HI',
    },
    {
        value: 'USA_IA',
        label: 'IA',
    },
    {
        value: 'USA_ID',
        label: 'ID',
    },
    {
        value: 'USA_IL',
        label: 'IL',
    },
    {
        value: 'USA_IN',
        label: 'IN',
    },
    {
        value: 'USA_KS',
        label: 'KS',
    },
    {
        value: 'USA_KY',
        label: 'KY',
    },
    {
        value: 'USA_LA',
        label: 'LA',
    },
    {
        value: 'USA_MA',
        label: 'MA',
    },
    {
        value: 'USA_MD',
        label: 'MD',
    },
    {
        value: 'USA_ME',
        label: 'ME',
    },
    {
        value: 'USA_MI',
        label: 'MI',
    },
    {
        value: 'USA_MN',
        label: 'MN',
    },
    {
        value: 'USA_MO',
        label: 'MO',
    },
    {
        value: 'USA_MS',
        label: 'MS',
    },
    {
        value: 'USA_MT',
        label: 'MT',
    },
    {
        value: 'USA_NC',
        label: 'NC',
    },
    {
        value: 'USA_ND',
        label: 'ND',
    },
    {
        value: 'USA_NE',
        label: 'NE',
    },
    {
        value: 'USA_NH',
        label: 'NH',
    },
    {
        value: 'USA_NJ',
        label: 'NJ',
    },
    {
        value: 'USA_NM',
        label: 'NM',
    },
    {
        value: 'USA_NV',
        label: 'NV',
    },
    {
        value: 'USA_NY',
        label: 'NY',
    },
    {
        value: 'USA_OH',
        label: 'OH',
    },
    {
        value: 'USA_OK',
        label: 'OK',
    },
    {
        value: 'USA_OR',
        label: 'OR',
    },
    {
        value: 'USA_PA',
        label: 'PA',
    },
    {
        value: 'USA_RI',
        label: 'RI',
    },
    {
        value: 'USA_SC',
        label: 'SC',
    },
    {
        value: 'USA_SD',
        label: 'SD',
    },
    {
        value: 'USA_TN',
        label: 'TN',
    },
    {
        value: 'USA_TX',
        label: 'TX',
    },
    {
        value: 'USA_UT',
        label: 'UT',
    },
    {
        value: 'USA_VA',
        label: 'VA',
    },
    {
        value: 'USA_VT',
        label: 'VT',
    },
    {
        value: 'USA_WA',
        label: 'WA',
    },
    {
        value: 'USA_WI',
        label: 'WI',
    },
    {
        value: 'USA_WV',
        label: 'WV',
    },
    {
        value: 'USA_WY',
        label: 'WY',
    },
  ];

class OutlinedTextFields extends React.Component {
  state = {
    firstName: '',
    middleName:'',
    lastName: '',
    emailAddress:'',
    contactNumber:'',
    address1:'',
    address2:'',
    postalCode:'',
    city:'',
    stateProvinceGeoId:''

  
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

//   submit function
handleSubmit = event => {
    event.preventDefault();

    const user = {
        firstName: this.state.firstName,
        middleName:this.state.middleName,
        lastName: this.state.lastName,
        emailAddress:this.state.emailAddress,
        contactNumber:this.state.contactNumber,
        address1:this.state.address1,
        address2:this.state.address2,
        postalCode:this.state.postalCode,
        city:this.state.city,
        stateProvinceGeoId:this.state.stateProvinceGeoId
    };
    console.log(user);

    axios.post(`http:127.0.0.1:8080/apps/Donation/NewDonor/DonationForm`,
    {
      user
    }).then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    const { classes } = this.props;

    return (
        
      <form className={classes.container}  id="form-display" noValidate autoComplete="off">
      <div className="form-wrapper">
      <About/>
       <Typography className={classes.heading}>DONATION AMOUNT</Typography>
       <Divider light />
       <div className="button-display">
        <Button variant="contained" className={classes.button}>
          $31
        </Button>
        <Button variant="contained" className={classes.button}>
          $51
        </Button>
        <Button variant="contained" className={classes.button}>
          $101
        </Button>
        <Button variant="contained" className={classes.button}>
          $251
        </Button>
        <Button variant="contained" className={classes.button}>
          $501
        </Button>
        <Button variant="contained" className={classes.button}>
          $1001
        </Button>
        <Button variant="contained" className={classes.button}>
          $2001
          </Button>
          <Button variant="contained" className={classes.button}>
          $3001
        </Button>
        <Button variant="contained" className={classes.button}>
          $5001
        </Button>
        <Button variant="contained"  className={classes.button}>
        <TextField className={classes.textButton}/>
        </Button>
        </div>
        <Typography id="freq-top" className={classes.heading}>FREQUENCY</Typography>
       <Divider light />
       <Button variant="contained" className={classes.button1}>
          One-time Donation
        </Button>
        <Button variant="contained" className={classes.button1}>
         Monthly Donation
        </Button>
        </div>
        <div  className="form-wrapper2">
      <Typography className={classes.heading}>CONTACT INFORMATION</Typography>
      <Divider light />
       <TextField
          id="outlined-name"
          label="First Name"
          className={classes.textField}
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="M.I."
          className={classes.textField}
          name="middleName"
          value={this.state.middleName}
          onChange={this.handleChange('middleName')}
          margin="normal"
          variant="outlined"
        />
         <TextField
          id="outlined-name"
          label="Last Name"
          className={classes.textField}
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          name="emailAddress"
          value={this.state.emailAddress}
          autoComplete="email"
          onChange={this.handleChange('emailAddress')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-phonenumber-input"
          label="Phone Number"
          className={classes.textField}
          name="contactNumber"
          value={this.state.contactNumber}
          autoComplete="phonenumber"
          onChange={this.handleChange('contactNumber')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-address-input"
          label="Address"
          className={classes.textField}
          value={this.state.address1}
          name="address1"
          autoComplete="address"
          onChange={this.handleChange('address1')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-unitnumber-input"
          label="Apt #, Unit #"
          className={classes.textField}
          value={this.state.address2}
          name="address2"
          autoComplete="unitnumber"
          onChange={this.handleChange('address2')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-zipcode-input"
          label="ZIP Code"
          className={classes.textField}
          value={this.state.postalCode}
          name="postalCode"
          autoComplete="zipcode"
          onChange={this.handleChange('postalCode')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-city-input"
          label="City"
          className={classes.textField}
          value={this.state.city}
          name="city"
          autoComplete="city"
          onChange={this.handleChange('city')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-states"
          select
          label="State"
          name="stateProvinceGeoId"
          className={classes.textField}
          value={this.state.stateProvinceGeoId}
          onChange={this.handleChange('stateProvinceGeoId')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {states.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        
        </TextField>
        <Button variant="contained" color="primary" onClick={this.handleSubmit}> Submit </Button>
        <Typography className={classes.heading}>CARD INFORMATION</Typography>
      <Divider light />
        <StripeProvider apiKey="pk_test_aXbuETi1xmBFTS9j5NwcIylC">
        <div>
          <Elements>
            <CheckoutForm/>
          </Elements>
        </div>
      </StripeProvider>
        </div>
       
            
      </form>
    
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
