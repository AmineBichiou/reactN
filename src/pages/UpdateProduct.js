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
  
const UpdateProduct = () => {
  const { id } = useParams();
  const [Category, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/getCategorie').then((response) => {
      setCategories(response.data);
      console.log(response.data);

    });
    axios.get(`http://localhost:3001/api/getProduct/${id}`)
      .then(response => {
        const { name, Qstock,state,prix,category,code } = response.data;
        setName(name);
        setQstock(Qstock);
        setState(state);
        setPrix(prix);
        setCategory(category);
        setCode(code);
        console.log(response.data);
  
        
      })
      .catch(error => console.log(error));
  }, [id]);
  const options = Category.map((category) => ({
    id: category.id,
    name: category.name,
  }));
  const [name ,setName]=useState('');
  const [Qstock , setQstock]=useState('');
  const [state , setState] =useState('available');
  const [prix ,setPrix] =useState('');
  const [value, setValue] = useState('');
  const [category ,setCategory] =useState('');
  const [code ,setCode] =useState('');
  const [errors, setErrors] = useState({});
  
    const navigate = useNavigate();
    const handleNameChange =(event) => {
      setName(event.target.value);
  };
  const handleQuantityChange =(event) => {
    setQstock(event.target.value);
};
const handleStateChange =(event) => {
  setState(event.target.value);
};
const handlePriceChange =(event) => {
setPrix(event.target.value);
};
const handleCategoryChange =(event) => {
setCategory(event.target.value);
};

const handleCodeChange =(event) => {
setCode(event.target.value);
};
const handleClearForm = () => {
  setName('');
  setQstock('');
  setPrix('');
  setState('');
  setCategory('');
  setCode('');
};

    const handleSubmit =(event) => {
        event.preventDefault();
        const data={
          name: name,
          Qstock:Qstock,
          state:state,
          prix:prix,
          category:category,
          code:code,
    
      };
        console.log(data);
        
        
      axios.put(`http://localhost:3001/api/updateProduct/${id}`, data)
          .then(response => {
            console.log(response);
            navigate('/Product');
          })
          .catch(error => console.log(error));
    }


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Update Product">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}  >
          <TextField
          id="code"
          label="Product Code "
          variant="outlined"
          required
          value={code}
          onChange={handleCodeChange}

          sx={{ width: "60%" }}
        />
          <TextField
              id="name"
              label="Product Name "
              variant="outlined"
              required
              value={name}
              onChange={handleNameChange}
              sx={{ width: '60%' }}  
            />
            
    <TextField
              id="price"
              label="Product Price "
              variant="outlined"
              required
              value={prix}
              type='number'
              InputProps={{
                inputProps: {
                  min: 0,
                  step: 0.01
                }
              }}
              onChange={handlePriceChange}
              sx={{ width: '60%' }}  
            />

              <TextField
              id="quantity"
              label="Stock quantity "
              variant="outlined"
              required
              value={Qstock}
              type='number'
              
              onChange={handleQuantityChange}
              sx={{ width: '60%' }}  
            />
            <Autocomplete
  options={options}
  getOptionLabel={(option) => option.name}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Select a category"
      variant="outlined"
      required
      value={category}
      error={!!errors.category}
      helperText={errors.category}
    />
  )}
  onChange={(event, newValue) => {
    setCategory(newValue ? newValue.id : "");
  }}
  sx={{ width: "60%" }}
/>

              

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

export default UpdateProduct