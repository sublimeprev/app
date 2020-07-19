import React, {useState} from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const [req, setReq] = useState({
        cpf:"",
        birthday:""
    })
  const classes = useStyles();

  const handleChange = (evt) => {
    const value = evt.target.value;
    console.log(value)
    setReq({
        ...req,
        [evt.target.name]: value
    });
}

  const getDataMother = () => {
    axios.get(`https://sublime-prev.herokuapp.com/api/process-mothers/mother-client/${req.cpf}/${req.birthday}`,{
        }).then(res => {
            localStorage.setItem('dataMother', res.data)
            localStorage.setItem('hasDataMother',true)
        }).catch(error => {
            localStorage.setItem('hasDataMother',false)
        });
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cpf"
            label="Cpf"
            name="cpf"
            autoComplete="cpf"
            autoFocus
            value={req.cpf}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="birthday"
            label="Data de aniversário"
            type="date"
            id="birthday"
            value={req.birthday}
            autoComplete="current-birthday"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={getDataMother}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}