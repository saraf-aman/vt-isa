import "./event-display.styles.scss";

const EventDisplay = ({ elist }) => {
  const { imageUrl, text } = elist;
  return (
    <section>
      <div className="img-container">
        <img src={imageUrl} alt="img" />
      </div>
      <p style={{ paddingRight: "50px" }}>{text}</p>
    </section>
  );
};

export default EventDisplay;
