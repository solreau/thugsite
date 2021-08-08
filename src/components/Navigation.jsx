import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation" style={{backgroundColor: "#9c74fc"}} >
      <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"><img src={"./favicon-32x32.png"} /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav" >
          <li class="nav-item active">
            <a class="nav-link" href="/"><b>nest</b><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about"><b>about</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/roadmap"><b>roadmap</b></a>
          </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default withRouter(Navigation);