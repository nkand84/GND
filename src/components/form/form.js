import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
      border:0,
      
    },
    button1: {
        margin: theme.spacing.unit,
        border:0,
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
    email:'',
    phoneNumber:'',
    address:'',
    unitNumber:'',
    zipCode:'',
    city:'',
    state:''

  
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        
      <form className={classes.container} id="form-display" noValidate autoComplete="off">
      <div className="form-wrapper">
      <About/>
       <Typography className={classes.heading}>DONATION AMOUNT</Typography>
       <Divider light />
       <div className="button-display">
        <Button variant="outlined" color="primary" className={classes.button}>
          $31
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $51
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $101
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $251
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $501
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $1001
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $2001
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
          $3001
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          $5001
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
        <TextField type="name" className={classes.textButton}/>
        </Button>
        </div>
        <Typography id="freq-top" className={classes.heading}>FREQUENCY</Typography>
       <Divider light />
       <Button variant="outlined" color="primary" className={classes.button1}>
          One-time Donation
        </Button>
        <Button variant="outlined" color="primary" className={classes.button1}>
         Monthly Donation
        </Button>
        </div>
        <div  className="form-wrapper2">
      <Typography className={classes.heading}>CONTACT INFORMATION</Typography>
      <Divider light />
       <TextField
          required
          id="outlined-name"
          label="First Name"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="M.I."
          className={classes.textField}
          value={this.state.middleName}
          onChange={this.handleChange('middleName')}
          margin="normal"
          variant="outlined"
        />
         <TextField
          required
          id="outlined-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          variant="outlined"
        />
        
     
        <TextField
          required
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
        required
          id="outlined-phonenumber-input"
          label="Phone Number"
          className={classes.textField}
          type="phonenumber"
          name="phonenumber"
          autoComplete="phonenumber"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-address-input"
          label="Address"
          className={classes.textField}
          type="address"
          name="address"
          autoComplete="address"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-unitnumber-input"
          label="Apt #, Unit #"
          className={classes.textField}
          type="unitnumber"
          name="unitnumber"
          autoComplete="unitnumber"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-zipcode-input"
          label="ZIP Code"
          className={classes.textField}
          type="number"
          name="zipcode"
          autoComplete="zipcode"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-city-input"
          label="City"
          className={classes.textField}
          type="name"
          name="city"
          autoComplete="city"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-states"
          select
          label="State"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('states')}
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
