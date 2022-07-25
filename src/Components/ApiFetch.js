
import React,{useState,useEffect} from 'react';
import {Columns} from './Columns';

// this complete component simply fetching the data from API
const ApiFetch = () => {


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

    return (
        <div className="bg-header">

            <h1 >List Of Countries</h1>
            <div className="search-btn">
                <input type="text" /><button className="bg-btn btn">Search</button>
            </div>

            {/* table  start */}
                 <table className="table">
                    
                 <thead className="bg-table-header" >
                   <tr >
                     <th scope="col">S.NO</th>
                     <th scope="col">Country Name</th>
                     <th scope="col">Capital</th>
                     <th scope="col">Flag</th>
                     <th scope="col">Click Details</th>
                   </tr>
                 </thead>
                 {
                country.map((item,i)=>{

                   return (
                   <>

                    <tbody className="bg-row">
                        <tr >
                        <td >{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.capital}</td>
                        <td><img src={item.flag} alt="Not Found" className="bg-img"/></td>
                        <td><button className="bg-btn btn">Details</button></td>
                        </tr>
                    </tbody>
                   </>
                   );
                })
            }
                </table>
               {/* table  end */}
        </div>
    );

}

export default ApiFetch;
