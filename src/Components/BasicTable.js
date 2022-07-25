import React ,{useMemo}from 'react';
import {useTable,useGlobalFilter,useSortBy} from 'react-table';
import {COLUMNS,GROUPED_COLUMNS} from './Columns';
import MOCK_DATA from './MOCK_DATA.json';

const BasicTable = () => {


  
  

//const columns= useMemo(()=>COLUMNS,[]);
const columns= useMemo(()=>GROUPED_COLUMNS,[]);
const data=useMemo(()=>MOCK_DATA,[]);


  const tableInstance = useTable({
    columns,
    data
  },useGlobalFilter,useSortBy)


  const {getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow}=tableInstance;

    const {globalFilter}=state;

    return (
        <>
 <div className="bg-header">

      <h1 >List Of Countries</h1>
      <div className="search-btn">
          <input type="text" value={globalFilter || ''} onChange={(e)=>setGlobalFilter(e.target.value)}/><button className="bg-btn btn">Filter</button>
      </div>

      {/* table  start */}
          <table className="table" {...getTableProps()} >
              
              <thead className="bg-table-header" >
                {headerGroups.map((headerGroups)=>(
                   <tr {...headerGroups.getHeaderGroupProps()}>
                    {headerGroups.headers.map((columns)=>(
                       <th scope="col" {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                        {columns.render('Header')}
                        <span>
                          {columns.isSorted ? (columns.isSortedDesc ? '↓' : '↑') : ' '}
                        </span>
                        </th>
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

export default BasicTable;
