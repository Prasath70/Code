import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useTimer from 'easytimer-react-hook'

function App() {
  const [BS,Setbs]=useState(true)
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Coding Problems.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Coding Problems.pdf';
            alink.click();
        })
    })
}

  return (
    <div className='w-screen'>
    <div className="container1 gap-10">
      <header>
        <h1>Welcome To Code Rush</h1>
      </header>
      <section className='flex gap-36'>
        <div className='flex flex-col space-y-10'>
          <div className='font-semibold  tracking-widest'>
            <h5>Click The Below Button To Download</h5>
          </div>
         {BS? <button className='border border-white  py-2 hover:bg-white hover:text-black hover:transition hover:duration-150' onClick={onButtonClick}>
            Download
          </button>: <button className='border border-white  py-2 hover:bg-white hover:text-black hover:transition hover:duration-150' >
            Please Wait.......
          </button>}
        </div>
       
        
      </section>
      <footer>
        
        {/* <span>Made with ❤️ by <a >Akash</a> &#128512;</span> */}
      </footer>
    </div>
    </div>
  )
}

export default App
