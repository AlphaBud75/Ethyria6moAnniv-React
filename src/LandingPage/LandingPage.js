import React from "react";
import "./LandingPage.css";

import { Link, Route, Switch } from "react-router-dom";

import SiteEnna from "../pages/Site_Enna";
import SiteMillie from "../pages/Site_Millie";
import SiteNina from "../pages/Site_Nina";
import SiteReimu from "../pages/Site_Reimu";

export default function LandingPage() {
  const path_fixed = "/Ethyria6moAnniv-React";
  const names = {
    e: "/EnnaAlouette",
    m: "/MillieParfait",
    n: "/NinaKosaka",
    r: "/ReimuEndou",
  };

  return (
    <div>
      {window.location.pathname === path_fixed && (
        <div className="container">
          <div className="subcontainer">
            <Link
              to={path_fixed + names["e"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="enna" src={require("./img/enna.jpg")} alt="enna.jpg" />
            </Link>
          </div>
          <div className="subcontainer">
            <Link
              to={path_fixed + names["n"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="nina" src={require("./img/nina.jpg")} alt="nina.jpg" />
            </Link>
          </div>
          <div className="subcontainer">
            <Link
              to={path_fixed + names["r"]}
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
              to={path_fixed + names["m"]}
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
        <Route
          exact
          path={[path_fixed + "/e", path_fixed + "/E", path_fixed + names["e"]]}
        >
          <SiteEnna />
        </Route>
        <Route
          exact
          path={[path_fixed + "/m", path_fixed + "/M", path_fixed + names["m"]]}
        >
          <SiteMillie />
        </Route>
        <Route
          exact
          path={[path_fixed + "/n", path_fixed + "/N", path_fixed + names["n"]]}
        >
          <SiteNina />
        </Route>
        <Route
          exact
          path={[path_fixed + "/r", path_fixed + "/R", path_fixed + names["r"]]}
        >
          <SiteReimu />
        </Route>
      </Switch>
    </div>
  );
}
