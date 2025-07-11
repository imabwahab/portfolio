import './Client.css'
import { SiWalmart } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

function Clients() {
  return (
    <div id="clients">
      <h1 className="contactPageTitle">My clients</h1>

      <span className="clientDesc">
        I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with includes
      </span>

      <div className="clientCards">
        <div className="clientCard walmart">
          <SiWalmart className="clientIcon" />
        </div>
        <div className="clientCard adobe">
          <SiAdobe className="clientIcon" />
        </div>
        <div className="clientCard microsoft">
          <IoLogoMicrosoft className="clientIcon" />
        </div>
        <div className="clientCard facebook">
          <FaFacebookF className="clientIcon" />
        </div>
      </div>

      <div className="summaryCard">
        <div className="summaryItem">
          <h2>20+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="summaryItem">
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>
      </div>

    </div>
  )
}

export default Clients