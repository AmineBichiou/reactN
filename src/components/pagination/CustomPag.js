// import { Stack } from '@mui/material';
// import React from 'react'

// const CustomPag = ({totalPosts ,postsPerPage , setCurrentPage ,currentPage ,setfirstPost , setLastPost}) => {
//     let pages =[];
//     for(let i=1 ; i <= Math.ceil(totalPosts/3) ; i++){
//         pages.push (i);
        
//     }
    
//     const handlePageClick = (page) => {
        
//         setCurrentPage(page);
//         console.log("aaa===" + currentPage);
//         };

    
//   return (
//     <div>
       
//         {
//             pages.map( (page,index) =>{
//                 return ( <button key={index} onClick={() =>handlePageClick(page)} >{page}</button>

//                 )
//             } )
//         }
        
//     </div>
//   )
// }

// export default CustomPag
import React from 'react'

const CustomPag = ({postsPerPage ,totalPosts ,paginate}) => {
    const pageNumbers =[];
    for(let i =1; i<=Math.ceil(totalPosts/ postsPerPage);i++){
pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number =>(
                    <li key={number} className='page-item' style={{marginRight:'5px'}} >
                            <a onClick={()=>paginate(number)} href='Categories?/!#' className='page-link'>
                                {number}
                            </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default CustomPag