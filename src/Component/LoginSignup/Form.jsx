import React, { useState } from 'react'

const Form = () => {

const [userRegistration, setuserRegistration] = useState({
     username:"",
     email:"",
     password:""
});

const handleInput =(e) =>{
    const name = e.target.name;

}

return (
  <div>
  
  <Form>
  
  <div className='split'>

  <input type='text' placeholder='First Name'/>
  <input type='text' placeholder='Last Name'/>

  </div>
<div>
<input type='email' placeholder='Work Email'/>
</div>

<div>
<input type='Phone' placeholder='Phone Number'/>
</div>
<div>
<input type='text' placeholder='Where are you located'/>
</div>

<div>
<input type='text' placeholder='Company Name'/>
</div>
  

<div className='split'>

<input type='text' placeholder='Company Size'/>
<input type='text' placeholder='Number of learners'/>

</div>

<div className='split'>

<input type='text' placeholder='Job Title'/>
<input type='text' placeholder='Job Level'/>

</div>

<div >
<input type='text' placeholder='What are your organization s training needs? (Optional)'/>
</div>


  </Form>
  
  </div>
)
}

export default Form