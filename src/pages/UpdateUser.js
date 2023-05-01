import React from 'react'
import  { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
import FullLayout from "../components/layouts/FullLayout";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
  } from "@mui/material";
  import BaseCard from '../components/baseCard/BaseCard';
const UpdateUser = () => {
  const { id } = useParams();
  
    const [login ,setLogin]=useState('');
    const [email , setEmail]=useState('');
    const [tel , setTel]=useState('');
    
    const [join_time , setJoinDate]=useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const handleNameChange =(event) => {
        setLogin(event.target.value);
    };

    const handleEmailChange =( event) =>{
        setEmail(event.target.value);
    };
    const handlePhoneChange =( event) =>{
        setTel(event.target.value);
    };
    const handleJoinDateChange =(event) =>{
        setJoinDate(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    const handleRoleChange =(event) =>{
        setRole(event.target.value);
    };
    const handleClearForm = () => {
        setLogin('');
        setEmail('');
        setPassword('');
        setTel('');
        setJoinDate('');
      };
      useEffect(() => {
        axios.get(`http://localhost:3001/api/User/${id}`)
          .then(response => {
            const { login, email, tel, join_time, password, role } = response.data;
            setLogin(login);
            setEmail(email);
            setTel(tel);
            setJoinDate(join_time);
            setPassword(password);
            setRole(role);
          })
          .catch(error => console.log(error));
      }, [id]);
      

    const handleSubmit =(event) => {
      const data={
        id :id,
          login: login,
          email : email,
          tel:tel,
          join_time:join_time,
          password: password,
          role:role
  
      };
        event.preventDefault();
        console.log(data);
        //     axios.post('/api/categories', data)
        //     .then((response) => {
      //       console.log(response);
      //navigate('/Product');
      //.catch((error) => {
        //       console.error(error);
        //       // handle error
        //      
        //     });
        // };
        axios.put(`http://localhost:3001/api/user/${id}`, data)
      .then(response => {
        console.log(response);
        navigate('/User');
      })
      .catch(error => console.log(error));
        
    }

    

//     axios.post('/api/categories', data)
//     .then((response) => {
//       console.log(response);
//       // handle success
//        navigate('/Categories');
//     })
//     .catch((error) => {
//       console.error(error);
//       // handle error
//      
//     });
// };

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Add User">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ marginTop: '-50px', paddingTop: '10px' }} >
            
          <TextField
              id="name"
              label="Full Name "
              variant="outlined"
              required
              value={login}
              onChange={handleNameChange}
              sx={{ width: '60%' }}
              
            />
            <TextField
              id="email"
              label="Email"
              required
              value={email}
              onChange={handleEmailChange}sx={{ width: '60%' }} 
            />
            <TextField
          id="password"
          label="Password"
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
          sx={{ width: '60%' }}
        />
              <TextField
          id="phone"
          label="Phone Number"
          value={tel}
          required
          onChange={handlePhoneChange}
          sx={{ width: '60%' }}
        />
        <FormControl>
              <FormLabel id="role">Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="admin"
                name="radio-buttons-group"
                onChange={handleRoleChange}
                row
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="employee"
                  control={<Radio />}
                  label="Employee"
                />
              
              </RadioGroup>
            </FormControl>
        <TextField
          id="date"
          label="Join Date"
          type="date"
          value={join_time}
          required
          onChange={handleJoinDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />


          </Stack>
          <br />
          <Button type='submit' variant="contained" mt={2}>
            Submit
          </Button>
          <Button variant="outlined" sx={{ ml: '10px' }} onClick={handleClearForm}>
  Clear Form
</Button></form>

        </BaseCard>
      </Grid>
      </Grid>
      </FullLayout>
      </ThemeProvider>
  )
}

export default UpdateUser