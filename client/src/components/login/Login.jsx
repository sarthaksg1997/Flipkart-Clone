import React from 'react'
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core'
import { useState } from "react"
import { authenticateSignup, authenticateLogin } from "../../service/api";

const imageURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'

const useStyle = makeStyles({
    container: {
        height: "75vh",
        width: '94vh'
    },
    image: {
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 85%',
        height: '75vh',
        background: '#2874f0',
        width: '40%',
        color: '#fff',
        padding: '35px 50px 0 32px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '20px 30px ',
        '& > *': {
            marginTop: 20,
        }
    },
    errorMsg:{
        color: 'red',
        margin:0
    },
    text: {
        fontSize: 12,
        color: '#878787',
    },
    loginBtn: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    orText: {
        textAlign: 'center',
        fontSize: 14.7,
        color: '#878787',
    },
    otpBtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'
    },
    signupText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: '14px',
        fontWeight: 600,
        color: '#2874f0',
        cursor: 'pointer',
    }
})

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
}

const loginInitialValues = {
    username: '',
    password: '',
}


const Login = ({ open, setOpen, setAfterLogin }) => {
    const [account, setAccount] = useState('login')
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)

    const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
        setAccount('login');
        setError(false);
    }
    const toggleAccount = () => {
        setAccount('signup');
        setError(false);
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response){
            setError(true);
            return;
        } 
        setAfterLogin(signup.username)
        handleClose();

    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }

    const onLoginInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const loginUser = async () => {
        let response = await authenticateLogin(login)
        if (!response) {
            setError(true);
            return;
        }
        setAfterLogin(login.username)
        handleClose();
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} >
                <DialogContent className={classes.container}>
                    <Box style={{ display: 'flex' }} >
                        {account === 'login' ?
                            <>
                                <Box className={classes.image}>
                                    <Typography variant='h5'>Login</Typography>
                                    <Typography style={{ marginTop: 13 }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                                </Box>
                                <Box className={classes.form}>
                                    {error ? <Typography className={classes.errorMsg}>User credentials are incorrect!</Typography> : ''}
                                    <TextField onChange={onLoginInputChange} name='username' label='Enter Username' />
                                    <TextField onChange={onLoginInputChange} name='password' label='Enter Password' />
                                    <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button variant='contained' className={classes.loginBtn} onClick={loginUser}>Login</Button>
                                    <Typography className={classes.orText}>OR</Typography>
                                    <Button variant='contained' className={classes.otpBtn}>Request OTP</Button>
                                    <Typography className={classes.signupText} onClick={toggleAccount}>New to Flipkart? Create an account</Typography>
                                </Box>
                            </> :
                            <>
                                <Box className={classes.image}>
                                    <Typography variant='h5'>Looks like you're new here!</Typography>
                                    <Typography style={{ marginTop: 13 }}>Sign up with your mobile number to get started</Typography>
                                </Box>
                                <Box className={classes.form}>
                                {error ? <Typography className={classes.errorMsg}>Username already taken!</Typography> : ''}
                                    <TextField onChange={onInputChange} name='firstname' label='Enter Firstname' />
                                    <TextField onChange={onInputChange} name='lastname' label='Enter Lastname' />
                                    <TextField onChange={onInputChange} name='username' label='Enter Username' />
                                    <TextField onChange={onInputChange} name='email' label='Enter Email' />
                                    <TextField onChange={onInputChange} name='mobile' label='Enter Mobile Number' />
                                    <TextField onChange={onInputChange} name='password' label='Enter Password' />
                                    <Button variant='contained' onClick={() => { signupUser() }} className={classes.loginBtn}>Signup</Button>

                                </Box>
                            </>
                        }

                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login
