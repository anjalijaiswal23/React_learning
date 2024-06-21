import React, { useState } from 'react';

function FilterSearch() {
  const [searchTerm,setsearchTerm]=useState('');

  const Fruitdata = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince"
  ];

  


  const handleSearchtype =(event)=>{
    const value=event.target.value
    console.log(event.target.value)
      setsearchTerm(value);
  }
console.log(searchTerm)
  return (
    <div>
      <input type="text" placeholder="search here..." onChange={handleSearchtype} />
      {/* <ul>
        {Fruitdata.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))} 
      </ul> */}

      <div>
        <p>result=</p>
   
        {(Fruitdata.filter(data=>(data.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())))).map((data,index)=>(
           <li key={index}>{data}</li>
        ))}
     
      </div>
    </div>
  );
}

export default FilterSearch;
