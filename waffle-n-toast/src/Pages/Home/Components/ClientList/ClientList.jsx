import "./ClientList.scss";

import { ReactComponent as GuySalmonLogo } from "../../../../assets/images/guy-salmon-website-logo.svg";
import { ReactComponent as GailsTailsLogo } from "../../../../assets/images/gails-tails-logo.svg";
import { ReactComponent as WeatherAppLogo } from "../../../../assets/images/weather-app-logo.svg";
import { ReactComponent as SharonJSLogo } from "../../../../assets/images/sharon-js-website-logo.svg";

const ClientList = () => {
    return (
      <>
        <div className="clientlist-background">
          <div className="clientlist-container">
            <div className="clientlist-image-grid">
              <div className="grid">
                <GuySalmonLogo className="one" aria-label="Code Logo" />
              </div>
              <div className="grid">
                <GailsTailsLogo className="one" aria-label="Design Logo" />
              </div>
              <div className="grid">
                <WeatherAppLogo className="one" aria-label="Hosting Logo" />
              </div>
              <div className="grid">
                <SharonJSLogo className="one" aria-label="Hosting Logo" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ClientList;