import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const loadDemo = (file) => {
    const Demo = importDemo(file);
    console.log(Demo);
    return <Demo />;
  };

  const handleSelectDemo = (file) => {
    const DemoComponent = loadDemo(file);
    setSelectedDemo(DemoComponent);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center">React Lazy Load</h1>
      <div className="flex justify-center gap-4 py-5">
        {demos.map((demo) => (
          <button
            key={demo.name}
            onClick={() => handleSelectDemo(demo.file)}
            className="bg-green-500 rounded"
          >
            {demo.name}
          </button>
        ))}
      </div>
      <hr />
      <div><Suspense fallback={<h2>Loading...</h2>}>{selectedDemo}</Suspense></div>
    </>
  );
}

export default App;
