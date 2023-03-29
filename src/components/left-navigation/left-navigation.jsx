import { Link } from "react-router-dom";
import "./left-navigation.styles.scss";

const LeftNavigation = () => {
  return (
    <fragment>
      <div className="boxing">
        <Link className="event-links" to="welcomesocial">
          Welcome Social
        </Link>
        <Link className="event-links" to="dandiya">
          Dandiya
        </Link>
        <Link className="event-links" to="diwali">
          Diwali
        </Link>
        <Link className="event-links" to="holi">
          Holi
        </Link>
        <Link className="event-links" to="isf">
          International Street Fair
        </Link>
      </div>
    </fragment>
  );
};

export default LeftNavigation;
