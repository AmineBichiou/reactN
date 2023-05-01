import React from 'react'
import theme from '../theme/theme';
import {useState,useEffect} from "react";
import Axios from 'axios';
import Select from "react-select";
import axios from 'axios';
import { Autocomplete } from '@mui/material';
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from 'react-router-dom';
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
  

  const AddSale = (theme) => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
     Axios.get('http://localhost:3001/api/getProduct').then((response) => {
      setProducts(response.data);
      console.log(response.data);

     });
   }, []);
    const options = products.map((product) => ({
      id: product.id,
      code: product.code,
    }));
   
 
    const navigate = useNavigate();
  const [name, setName]=useState('')
  const [time, setTime] = useState(new Date().toISOString().slice(0, 10));
  const [quality, setQuantity] = useState('');
  const [product, setProduct] = useState('');

  const [budget, setBudget] = useState(0);
  const [errors, setErrors] = useState({});
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setBudget(event.target.value * 100);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClearForm = () => {
    setProduct('');
    setQuantity('');
    setBudget('');
    setName('');
    setProducts('');

    setBudget(0);
  };
  

  const AddSale = (event) => {
    event.preventDefault();
  
  const data={
    product: product,
    quality:quality,
    name:name,
    time:time,
    budget:budget,
};
    event.preventDefault();
   Axios.post("http://localhost:3001/api/insertSales", data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

    
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Add Sale">
        <form onSubmit={AddSale}>
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
        getOptionLabel={(option) => option.code}
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

export default AddSale