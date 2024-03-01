import { useState } from "react"
import ShapeDemo from "./components/ShapeDemo"
import ColorDemo from "./components/ColorDemo"
import SizeDemo from "./components/SizeDemo"


function App() { 
  const [selectedDemo,setSelectedDemo]=useState(null)

  const handleSelectDemo=(type)=>{
    setSelectedDemo(type)
  }

  return (
    <> 
      <h1 className="text-3xl font-semibold text-center">React Lazy Load</h1> 
      <div className="flex justify-center gap-4 py-5">
        <button onClick={()=>handleSelectDemo("shape")} className="bg-green-500 rounded">Shape Demo</button>
        <button onClick={()=>handleSelectDemo("color")} className="bg-green-500 rounded">Color Demo</button>
        <button onClick={()=>handleSelectDemo("size")} className="bg-green-500 rounded">Size Demo</button>
      </div>
      <hr />
      <div>
        {selectedDemo === "shape" && <ShapeDemo/>}
        {selectedDemo === "color" && <ColorDemo/>}
        {selectedDemo === "size" && <SizeDemo/>}
      </div>

    </>
  )
}

export default App
