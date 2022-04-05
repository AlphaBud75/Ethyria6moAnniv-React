import React from "react";
import "./LandingPage.css";

import { Link, Route, Switch } from "react-router-dom";

import SiteEnna from "../pages/Site_Enna";
import SiteMillie from "../pages/Site_Millie";
import SiteNina from "../pages/Site_Nina";
import SiteReimu from "../pages/Site_Reimu";

export default function LandingPage() {
  const names = {
    e: "EnnaAlouette",
    m: "MillieParfait",
    n: "NinaKosaka",
    r: "ReimuEndou",
  };

  return (
    <div>
      {window.location.pathname === "/" && (
        <div className="container">
          <div className="subcontainer">
            <Link
              to={"/" + names["e"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="enna" src={require("./img/enna.jpg")} alt="enna.jpg" />
            </Link>
          </div>

          <div className="subcontainer">
            <Link
              to={"/" + names["n"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="nina" src={require("./img/nina.jpg")} alt="nina.jpg" />
            </Link>
          </div>

          <div className="subcontainer">
            <Link
              to={"/" + names["r"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="reimu"
                src={require("./img/reimu.jpg")}
                alt="reimu.jpg"
              />
            </Link>
          </div>

          <div className="subcontainer">
            <Link
              to={"./" + names["m"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="millie"
                src={require("./img/millie.jpg")}
                alt="millie.jpg"
              />
            </Link>
          </div>
          <div className="wordart">
            <img
              id="ethyria_text"
              src={require("./img/ethyria_text.jpg")}
              alt="ethyria_text.jpg"
            />
          </div>
        </div>
      )}
      <Switch>
        {/* <Route path="/EnnaAlouette"> */}
        <Route exact path={["/e", "/E", "/" + names["e"]]}>
          <SiteEnna />
        </Route>

        {/* <Route exact path={["/Mi, "", names[]]}llieParfait"> */}
        <Route exact path={["/m", "/M", "/" + names["m"]]}>
          <SiteMillie />
        </Route>

        {/* <Route exact path={["/Ni, "", names[]]}naKosaka"> */}
        <Route exact path={["/n", "/N", "/" + names["n"]]}>
          <SiteNina />
        </Route>

        {/* <Route exact path={["/Re, "", names[]]}imuEndou"> */}
        <Route exact path={["/r", "/R", "/" + names["r"]]}>
          <SiteReimu />
        </Route>
      </Switch>
    </div>
  );
}
