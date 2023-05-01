import React from 'react'
import  { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import{useEffect} from 'react';
import Select from "react-select";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';

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
  
const UpdateSale = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/getProduct').then((response) => {
      setProducts(response.data);
      console.log(response.data);

    });
    axios.get(`http://localhost:3001/api/getSales/${id}`)
      .then(response => {
        const { name, product,quality,budget } = response.data;
        setName(name);
        setProduct(product);
        setQuantity(quality);
        setBudget(budget);

  
        
      })
      .catch(error => console.log(error));
  }, [id]);
  const options = products.map((product) => ({
    id: product.id,
    name: product.name,
  }));

  const [name, setName]=useState('')
  const [time, setTime] = useState(new Date().toISOString().slice(0, 10));
  const [quality, setQuantity] = useState('');
  const [product, setProduct] = useState('');
  const [budget, setBudget] = useState(0);
  const [errors, setErrors] = useState({});
  
    const navigate = useNavigate();
    const handleNameChange =(event) => {
      setName(event.target.value);
  };
    const handleProductChange = (event) => {
        setProduct(event.target.value);
        };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
        setBudget(event.target.value * 100);
        };


  
const handleClearForm = () => {
  setName('');
  setProduct('');
    setQuantity('');
    setBudget(0);
  
};

    const handleSubmit =(event) => {
        event.preventDefault();
        const data={
          name: name,
            product: product,
            quality: quality,
            budget: budget,
            time: time,
      };
        console.log(data);

      axios.put(`http://localhost:3001/api/updateSales/${id}`, data)
          .then(response => {
            console.log(response);
            navigate('/');
          })
          .catch(error => console.log(error));
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
            <BaseCard title="Add Sale">
            <form onSubmit={handleSubmit}>
              <Stack spacing={1}  sx={{ marginTop: '-50px', paddingTop: '10px' }} >
              
                       <TextField
            fullWidth
            id="Name"
            label="Name"
            type="text"
            value={name}
            onChange={handleNameChange}
            sx={{ width: "60%" }}
          />
                      <TextField
            fullWidth
            id="quantity-input"
            label="Quantity"
            type="number"
            value={quality}
            onChange={handleQuantityChange}
            sx={{ width: "60%" }}
          />
                  
                  <TextField
            fullWidth
            id="total-input"
            label="Total"
            type="number"
            value={budget}
            InputProps={{
              readOnly: true,
            }}
            sx={{ width: "60%" }}
          />  
          { <Autocomplete
            options={options}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
          {...params}
          label="Select a Product"
          variant="outlined"
           error={errors.product}
           helperText={errors.product}
        />
        
      )}
      onChange={(event, newValue) => {
        setProduct(newValue ? newValue.id : "");
      }}
      sx={{ width: "60%" }}
    />
      
    }
    
              </Stack>
              <br />
              <Button type='submit' variant="contained" mt={2}>
                Submit
              </Button>
              <Button variant="outlined" sx={{ ml: '10px' }} onClick={handleClearForm}>
      Clear Form
    </Button>
    </form>
            </BaseCard>
          </Grid>
          </Grid>
          </FullLayout>
          </ThemeProvider>
      )
    }

export default UpdateSale