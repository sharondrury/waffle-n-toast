import "./ClientList.scss";

import { ReactComponent as CodeLogo } from "../../../../assets/images/Group4.svg";
import { ReactComponent as DesignLogo } from "../../../../assets/images/Group12.svg";
import { ReactComponent as HostingLogo } from "../../../../assets/images/network.svg";

const ClientList = () => {
    return (
      <>
        <div className="clientlist-background">
          <div className="clientlist-container">
            <div className="clientlist-image-grid">
              <div className="grid">
                <CodeLogo className="one" aria-label="Code Logo" />
              </div>
              <div className="grid">
                <DesignLogo className="one" aria-label="Design Logo" />
              </div>
              <div className="grid">
                <HostingLogo className="one" aria-label="Hosting Logo" />
              </div>
              <div className="grid">
                <HostingLogo className="one" aria-label="Hosting Logo" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ClientList;