import { useState } from "react";
import "./style.css";
import axios from "axios";

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
  };

  const processImage = () => {
    setResult("");
    setProgress(0);

    setTl("");
    const formData = new FormData();
    formData.append("file", file, file.name);
    console.log(file);
    console.log(formData);
    axios
      .post("http://localhost:5000/responseTime", formData)
      .then((res) => {
        setResponseTime(res.data);
        console.log(res.data);
        console.log(responseTime);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="parentDiv">
      <div className="parent3">
        <section className="left3">
          <p style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
            SELECT FIR SCREENSHOTS
          </p>
          <i class="fa-solid fa-arrow-down"></i>
          <input
            type="file"
            onChange={onFileChange}
            accept=".pdf"
            style={{ borderRadius: 6, marginLeft: -100 }}
          ></input>
          <button onClick={processImage}>Get the MTTR data</button>
        </section>

        <section
          className="middle card card-5"
          style={{
            backgroundColor: "#d6c9af",
            borderRadius: 8,
            border: "1px solid white",
          }}
        >
          <h1
            style={{
              fontWeight: 650,
              fontSize: 25,
              fontFamily: "sans-serif",
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <u>MTTR</u> (Mean time to response)
          </h1>
          {responseTime !== undefined && (
            <>
              <p>
                Information recieved at police station on-{" "}
                {responseTime.infodate}
              </p>
              <p>
                Information recieved at police station at-{" "}
                {responseTime.infotime}
              </p>
              <p>FIR Registered On- {responseTime.firdate}</p>
              <p>FIR Registered AT- {responseTime.firtime}</p>
              <div className="response1">
                Police response time - {responseTime.responseTime} min
              </div>
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
      </div>
    </div>
  );
};

export default Extract;
