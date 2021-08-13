import React from "react";


function Home() {
  return (
    <div className="home" >
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="gif.gif"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h2 class="Header">thugbirdz</h2>
            <ul class="list-unstyled text-center" >
              <li class = "item">launching on the 22nd of August</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;