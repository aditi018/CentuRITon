import express from "express";
import calc from "./responsetime.js";
const app = express();
import bodyParser from "body-parser";
import PDFParser from "pdf2json";
import cors from "cors";
import multer from "multer";
import path from "path";
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("port", 5000);
app.listen(app.get("port"), () => {
  console.log("server running on 5000");
});

app.post("/responsetime", upload.single("file"), function (req, res) {
  let pdfParser = new PDFParser(this, 1);
  pdfParser.on("pdfParser_dataError", (errData) =>
    console.error(errData.parserError)
  );
  pdfParser.on("pdfParser_dataReady", (pdfData) => {
    let json_data = JSON.stringify(pdfParser.getRawTextContent());

    let dateoffir = json_data.search(/\d\d\/\d\d\/\d\d\d\d/);
    let date = json_data.substring(dateoffir, dateoffir + 10);
    let timeoffir = json_data.search(/\d\d\:\d\d/);
    let time = json_data.substring(timeoffir, timeoffir + 5);

    let start = json_data.search(/Information/);
    let end = json_data.search(/General/);
    let extracted = json_data.substring(start, end);

    let infodate = extracted.search(/\d\d\/\d\d\/\d\d\d\d/);
    let date1 = extracted.substring(infodate, infodate + 10);
    let infotime = extracted.search(/\d\d\:\d\d/);
    let time1 = extracted.substring(infotime, infotime + 5);

    var t1 = time.substring(0, time.indexOf(":"));
    var t2 = time1.substring(0, time1.indexOf(":"));

    res.send({
      infodate: date1,
      infotime: time1,
      firdate: date,
      firtime: time,
      responseTime: calc(date, t1, date1, t2),
    });
  });
  pdfParser.loadPDF(req.file.originalname);
});
