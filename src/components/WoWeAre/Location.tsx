import "../../styles/WoWeAre/Location.css";

function Location() {
  return (
    <div className="location">
      <div className="location-title">
        Where we are <span className="gradient-text-located">LOCATED</span>
        <br />
        and where we are <span className="gradient-text-going">GOING</span>
      </div>
      <div className="location-grid">
        <img src="world-img.png" className="location-img"></img>
        <div className="plan">
          <div className="plan-title">Plan 2030</div>
          <div className="location-text">
            This is just a dummy text that has been inserted as a placeholder
            for future content. While it may seem insignificant at first glance,
            the use of dummy text is a common practice in the design and
            publishing industry, as it allows designers and developers to
            visualize the layout and overall aesthetic of a project without
            being distracted by the actual content.
          </div>
        </div>

          <div className="analize-title">
            Currently, our team of experts can analyze companies in person in:
          </div>
          <br />
          <div className="location-text2">
            - Buenos Aires, Capital Federal, Argentina <br />
            - São Sebastião do Rio de Janeiro, Rio de Janeiro, Brazil <br />
            - Bogotá, Distrito Capital, Colombia <br />
            - Panama City, Capital City, Panama <br />- Mexico City, Distrito
            Federal, Mexico
          </div>

        <div className="location-text3">
          - Los Angeles, CA, USA
          <br />
          - Dallas, TX, USA
          <br />
          - Greater New York Tri-State Area, NJ, NY, CT, USA <br />
          - Madrid, Capital del Estado, Spain
          <br />- Rome, Lazio, Italy
        </div>
      </div>
    </div>
  );
}

export default Location;
