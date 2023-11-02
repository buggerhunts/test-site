          import React from 'react';
          import './App.css';

          const App = () => {
            const showPopup = (event, popupId) => {
              const target = event.target || event.srcElement;
              if (target.tagName.toLowerCase() === 'area') {
                const popup = document.getElementById(popupId);
                popup.style.display = 'block';
                popup.style.left = event.pageX + 'px';
                popup.style.top = event.pageY + 'px';
              }
            };

            const hidePopup = (popupId) => {
              const popup = document.getElementById(popupId);
              popup.style.display = 'none';
            };

            return (
              <div className="container">
                <div className="image-container">
                  <img
                    src="./src/room.png"
                    useMap="#roommap"
                    alt="Interactive Room"
                    className="image"
                  />
                  <map name="roommap">
                    <area
                      shape="rect"
                      target="_parent"
                      alt=""
                      title=""
                      href="https://twitter.com/"
                      coords="409,260,450,210"
                      onMouseOver={(event) => showPopup(event, 'popup1')}
                      onMouseOut={() => hidePopup('popup1')}
                    />
                    <area
                      shape="poly"
                      coords="749,549,692,328,459,390,737,549,462,388"
                      onMouseOver={(event) => showPopup(event, 'popup2')}
                      onMouseOut={() => hidePopup('popup2')}
                    />
                    <area
                      shape="rect"
                      coords="435,368,178,485"
                      onMouseOver={(event) => showPopup(event, 'popup3')}
                      onMouseOut={() => hidePopup('popup3')}
                    />
                    <area
                      shape="poly"
                      coords="5,450,57,405,103,499,63,536,63,538"
                      onMouseOver={(event) => showPopup(event, 'popup4')}
                      onMouseOut={() => hidePopup('popup4')}
                    />
                  </map>
                </div>
                <div id="popup1" className="popup">
                  Elon Musk is waiting
                </div>
                <div id="popup2" className="popup">
                  <h1>Hey, my name is Plain Jane</h1>
                </div>
                <div id="popup3" className="popup">
                  No formal Roadmap, just Plain Jane.
                  - Simple and safe contract<br />
                  - No extra unnecessary complex functions<br />
                  - Ownership renounced<br />
                  - liquidity tokens burned<br />
                  - O% tax
                  - Just fucking Plain Jane, you better Plain or Jane or just Plain Jane
                </div>
                <div id="popup4" className="popup">
                  Woof Woof! <br /> Plain Jane is the way to go! 
                </div>
                <div className="text-container">
                  <h2>A Story About Plain Jane</h2>
                  <p>
                    Once upon a time, in a small town called Plainville, there lived a
                    girl named Jane. She was known by everyone as Plain Jane because of
                    her simple and unassuming nature.
                  </p>
                  <br />
                  <p>
                    Every day, Jane would wake up early and go about her day with a quiet
                    determination. She would help her neighbors, tend to her garden, and
                    take care of her pet dog.
                  </p>
                  <br />
                  <p>
                    Despite her plain appearance, Jane had a heart of gold. She always
                    had a kind word for everyone she met and would go out of her way to
                    help those in need.
                  </p>
                  <br />
                  <p>
                    As the years went by, Plain Jane became a beloved figure in the town.
                    People admired her for her sincerity, humility, and genuine care for
                    others.
                  </p>
                  <br />
                  <p>
                    And so, the story of Plain Jane reminds us that true beauty lies not
                    in outward appearances, but in the kindness and love we show to one
                    another.
                  </p>
                </div>
              </div>
            );
          };

          export default App;