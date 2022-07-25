import React ,{useEffect,useState,useMemo}from 'react';
import {useTable} from 'react-table';
import {COLUMNS} from './Columns';
// this component fetching the API data and here we used react-table library to display the data but its not working properly
const Table = () => {


  
  const [country, setcountry]=useState([]);




  const getCountries= async ()=>{

      const response= await fetch('https://restcountries.com/v2/all');
      setcountry(await response.json());
      //const data=await response.json();
     // console.log(data);

  }


  useEffect(()=>{
      getCountries();
  },[]);

const columns= useMemo(()=>COLUMNS,[]);
const countryData=useMemo(()=>country,[]);


  const tableInstance = useTable({
    columns:columns,
    data:countryData
  })


  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance;


    return (
        <>
 <div className="bg-header">

      <h1 >List Of Countries</h1>
      <div className="search-btn">
          <input type="text" /><button className="bg-btn btn">Search</button>
      </div>

      {/* table  start  */}
          <table className="table" {...getTableProps()} >
              
              <thead className="bg-table-header" >
                {headerGroups.map((headerGroups)=>(
                   <tr {...headerGroups.getHeaderGroupProps()}>
                    {headerGroups.headers.map((columns)=>(
                       <th scope="col" {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                    ))}
                 </tr>

                ))}
               
              </thead>
            
                  <tbody className="bg-row" {...getTableBodyProps()}>
                    {rows.map((row)=>{
                      prepareRow(row)
                      return(
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell)=>{
                            return(
                              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            )
                          })}
                        
                        </tr>
                      )

                    })}
                     
                  </tbody>
               
             
          </table>
        {/* table  end */}
</div>
        </>
    )
}

export default Table;
