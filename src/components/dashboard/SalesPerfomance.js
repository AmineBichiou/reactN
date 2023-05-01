import React,{useState,useEffect} from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
 
  Button,
 Fab,
  ButtonGroup,
} from "@mui/material";

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import axios from "axios";
/* const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch('/api/sales')
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(error => console.error(error));
  }, []);*/


const SalesPerfomance = () => {
  const[sales,setSales]=useState([])
  const[products,setProducts]=useState([])
  const [currentPage ,setCurrentPage]=useState(1);
  const [postsPerPage , setPostsPerPage]=useState(4);
  const user=JSON.parse(localStorage.getItem('user-info'))
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/getSales').then((response)=>{
      setSales(response.data)
      console.log(response.data);
    });
    Axios.get('http://localhost:3001/api/getProduct').then((response)=>{
      setProducts(response.data)
      console.log(response.data);
    });
  },[]);
  const deleteSales = (id) => {
    Axios.delete(`http://localhost:3001/api/deleteSales/${id}`);
    console.log(id);
  }
   const indexOfLastPost =currentPage *postsPerPage;
  const indexOfFirstPost =indexOfLastPost -postsPerPage;
  const currentPosts =sales.slice(indexOfFirstPost,indexOfLastPost);
  const navigate = useNavigate();
  const handleButtonClick =()=>{
    navigate('/AddSale');
  };
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  return (
    <BaseCard title="Sales Perfomance">
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "50px" , marginTop:"-50px"}}>
      
        <Button variant="contained" color="primary" onClick={handleButtonClick}>Add Sale</Button>
      
        </div>
      <Table
        aria-label="simple table"
        sx={{
          mt: -5,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Assigned
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Product
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Quantity
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Budget
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Time
              </Typography>

            </TableCell>
              <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Update
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Delete
              </Typography>
            </TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {currentPosts.map((sale) => (
            <TableRow key={sale.name}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {sale.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {sale.name}
                    </Typography>
                    
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                {products.find(p => p.id === sale.product)?.name}
                </Typography>
              </TableCell>
              <TableCell>
                {sale.quality}
              </TableCell>
              <TableCell>
              <Typography variant="h6">{sale.budget} Dinars</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="h6">{sale.time}</Typography>
              </TableCell>
              
              <TableCell  >
              <Link to={`updateSale/${sale.id}`}><ModeEditIcon/></Link>
              </TableCell>
              <TableCell align="right" >
              <button onClick={() => { 
    deleteSales(sale.id);
    alert("Button clicked!"); 
    window.location.reload();
}} style={{ border: 'none', background: 'none' }} ><DeleteOutlineIcon/></button>
              {/*onClick={handleDelete}*/}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(sales.length / postsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
               />
    </BaseCard>
  );
};

export default SalesPerfomance;