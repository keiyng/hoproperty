module.exports = (subscriber, availables) => {
  let dynamicTemplate = ``;
  availables.map(available => {
    let image = '';
    dynamicTemplate += `<div>`;
    dynamicTemplate += `<h3>${available.county}</h3>`;
    if (available.images.length === 0) {
      image =
        'https://drive.google.com/uc?export=view&id=16iXzf2QZ4vf42Lzy55Z6NDViDd2Cs54G';
    } else {
      image = available.images[0];
    }
    dynamicTemplate += `<img src=${image} alt=${
      available.county
    } title="rentals" style="display:block" width="200" height="120"/>`;
    dynamicTemplate += `<div>${available.address}</div>`;
    dynamicTemplate += `<p>$${available.rent}</p>`;
    dynamicTemplate += `<p>Available Now</p>`;
    dynamicTemplate += `</div>`;
  });
  return `
          <html>
          <head>
          <style>
          span {font-weight: bold; font-size: small}
          </style>
          </head>
              <body>
                  <div>
                    <p>Hi ${subscriber.name},</p>
                    ${dynamicTemplate}
                    <p>Check out more details and apply on https://hopropertyllc.com</p>
                  </div>
                  <p>You can <a href="/update_preference">change your preference</a>, or <a href="/unsubscribe">unsubsribe</a> from Ho Property, LLC</p>
              </body>
          </html>
      `;
};
