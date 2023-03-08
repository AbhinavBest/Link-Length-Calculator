import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [hdist, setHdist] = useState("");
  const [vdist, setVdist] = useState("");
  const [rangestart, setRangestart] = useState("");
  const [rangeend, setRangeend] = useState("");
  const [ratio, setRatio] = useState("");
  const list = [];
  const [values, setValues] = useState("");

  const handleSubmit = event => {
    console.log("Values submited");
    event.preventDefault();
    console.log('hdist is ', hdist);
    console.log('vdist is ', vdist);
    console.log('rangestart is ', rangestart);
    console.log('rangeend is ', rangeend);
    console.log('ratio is ', ratio);
    let bd = Math.sqrt(hdist * hdist + vdist * vdist);
    console.log(bd); //ok
    for (let i = rangestart; i <= rangeend; i++) {
      let cd = i * ratio;
      let bc = i;
      let x = bc * bc + cd * cd - bd * bd;
      let y = 2 * bc * cd;
      let bcd = Math.acos(x / y) * 180 / Math.PI;
      let bcdd = Math.acos(x / y);

      let abd = Math.asin(hdist / bd) * 180 / Math.PI;
      let adb = Math.asin(vdist / bd) * 180 / Math.PI;
      let m = (cd * Math.sin(bcdd));
      let n = (bc * Math.sin(bcdd));
      let dbc = Math.asin(m / bd) * 180 / Math.PI;
      let cdb = (Math.asin(n / bd)) * 180 / Math.PI;
      let abc = abd + dbc;

      let adc = adb + cdb;

      //console.log(bcd); //ok
      //console.log(Math.sin(bcdd));//ok
      //console.log(Math.asin(m/bd)*180/Math.PI);//ok
      //console.log(n); //ok
      // console.log(adb);//ok
      // console.log(abd);//ok
      // console.log(dbc);//ok
      // console.log(cdb);//ok
      // console.log(bc); //ok
      // console.log(cd); //ok
      // console.log(bcd); //ok
      // console.log(abc); //ok
      // console.log(adc); //ok
      list.push(<div className="val"><li> {bc} :Link 2<br></br>  Link 1: {cd}<br></br>  AngleC:{bcd}<br></br>  AngleB: {abc}<br></br>  AngleD: {adc}</li><br></br></div>);
    }
    console.log(list);
    setValues(list);
  }
  const renderList = list;
  console.log(values);
  console.log(renderList);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500;700&family=Lobster&display=swap"
        rel="stylesheet" />

      <div className="start">
        <div className="djsa">
          <h1>DJS Antariksh</h1>
        </div>
        <div className="llc">
          <h1 >Link Length/Angle Calculator</h1>
        </div>
      </div>
      <div className="border"></div>
      <section className="imgs">
      </section>
      <form onSubmit={handleSubmit}>
        <section className="input">
          <div>
            <div className="hdist-div">
              <h1>Horizontal distance from panel to base of RA(AD):-</h1>
              <input id="hdist" name="hdist" type="number" value={hdist} onChange={event => setHdist(event.target.value)} />
            </div>
            <div className="vdist-div">
              <h1>Vertical height to be reached by RA(AB):-</h1>
              <input id="vdist" name="vdist" type="number" value={vdist} onChange={event => setVdist(event.target.value)} />
            </div>
            <div className="rangestart-div">
              <h1>Range start of link length:-</h1>
              <input id="rangestart" name="rangestart" type="number" value={rangestart} onChange={event => setRangestart(event.target.value)} />
            </div>
            <div className="rangeend-div">
              <h1>Range end of link length:-</h1>
              <input id="rangeend" name="rangeend" type="number" value={rangeend} onChange={event => setRangeend(event.target.value)} />
            </div>
            <div className="ratio-div">
              <h1>Ratio between link 1:link 2 (x:1) :-</h1>
              <input id="ratio" name="ratio" type="number" value={ratio} onChange={event => setRatio(event.target.value)} />
            </div>
            <div className="calculate"><button type="submit" className="calculate-btn">Calculate</button></div>
          </div>
          <div>
            <img src={require("./Refrence.jpg")} className="Refrence-img" alt="Refrence"></img>
          </div>

        </section>
      </form>
      <div>
        {values}
      </div>
    </>
  )
}

export default Calculator;