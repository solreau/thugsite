import React from "react";


function Home() {
  return (
    <div className="home" >
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="gif.gif"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h2 class="Header">introducing thugbirdz</h2>
            <ul class="list-unstyled">
              <li>3333 generative thugbird NFTs, <b>launching on the 15th of august</b></li>
              <li><br></br></li>
              <li>10% of proceeds go to <a href="https://wildlifesos.org/">Wildlife SOS</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;