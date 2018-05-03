module.exports = (subscriber, availables) => {
  let dynamicTemplate = ``;
  availables.map(available => {
    let image = '';
    dynamicTemplate += `<div class="emailContainer">`;
    dynamicTemplate += `<div class="broadcastContainer">`;
    dynamicTemplate += `<div class="addressLink county"><a href="">${available.county} County</a></div>`;
    if (available.images.length === 0) {
      image =
        'https://drive.google.com/uc?export=view&id=16iXzf2QZ4vf42Lzy55Z6NDViDd2Cs54G';
    } else {
      image = available.images[0];
    }
    dynamicTemplate += `<img src=${image} class="image" alt=${
      available.county
    } title="rentals" />`;
    dynamicTemplate += `<div class="addressLink address"><a href="">${available.address}</a></div>`;
    dynamicTemplate += `<div class="rent">$${available.rent}</div>`;
    dynamicTemplate += `</div>`;
    dynamicTemplate += `</div>`;
  });
  return `
          <html>
          <head>
          <style>
          body {color: #000}
          span {font-weight: bold; font-size: small}
          .broadcastContainer {background-color: #fff; text-align: center; float: left; border-radius: 1px; border: 1px solid #B5B5B5; padding: 5px; margin: 5px; width: 300px; height: 280px; word-wrap: break-word; font-family: 'Verdana'}
          .image {display:block; width: 250px; height: 180px; margin: 5px auto;}
          .addressLink a {text-decoration: none; color: #000;}
          .address {font-size: 1.2em}
          .county {font-size: 1.4em}
          .rent {font-size: 1.5em; font-weight: bold; margin-top: 5px}
          .footer {text-align: center; font-size: 0.6em; clear: both; margin-top: 3px;}
          #websiteLink {font-size: 2em}
          </style>
          </head>
              <body>
                  <div>
                    <p>Hi ${subscriber.name},</p>
                    <p>Don't miss out on these amazing rentals available this week!</p>
                    ${dynamicTemplate}
                  </div>
                  <div class="footer">
                  <p id="websiteLink">Check out more details and apply online http://www.hoproperty.com</p>
                  <p><a href="http://www.hoproperty.com/update_preference">Change your Mailing Options</a></p>
                  <p><a href="http://www.hoproperty.com/unsubscribe">Unsubsribe</a></p>
                  </div>
              </body>
          </html>
      `;
};
