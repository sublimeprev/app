import React, {useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CircularIndeterminate from '../site/components/progress/progress';
import {
    Card,
    CardContent,
    Container,
    Typography,
    TextField,
    CssBaseline,
    Button,
    Avatar
} from '@material-ui/core';
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

export default function AreaDaMamae(){
    const [hasData, setHasData] = useState(false);
    const [dataMother, setDataMother]= useState({
        nameMother: "",
	    cpf: "",
	    dateStartProcess: "",
        observation: "",
	    requirements: "",
	    status: ""
    })
    const [req, setReq] = useState({
        cpf:"",
        birthday:""
    })
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    const handleChange = (evt) => {
        const value = evt.target.value;
        console.log(value)
        setReq({
            ...req,
            [evt.target.name]: value
        });
    }

    const findDataMother = () => {
        setLoading(true)
        axios.get(`https://sublime-prev.herokuapp.com/api/process-mothers/mother-client/${req.cpf}/${req.birthday}`,{
            }).then(res => {
                setDataMother(res.data)
                setHasData(true)
                console.log(true)
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                setHasData(false);
                console.log(false)
                swal("Não possivel fazer o login","Verefique os campos e tente novamente.", "error")
            });
    }

    const showDataMother = () => {
        return (
            <Card className={classes.root} variant="outlined">
                <div style={{
                    display:"flex",
                    backgroundColor: 'rgba(30,30,30)',
                    width: '100%',
                    opacity: '90%',
                    height:50,
                    textAlign: "center",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"#fff"}}>
                    <Typography className={classes.title} color="#fff" gutterBottom>
                        Sublime Prev
                    </Typography>
                </div>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Nome: {dataMother.nameMother}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Cpf: {dataMother.cpf}
                </Typography>
                </CardContent>
                <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Data inicial do processo: {dataMother.dateStartProcess}
                </Typography> */}
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Observações: {dataMother.observation}
                </Typography>
                </CardContent>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Exigências: {this,dataMother.requirements}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Status: {dataMother.status}
                </Typography>
                </CardContent>
                <Button
                            
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    <Link to="/" style={{textDecoration:"none", color:"#fff"}}>Voltar</Link>
                </Button>
          </Card>
        )
    }

    const getDataMother = () => {
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
                        onClick={findDataMother}
                    >
                        Login
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        <Link to="/" style={{textDecoration:"none", color:"#fff"}}>Voltar</Link>
                    </Button>
                </form>
                </div>
          </Container>
        )
    }

    
    return (
        <section id="areaDaMamae">
            {loading?<CircularIndeterminate/>:hasData?showDataMother():getDataMother()} 
        </section>
    )
}