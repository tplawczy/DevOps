import './App.css';
import { useState } from "react";
import DodajRower from './DodajRower';
import EdytujRower from './EdytujRower';
import Rowery from './Rowery';

function App() {

  const [initialValue1, setInitialValue1] = useState(1234);
  const [initialValue2, setInitialValue2] = useState(1234);
  const [currentRower, setCurrentRower] = useState(1)
  const [deletedRower, setDeletedRower] = useState(1234)






  const handleInitialValue = (event) => {
    setInitialValue1(event.target.value);
  };
  return (
    <div>
      <>
        {/* <input onChange={handleInitialValue}/> */}

        <Rowery changed1={initialValue1} changed2={initialValue2} changed3={deletedRower} changeParentHandler3={setCurrentRower} />
        <DodajRower changeParentHandler1={setInitialValue1} />
        <EdytujRower currentRower={currentRower} changeParentHandler2={setInitialValue2} changeParentHandler4={setDeletedRower} />

      </>
    </div>
  );
}

export default App;
