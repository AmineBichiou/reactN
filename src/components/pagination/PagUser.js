import React from 'react'

const PagUser = ({postsPerPage ,totalPosts ,paginate, previousPage, nextPage }) => {
    const pageNumbers =[];
    for(let i =1; i<=Math.ceil(totalPosts/ postsPerPage);i++){
pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
        <li onClick={previousPage} className="page-number">
               Prev
            </li>
            {
                pageNumbers.map(number =>(
                    <li key={number} className='page-item' style={{marginRight:'5px'}} onClick={()=>paginate(number)}>
                            
                                {number}
                            
                    </li>
                ))
            }
             <li onClick={nextPage} className="page-number">
               Next
            </li>
        </ul>
    </nav>
  )
}

export default PagUser