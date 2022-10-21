import { useState } from "react";
import "./App.css";

const App = () => {
  const [add, setadd] = useState();
  const [add1, setadd1] = useState();
  const [addall, setaddall] = useState();
  const [sub, setsub] = useState();
  const [sub1, setsub1] = useState();
  const [suball, setsuball] = useState();
  const [multiply, setmultiply] = useState();
  const [multiply1, setmultiply1] = useState();
  const [allmultiply, setmultiplyall] = useState();
  const [division, setdivision] = useState();
  const [division1, setdivision1] = useState();
  const [alldivision, setdivisionall] = useState();

  const addsend = () => {
    let ad = parseInt(add);
    let ad1 = parseInt(add1);
    let myadd = ad + ad1;
    setaddall(myadd);
  };
  const subsend = () => {
    let su = parseInt(sub);
    let su1 = parseInt(sub1);
    let mysub = su - su1;
    setsuball(mysub);
  };
  const mulsend = () => {
    let su = parseInt(multiply);
    let su1 = parseInt(multiply1);
    let mysub = su * su1;
    setmultiplyall(mysub);
  };
  const divsend = () => {
    let su = parseInt(division);
    let su1 = parseInt(division1);
    let mysub = su / su1;
    setdivisionall(mysub);
  };

  return (
    <>
      <div className="Addition">
        <h3>Addition</h3>
        <input className="in"
          onChange={(v) => {
            setadd(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>+</span>
        <input className="in"
          onChange={(v) => {
            setadd1(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>={addall}</span>
        <br />
        <button className='btn' onClick={addsend}>Submit</button>
      </div>
      <div className="Addition">
        <h3>Subtraction</h3>
        <input className="in"
          onChange={(v) => {
            setsub(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>-</span>
        <input className="in"
          onChange={(v) => {
            setsub1(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>={suball}</span>
        <br />
        <button className='btn' onClick={subsend}>Submit</button>
      </div>
      <div className="Addition">
        <h3>Multiplication</h3>
        <input className="in"
          onChange={(v) => {
            setmultiply(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>*</span>
        <input className="in"
          onChange={(v) => {
            setmultiply1(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>={allmultiply}</span>
        <br />
        <button className='btn' onClick={mulsend}>Submit</button>
      </div>
      <div className="Addition">
        <h3>Division</h3>
        <input className="in"
          onChange={(v) => {
            setdivision(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>/</span>
        <input className="in"
          onChange={(v) => {
            setdivision1(v.target.value);
          }}
          placeholder="Enter Number"
          type="text"
        ></input>
        <span>={alldivision}</span>
        <br />
        <button className='btn' onClick={divsend}>Submit</button>
      </div>
    </>
  );
};

export default App;
