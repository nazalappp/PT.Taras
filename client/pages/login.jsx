import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

function login() {
    const [name, setName] = useState('');
    const rooter=useRouter()

    // Similar to componentDidMount and component DidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Login`;
      return () => {
          document.title = `Profile ${name}`;
      }
    });
  
    const handlename =(e)=> {
      setName(e.target.value)
    }
    const handlepage =()=> {
      rooter.push('/login2')
    }
  return (
    <div className='container'>
        <form>
            <div>
                <label>Username :</label>
                <input type="text" name="username" className='input' value={name} onChange={(e) => {handlename(e)}} required />
            </div>
            <div>
                <label>Password :</label>
                <input type="password" name="password" className='input' required />
            </div>
            <div>
                <input type="button" className='submit' onClick={()=>{handlepage()}}/>
            </div>
        </form>
    </div>
  )
}

export default login