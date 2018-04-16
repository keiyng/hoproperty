module.exports = query => {
    return `
          <html>
          <head>
          <style>
          span {font-weight: bold; font-size: small}
          </style>
          </head>
              <body>
                  <div>
                      <p><span>Name:</span> ${query.name}</p>
                      <p><span>Email:</span> ${query.email}</p>
                      <p><span>Phone:</span> ${query.phone}</p>
                      <p><span>About:</span> ${query.about}</p>
                    </div>
              </body>
          </html>
      `;
  };