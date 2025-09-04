import { useState } from 'react'
import './App.css'
import CloudinaryUploadForm from './Form'
import Gallery from './Galley'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CloudinaryUploadForm />
     <Gallery />
    </>
  )
}

export default App
