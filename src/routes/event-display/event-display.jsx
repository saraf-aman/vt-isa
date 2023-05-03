import "./event-display.styles.scss";

const EventDisplay = ({ elist }) => {
  const { imageUrl, text } = elist;
  return (
    <section>
      <div style={{ paddingRight: "5px" }}>
        <img style={{ maxWidth: "100%" }} src={imageUrl} alt="img" />
      </div>
      <p style={{ paddingRight: "5px" }}>{text}</p>
    </section>
  );
};

export default EventDisplay;
