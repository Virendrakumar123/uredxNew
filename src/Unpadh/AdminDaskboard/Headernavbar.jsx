import React from 'react';
import '../AdminDaskboard/headernavbar.css';

function Headernavbar() {
  return (
    <div className='navbar'>
      
      <img src='uredx_logo-1.png' alt='' className='logo' />

      <div className='search-box'>
        <input type='text' placeholder='search...' />
        
         <button type='submit'><i className='fa fa-search'></i></button> 
      </div>
      
       <img src='' alt='' className='toggle-icon'/>
    </div>
  );
}

export default Headernavbar;
