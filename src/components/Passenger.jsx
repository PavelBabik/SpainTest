import React, { useState } from 'react';

function Passenger() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="wrapper">
      <div className="infocard__row">
        <div className="infocard__title">passenger info</div>
        <div className="infocard__hide">
          <span className="infocard__buttontitle">Hide information</span>
          <div className={isActive ? 'active' : 'switch'} onClick={toggleClass}>
            <div className="switch__button">a</div>
          </div>
        </div>
      </div>
      <div className={isActive ? 'infocard__card-hidden' : 'infocard__card'}>
        <div className="left">
          <div className="cont">
            <div className="infocard__info">
              <div className="infocard__img">
                <img
                  src="https://cdn1.truelancer.com/user-picture/506427-5b0597fbda700.jpg"
                  alt="photo"
                />
              </div>
              <div className="infocard__text">
                <div className="infocard__name">Pavlo Babik</div>
                <div className="infocard__txt">4 interactions</div>
              </div>
            </div>
          </div>
          <div className="cont">
            <div className="infocard__title">email</div>
            <div className="infocard__name infocard__name-notbold">invision@invisionapp.com</div>
          </div>
          <div className="cont">
            <div className="infocard__title">phone</div>
            <div className="infocard__name infocard__name-notbold">+144-3412-4422</div>
          </div>
          <div className="cont">
            <div className="infocard__title">location</div>
            <div className="infocard__name infocard__name-notbold">New York, NY</div>
          </div>
        </div>
        <div className="right">
          <ul className="infocard__payinfo">
            <li className="infocard__payment">
              <div className="infocard__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.36 9.57">
                  <title>paypal_1</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="Paypal">
                        <path
                          class="cls-1"
                          d="M6.34,1.56A1.52,1.52,0,0,0,5.81,1,2.62,2.62,0,0,0,5,.68,8.78,8.78,0,0,0,3.84.59h-2A.5.5,0,0,0,1.36,1L0,6.86a.28.28,0,0,0,.29.36h1a.5.5,0,0,0,.47-.36l.33-1.43a.49.49,0,0,1,.46-.37h.27a4.59,4.59,0,0,0,2.75-.72,2.26,2.26,0,0,0,1-1.91A1.75,1.75,0,0,0,6.34,1.56ZM4.26,3.48A2,2,0,0,1,3,3.8H2.81a.29.29,0,0,1-.3-.36L2.8,2.19a.51.51,0,0,1,.46-.37h.32A1.49,1.49,0,0,1,4.42,2a.61.61,0,0,1,.27.57A1,1,0,0,1,4.26,3.48Z"
                        />
                        <polygon
                          class="cls-1"
                          points="33.79 1.06 33.73 1.07 33.65 1.09 33.55 1.07 33.5 1.02 33.48 0.94 33.48 0.83 33.48 0.4 33.8 0.4 33.8 0.27 33.48 0.27 33.48 0 33.32 0 33.32 0.27 33.21 0.27 33.21 0.4 33.32 0.4 33.32 0.9 33.39 1.15 33.61 1.22 33.7 1.22 33.8 1.2 33.8 1.06 33.79 1.06"
                        />
                        <polygon
                          class="cls-1"
                          points="35.29 0.34 35.06 0.24 34.89 0.28 34.72 0.39 34.62 0.28 34.45 0.24 34.3 0.28 34.15 0.37 34.15 0.27 33.99 0.27 33.99 1.2 34.15 1.2 34.15 0.5 34.28 0.42 34.41 0.39 34.52 0.41 34.57 0.46 34.59 0.55 34.6 0.67 34.6 1.2 34.76 1.2 34.76 0.6 34.75 0.56 34.75 0.51 34.88 0.42 35.02 0.39 35.12 0.41 35.17 0.47 35.19 0.56 35.2 0.67 35.2 1.21 35.36 1.21 35.36 0.6 35.29 0.34"
                        />
                        <path
                          class="cls-1"
                          d="M11,2.4a3.68,3.68,0,0,0-1.72-.31,6.49,6.49,0,0,0-1.16.1,4.31,4.31,0,0,0-.5.09.57.57,0,0,0-.42.44l-.12.49c-.07.31.11.29.19.27a4.27,4.27,0,0,1,.57-.17,3.78,3.78,0,0,1,.9-.12,2.47,2.47,0,0,1,.88.12.45.45,0,0,1,.29.44l0,.13L9.74,4c-.55,0-1,.09-1.43.15a4.51,4.51,0,0,0-1.22.34,2,2,0,0,0-.83.65,1.84,1.84,0,0,0-.27,1A1.2,1.2,0,0,0,6.38,7a1.48,1.48,0,0,0,1,.34,3,3,0,0,0,.6,0l.47-.16L8.86,7l.37-.24h0l0,.16h0a.29.29,0,0,0,.26.36h.91a.51.51,0,0,0,.41-.36l.71-3,0-.25,0-.23A1,1,0,0,0,11,2.4ZM9.43,5.82,9.28,6l-.38.19a1.23,1.23,0,0,1-.5.11,1.15,1.15,0,0,1-.55-.1l-.19-.36a.75.75,0,0,1,.14-.47l.41-.28A3.22,3.22,0,0,1,8.85,5l.71-.08L9.62,5C9.61,5.07,9.49,5.59,9.43,5.82Z"
                        />
                        <path
                          class="cls-1"
                          d="M28.48,2.41a3.61,3.61,0,0,0-1.72-.31,7.68,7.68,0,0,0-1.17.09,4.31,4.31,0,0,0-.5.09.57.57,0,0,0-.42.45l-.12.48c-.06.31.11.3.19.27s.25-.09.58-.17a4.38,4.38,0,0,1,.9-.12,2.41,2.41,0,0,1,.87.12.44.44,0,0,1,.29.44v.14L27.23,4c-.55,0-.95.09-1.42.16a4.41,4.41,0,0,0-1.22.33,1.92,1.92,0,0,0-.83.66,1.73,1.73,0,0,0-.28,1,1.16,1.16,0,0,0,.4.92,1.48,1.48,0,0,0,1,.35,2.85,2.85,0,0,0,.6-.06L26,7.17l.4-.22.36-.24h0l0,.15h0a.28.28,0,0,0,.25.36h.91a.5.5,0,0,0,.41-.37l.71-3,0-.25,0-.23A1,1,0,0,0,28.48,2.41ZM26.93,5.82l-.16.2-.38.2a1.33,1.33,0,0,1-.5.11,1.09,1.09,0,0,1-.54-.11l-.19-.36a.77.77,0,0,1,.13-.47,1.1,1.1,0,0,1,.42-.28A3.74,3.74,0,0,1,26.34,5l.71-.08.07.12C27.11,5.08,27,5.59,26.93,5.82Z"
                        />
                        <path
                          class="cls-1"
                          d="M23.83,1.58A1.52,1.52,0,0,0,23.3,1,2.53,2.53,0,0,0,22.46.7,7.4,7.4,0,0,0,21.33.62h-2a.47.47,0,0,0-.45.36L17.5,6.88a.29.29,0,0,0,.29.37h1a.49.49,0,0,0,.46-.36l.32-1.43A.51.51,0,0,1,20,5.08h.27A4.57,4.57,0,0,0,23,4.36a2.28,2.28,0,0,0,1-1.91A1.87,1.87,0,0,0,23.83,1.58ZM21.75,3.51a2,2,0,0,1-1.21.32H20.3a.3.3,0,0,1-.3-.37l.29-1.25a.51.51,0,0,1,.46-.37h.32A1.46,1.46,0,0,1,21.9,2a.63.63,0,0,1,.28.57A1,1,0,0,1,21.75,3.51Z"
                        />
                        <path
                          class="cls-1"
                          d="M32.09,1A.28.28,0,0,0,31.8.67h-.86a.5.5,0,0,0-.42.29L30.47,1l0,.19L29.22,6.71l0,.17h0a.27.27,0,0,0,.24.34v0h.9A.48.48,0,0,0,30.75,7l.05-.07L32.09,1Z"
                        />
                        <path
                          class="cls-1"
                          d="M17.53,2.17H16.37a.82.82,0,0,0-.6.37l-1.52,2.6h-.16l-.43-2.59a.53.53,0,0,0-.52-.38h-.86a.28.28,0,0,0-.29.36s.65,3.73.78,4.61c.07.48,0,.57,0,.57l-.86,1.49c-.12.2-.05.36.15.36h1a.77.77,0,0,0,.6-.37L17.5,2.71S17.87,2.16,17.53,2.17Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </li>
            <li className="infocard__payment">
              <div className="infocard__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.64 8.2">
                  <title>Visa</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="visa">
                        <polygon
                          class="cls-1"
                          points="10.66 0.14 9.31 8.08 11.48 8.08 12.83 0.14 10.66 0.14"
                        />
                        <path
                          class="cls-1"
                          d="M7.5.15,5.38,5.56l-.23-.82a8.57,8.57,0,0,0-3-3.29L4.09,8.08H6.38L9.79.14Z"
                        />
                        <path
                          class="cls-1"
                          d="M4.33.71C4.2.23,3.84.09,3.38.07H0L0,.23a6.9,6.9,0,0,1,5.06,4Z"
                        />
                        <path
                          class="cls-1"
                          d="M17.22,1.66a4,4,0,0,1,1.62.3l.2.1L19.33.33A5.63,5.63,0,0,0,17.39,0c-2.14,0-3.65,1.08-3.66,2.62,0,1.14,1.07,1.78,1.9,2.16s1.12.64,1.12,1c0,.53-.67.77-1.3.77a4.61,4.61,0,0,1-2-.41L13.14,6l-.31,1.78a6.92,6.92,0,0,0,2.41.42C17.52,8.2,19,7.13,19,5.48c0-.9-.56-1.59-1.81-2.15C16.44,3,16,2.71,16,2.34S16.37,1.66,17.22,1.66Z"
                        />
                        <path
                          class="cls-1"
                          d="M24.88.15H23.21A1.08,1.08,0,0,0,22.08.8L18.86,8.08h2.28l.45-1.19h2.77c.07.28.27,1.19.27,1.19h2ZM22.21,5.27l.87-2.22s.17-.46.29-.76l.14.68s.42,1.9.5,2.3Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </li>
            <li className="infocard__payment">
              <div className="infocard__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.29 22.88">
                  <title>mastercard</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="mastercard">
                        <path
                          class="cls-1"
                          d="M14.15,16A8.88,8.88,0,1,1,8.88,0a8.84,8.84,0,0,1,5.27,1.74,8.85,8.85,0,0,0,0,14.28Z"
                        />
                        <path
                          class="cls-1"
                          d="M17.26,8.88a8.45,8.45,0,0,1-3.11,6.64A8.43,8.43,0,0,1,11,8.88a8.43,8.43,0,0,1,3.12-6.64A8.45,8.45,0,0,1,17.26,8.88Z"
                        />
                        <path
                          class="cls-1"
                          d="M28.29,8.88A8.87,8.87,0,0,1,14.15,16a8.87,8.87,0,0,0,0-14.28A8.87,8.87,0,0,1,28.29,8.88Z"
                        />
                        <text class="cls-2" transform="translate(0 21.76)">
                          mastercard
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </li>
            <li className="infocard__payment">
              <div className="infocard__svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.83 13.63">
                  <title>applepay</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="applepay">
                        <path
                          class="cls-1"
                          d="M8.05,7.45c-.56,1.43-1.59,2.82-2.24,2.82s-1.11-1-1.58-1-1,1-1.58,1C1.71,10.27,0,7.4,0,5.66,0,4.19.85,2.71,2.38,2.71c.92,0,1.85.49,1.85,1,0-.48.93-1,1.85-1a2.12,2.12,0,0,1,1.81,1,1.8,1.8,0,0,0-1.4,1.86A1.77,1.77,0,0,0,8.05,7.45Z"
                        />
                        <path class="cls-1" d="M6,1.34l-1.54,1L5.24.77C5.83.15,6.51.22,6,1.34Z" />
                        <text class="pay" transform="translate(9.75 9.9)">
                          Pay
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Passenger;
