import { Outlet } from "react-router-dom";
import LeftNavigation from "../../components/left-navigation/left-navigation";

import "./events.styles.scss";

const Events = () => {
  return (
    <section id="events">
      <div className="section">
        <h2>Events</h2>
        <div className="event-container">
          <div className="event-name-container">
            <LeftNavigation />
          </div>
          <div className="event-detail-container">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
