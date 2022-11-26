import Tesseract from "tesseract.js";
import { useState } from "react";
import "./style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaUnderline } from "react-icons/fa";
import axios from 'axios';

const Extract = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState();
  const [language, setLanguage] = useState("en");
  const [tl, setTl] = useState();
  const [responseTime, setResponseTime] = useState();

  const onFileChange = (e) => {

    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    const type = e.target.files[0].type;
    console.log(type);
    // if (type === "application/pdf") {
    //   alert(
    //     "Please Use Screenshots of PDF (Not PDF)....This Feature is Yet to be Implemented"
    //   );
    // }
  };

  const processImage = () => {
    setResult("");
    setProgress(0);
    
    setTl("");

    // Tesseract.recognize(file, language, {
    //   logger: (m) => {
    //     if (m.status === "recognizing text") {
    //       setProgress(m.progress);
    //     }
    //     console.log(m);
    //   },
    // }).then(({ data: { text } }) => {
    //   setResult(text);
    const formData = new FormData()
    formData.append(
        "file",
         file,
         file.name
    );
    
        console.log(file)
        //   fetch("http://127.0.0.1:5000/responsetime", {
        //     method: "POST",
        //     header:{
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     mode: "no-cors",
        //     body:file
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log("hi");
        //       console.log(data);
        //       setResponseTime(data);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        console.log(formData)
        axios.post('http://localhost:5000/responseTime',formData)
        .then((res)=>{
            setResponseTime(res.data)
            console.log(res.data)
            console.log(responseTime)
        })
            .catch((err)=>console.error(err))
        
  };

  return (
    <div className="parentDiv">
      <div className="parent3">
        <section className="left3">
          <p>SELECT FIR SCREENSHOTS</p>
          <i class="fa-solid fa-arrow-down"></i>
          <input
            type="file"
            onChange={onFileChange}
            accept='.pdf'
            style={{ borderRadius: 6, marginLeft: -100 }}
          ></input>
          {/* <span style={{ fontWeight: 600 }}>Choose State or language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ borderRadius: 5, padding: 5 }}
          >
            <option value="eng">ENGLISH</option>
            <option value="tam">Tamil Nadu -- Tamil</option>
            <option value="hin">Uttar Pradesh -- Hindi</option>
            <option value="kan">Karnataka -- Kannada</option>
            <option value="mar">Maharashtra -- Marathi</option>
            <option value="hin">Rajasthan -- Hindi</option>
            <option value="hin">Chattisgarh -- Hindi</option>
            <option value="hin">Madhya Pradesh -- Hindi</option>
            <option value="tam">Pudducherry -- Tamil</option>
            <option value="hin">Bihar -- Hindi</option>
            <option value="hin">Haryana -- Hindi</option>
            <option value="pan">Punjab -- Punjabi</option>
            <option value="tel">Andhra Pradesh -- Telgu</option>
            <option value="ori">Orrisa -- Oriya</option>
            <option value="mal">Kerela -- Malayam</option>
            <option value="guj">Gujrat -- Gujrati</option>
          </select> */}

          <button onClick={processImage}>Get the MTTR data</button>

        </section>

        <section
          className="middle3 card card-5"
          style={{
            backgroundColor: "#d6c9af",
            borderRadius: 8,
            border: "1px solid white",
            overflow: "hidden",
          }}
        >
          <h1>MTTR (Mean time to response)</h1>
          {responseTime !== undefined && (
            <>
              <p>Information recieved at police station on- {responseTime.infodate}</p>
              <p>Information recieved at police station at-  {responseTime.infotime}</p>
              <p>FIR Registered On- {responseTime.firdate}</p>
              <p>FIR Registered AT- {responseTime.firtime}</p>
              <p>Police response time - {responseTime.responseTime} min</p>
            </>
          )}
        </section>
        
      </div>
      <div
        style={{
          boxShadow: 20,
          border: 2,
        }}
      >
        <h1
          style={{
            fontWeight: 650,
            textAlign: "center",
            marginTop: 100,
            fontSize: 21,
            textDecoration: "underline",
          }}
        ></h1>
        {/* Categorization
       
        <div
          style={{
            boxShadow: 2,
            width: 900,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 20,
          }}
        > */}
        {/* <section
            className="right3 card card-5"
            style={{
              backgroundColor: "#d6c9af",
              borderRadius: 8,
              border: "1px solid white",
              overflow: "hidden",
            }}
          >
            <h1>FIR has large chance of being:</h1>
            <p className=" para">{cogn}</p>
          </section> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Extract;
