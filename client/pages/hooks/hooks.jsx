import React, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';

function Example() {
  const [name, setName] = useState('Nazala Putri');

  // Similar to componentDidMount and component DidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Profile ${name}`;
    return () => {
        document.title = `Blog`;
    }
  });

  const handlename =(e)=> {
    setName(e.target.value)
  }

  return (
    <div>
        <form action="">
            <p >Your name : <input type="text" value={name} onChange={(e) => {handlename(e)}}/></p>
        </form>
      {/* <p>You clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <p><Link href="blog"><a>Click here to open blog page</a></Link></p>
    </div>
  );
}

export default Example