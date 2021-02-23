import React from 'react';

function Roadinfo() {
  return (
    <div className="wrapper">
      <div className="cont-road">
        <div className="route">
          <div className="route__route">
            <div className="route__block">
              <div className="route__svg">
                <div className="route__image">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.91 35.36">
                    <title>Ok</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <polygon points="50.91 3.54 19.09 35.35 0 16.26 3.54 12.73 19.09 28.28 47.38 0 50.91 3.54" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="route__line">
                <div className="route__routeline"></div>
              </div>
            </div>
            <div className="route__block route__block-small">
              <div className="route__svg route__svg-green">
                <div className="route__image route__image-green">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.46 35.36">
                    <title>Place</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M13.22,0A13.25,13.25,0,0,0,0,13.21c0,.29,0,.59,0,.87C.33,22.25,5.08,28,10.1,32.6c1,1,2.1,1.88,3.13,2.76,1-.88,2.09-1.8,3.13-2.76,5-4.62,9.77-10.35,10.08-18.52,0-.28,0-.58,0-.87A13.26,13.26,0,0,0,13.22,0Zm9.09,14c-.29,6.8-4.47,11.7-9.09,15.89-4.57-4.16-8.71-9-9.06-15.71a1.09,1.09,0,0,1,0-.18c0-.25,0-.51,0-.77a9.1,9.1,0,0,1,18.2,0C22.33,13.47,22.32,13.73,22.31,14Z" />
                        <path d="M13.22,6.43A6.79,6.79,0,1,0,20,13.21,6.8,6.8,0,0,0,13.22,6.43Zm0,9.44a2.66,2.66,0,1,1,2.66-2.66A2.66,2.66,0,0,1,13.22,15.87Z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="route__name">
            <div className="route__city">
              <div className="route__cityname">Jackson Heights</div>
              <div className="route__names">32-27 74th Street</div>
            </div>
            <div className="route__city">
              <div className="route__cityname">GreenPoint</div>
              <div className="route__names">81 Gate St Brooklin</div>
            </div>
          </div>
        </div>
        <div className="route__information">
          <ul className="route__items">
            <li className="route__item">
              <div className="route__numbers">12.3 km</div>
              <div className="route__names">Distance</div>
            </li>
            <li className="route__item">
              <div className="route__numbers">42 min</div>
              <div className="route__names">Time</div>
            </li>
            <li className="route__item">
              <div className="route__numbers">&#36;34.20</div>
              <div className="route__names">Price</div>
            </li>
            <li className="route__item">
              <div className="route__numbers">12.4 kWh</div>
              <div className="route__names">Energy</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Roadinfo;
