import React from 'react'
import "../AdminDaskboard/organize.css"
// import Adminavbar from './Adminavbar'
import AddCourse from './AddCourse'
import Coursetitle from './Coursetitle'
import Footer from './Footer'
import Organize from './Organize'
import Display from './Display'





function AdmiHome() {
  return (
    <div className='background-main'>
    <div>
    {/*<Adminavbar/>*/}
    <AddCourse/>

    <div className='mycls'>
      <Coursetitle/>
      <Organize/>
    </div>
    <Display/>
    
    <Footer/>

     
    </div>
    </div>
   
  )
}

export default AdmiHome