import Tesseract from "tesseract.js";
import { useState } from "react";
import "./style.css";

const Extract = () => {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState();
  const [language, setLanguage] = useState("en");
  const [tl, setTl] = useState();
  const [lang, setLang] = useState();
  const [cogn, setCogn] = useState();
  const [responseTime, setResponseTime] = useState();

  // lang --> English Translated data
  // language --> detected language

  // const [convert,setConvert] = useState()

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    const type = e.target.files[0].type;
    console.log(type);
    if (type === "application/pdf") {
      alert(
        "Please Use Screenshots of PDF (Not PDF)....This Feature is Yet to be Implemented"
      );
    }
  };

  const processImage = () => {
    setResult("");
    setProgress(0);
    setLang("");
    setTl("");

    Tesseract.recognize(file, language, {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(m.progress);
        }
        console.log(m);
      },
    }).then(({ data: { text } }) => {
      setResult(text);

      const payload = {
        q: text,
        target: "en",
      };

      fetch(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBzDcF2YPzwAKbwAVRw6tW_UDnoXzA0EVc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          let help = data.data.translations[0].translatedText;
          //Cases

          // 1.cognizable
          const Cognizable = [
            "dead",
            "accident",
            "dead body",
            "killed",
            "truck",
            "car",
            "hit",
            "ran",
            "rash",
            "recklessly",
          ];

          Cognizable.forEach((val) => {
            let position = help.search(val);
            console.log("val : ", val + "position:", position);
            if (position !== -1) {
              console.log("Cognizable FIR");
              setCogn("Cognizable Offence :1.Accuse Can be arrested without any warrant.\n 2.Investigation should be started without any prior order from the court.\n 3.The report must be given to the magistrate within 90 days (If the punishment is more than 7 years)");
            }
          });

          // 2.non-cognizable
          const Non_Cognizable = [
            "cheated",
            "forgery",
            "Simple Hurt",
            "Assault",
            "cheating",
          ];

          Non_Cognizable.forEach((val) => {
            let position = help.search(val);
            console.log("val : ", val + "position:", position);
            if (position !== -1) {
              console.log("Non Cognizable FIR");
              setCogn("Non-Cognizable Offence :1.Accuse Can't be arrested without any warrant.\n 2.FIR can't be filed without the permission of magistrate.\n 3. Investigation can't be started without the permission of magistrate.");
            }
          });

          setLang(data.data.translations[0].translatedText);
          console.log(result);

          //Removing the extra space
          // let removedSpaceText = result.trim().split(/ +/).join(" ");
          // console.log(removedSpaceText);
          // let removedNewLinesText = removedSpaceText.replace(
          //   /(\r\n|\n|\r)/gm,
          //   ""
          // );
          // console.log(removedNewLinesText);

          // const payload2 = {
          //   Lang: language,
          //   Text: removedNewLinesText,
          // };

          // console.log(payload2);
         
          // fetch("http://127.0.0.1:5000/lang", {
          //   method: "POST",
          //   mode: "no-cors",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: payload2,
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     console.log("hi");
          //     console.log(data);
          //     setTl(data);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });

          fetch('http://127.0.0.1:5000/responsetime',{
            method:'GET'
          })
             .then((res) => res.json())
            .then((data) => {
              console.log("hi");
              console.log(data);
              setResponseTime(data);
            })
            .catch((err) => {
              console.log(err);
            });


        })

       


        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };

  return (
    <>
      <div className="parent3">
        <section className="left3">
          <p>SELECT FIR SCREENSHOTS</p>
          <i class="fa-solid fa-arrow-down"></i>
          <input type="file" onChange={onFileChange}></input>
          <span>Choose State or language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
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
          </select>

          <button onClick={processImage}>Extract Text</button>

          <div className="progress-bar">
            <progress value={progress} max={1} />
          </div>
        </section>

        <section className="middle3 card card-5">
          <h1>Extracted Data</h1>
          {result !== "" && (
            <>
              <p> {result}</p>
            </>
          )}
        </section>

        <section className="right3 card card-5">
          <h1>English Output</h1>
          {lang !== "" && (
            <>
              <p> {lang}</p>
            </>
          )}
        </section>

        {/* <section className="right3 card card-5">
          <h1>Transliterated Output</h1>
          {tl !== "" && (
            <>
              <p> {tl}</p>
            </>
          )}
        </section> */}
      </div>

      <div className="parent3">
        <section className="middle3">
          <h1>The FIR has large chances of being:</h1>
          <p>{cogn}</p>
        </section>

        <section className="middle3">
         <h1>Police Response time</h1>
         {/* <p>FIR Date:{responseTime.firdate}</p>
         <p>FIR Time:{responseTime.firtime}</p>
         <p>Information Date:{responseTime.infodate}</p>
         <p>Information Time:{responseTime.infotime}</p>
         <p>Response Time :{responseTime.responseTime}</p>  */}
         {
          console.log(responseTime)
         }
        </section>
      </div>


    </>
  );
};

export default Extract;
