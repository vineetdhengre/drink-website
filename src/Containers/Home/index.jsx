import React from "react";
import "./style.css";
import BackImage from "../../assets/Banners/main-banner.jpg";


export default class Home extends React.Component {
  componentDidMount() {
    console.log("I am about to say hello");
    document.getElementById(
      "backImg"
    ).style.backgroundImage = `url(${BackImage})`;
  }

  render() {
    return (
      <>
        <div className="container-fluid SPmain-banner"  id="backImg">
          <div className="row main-banner mx-auto">
            <div className="col-md-6 mx-auto">
              <h1 className="CH1 pb-4"> Become a Safe Place to Drink! </h1>
              <h2 className="CH2 pb-4">
                Certify your Efforts and Start Hosting Safe & Hygienic
                Celebrations Today!
              </h2>
              <p className="CH3">
                ‘Safe Place to Drink’ is a certification program aiming to
                ensure lounge/bar establishments’ complete compliance in the
                areas of safety, hygiene & overall health security standards.
              </p>
              <button className="btn btn-large btn-outline" type="submit"> Discover More</button>
            </div>
            <div className="col-md-5"> </div>
          </div>
        </div>

        <div className="container-fluid sec-contain">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <p className="h4 " id="text-weight"> Why Safe Place to Drink? </p>
              <p> 
                  Lounge/Bar establishments bring together guests from different backgrounds to interact on a one o one basis. Such places of Celebration/get-togethers are hence extremely susceptible to various contagions and dangerous contaminants. <br/>
                  The modern population clearly recognizes these dangers and actively opts for hygienic & safe services, sometimes even carefully examining the compliance level themselves. <br/>
                  The existing standards, however, may not include many measures that are of importance to the contemporary world. This is why the introduction of fresh streamlined standards that ensure complete health safety & security of guests, is the need of the hour. <br/>
                  Hence, fulfilling the rising demands of compliance with state-of-art hygiene and health safety standards becomes as important for beverage serving establishments as it is for food businesses. <br/>
                  ‘Safe Place to Drink’ certification is therefore a comprehensive solution to secure the customers’ trust in your services.

              </p>
            </div>
            <div className="col-md-4"> </div>
            
          </div>
        </div>

        <div className="container-fluid sec-contain">
          <div className="row">
            <div className="col-11 mx-auto">
              <p className="h4 " id="text-weight"> Enjoy Benefits </p>
            </div>
            
          </div>
          <div className="row pl-4 text-center">
                <div className="col-3">
                  
                </div>
                <div className="col-3">
                  <p className="h4 " id="text-weight"> Enjoy Benefits </p>
                </div>
                <div className="col-3">
                  <p className="h4 " id="text-weight"> Enjoy Benefits </p>
                </div>
                <div className="col-3">
                  <p className="h4 " id="text-weight"> Enjoy Benefits </p>
                </div>
          </div>
        </div>
      </>
    );
  }
}

// export default Home;
