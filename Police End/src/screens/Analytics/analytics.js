const Analytics = () => {
  return (
    <div style={{ backgroundColor: "#EDEDED" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6.5rem",
          borderRadius: 5,
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 40, color: "black" }}>
          States where maximum number of FIRs were registered
        </h1>
        <iframe
          width="700"
          height="600"
          frameborder="0"
          scrolling="no"
          src="//plotly.com/~keshab0402/9.embed"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "6.5rem",
          borderRadius: 5,
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 40, color: "black" }}>
          Number of murders in districts of Uttar Pradesh
        </h1>
        <iframe
          width="1400"
          height="600"
          frameborder="0"
          scrolling="no"
          src="//plotly.com/~keshab0402/1.embed"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6.5rem",
          borderRadius: 5,
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 40, color: "black" }}>
          Persons arrested in SLL crimes vs IPC crimes (Statewise)
        </h1>
        <iframe
          width="1400"
          height="600"
          frameborder="0"
          scrolling="no"
          src="//plotly.com/~keshab0402/6.embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Analytics;
