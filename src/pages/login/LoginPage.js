import React, { useState, useEffect } from "react";
import {
  TextField,
  Button
} from "@material-ui/core";
import moment from "moment"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import '../style.css'

function LoginPage(props) {

  const [pass, setPass] = useState({
    value: '',
    visible: false
  });
  const [uname, setUname] = useState('');

  const handleKick = () => {
    console.log(uname,pass.value)
  }

  const handleKey = async e => {
    if(e.keyCode == 13) {
      handleKick()
    }
  }

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-clean-login.jpg'})`,
      height: '100vh'
    }}>
      <div className='login-bg-form'>
        <h1>Who Am I?</h1>
        <div
          className='login-input-form'
        >
          <TextField
            required
            className='login-input'
            label="Uname"
            variant="outlined"
            onChange={e => { setUname(e.target.value) }}
            InputLabelProps={{
              shrink: true,
            }}
            onKeyDown={handleKey}
          />
        </div>
        <div
          className='login-input-form'
        >
          <TextField
            required
            className='login-input'
            label="MagicWord"
            type={pass.visible ? 'text' : 'password'}
            variant="outlined"
            onChange={e => { setPass({...pass, value: e.target.value}) }}
            InputLabelProps={{
              shrink: true,
            }}
            onKeyDown={handleKey}
          />
          <span
            className='login-visibility'
            onClick={e => { setPass({...pass, visible: !pass.visible}) }}
          >
            { pass.visible ? <Visibility/> : <VisibilityOff/> }
          </span>
        </div>
        <Button variant="contained" color="primary" onClick={handleKick}>
          Kick In
        </Button>
      </div>
    </div>
  )
}

export default LoginPage;