module.exports = application => {
    return `
          <html>
          <head>
          <style>
          span {font-weight: bold; font-size: small}
          </style>
          </head>
              <body>
                  <div>
                      <h2>Application: ${application.address}</h2>
                      <p><span>Number of Occupants:</span> ${application.occupants}</p>
                      <p><span>Expected move-in date:</span>  ${application.date}</p>
                      <div>
                      <br />
                      <h3>Main Applicant</h3>
                        <p><span>First Name:</span> ${application.firstName}</p>
                        <p><span>Last Name:</span> ${application.lastName}</p>
                        <p><span>Phone:</span> ${application.phone}</p>
                        <p><span>Email:</span> ${application.email}</p>
                        <p><span>Occupation:</span> ${application.occupation}</p>
                        <p><span>Income:</span> ${application.income}</p>
                        <p><span>Employer:</span> ${application.employer}</p>
                        <p><span>Credit:</span> ${application.credit}</p>
                        <p><span>Evicted before?</span> ${application.eviction}</p>
                        <p><span>Bankrupted?</span> ${application.bankruptcy}</p>
                      </div>
                      <br />
                      <br />
                      <div>
                      <h3>Co-Applicant</h3>
                        <p><span style="font-weight: bold">Name of Co-Applicant:</span> ${application.coName || 'none'}</p>
                        <p><span style="font-weight: bold">Occupation of Co-Applicant:</span> ${application.coOccupation || 'none'}</p>
                        <p><span style="font-weight: bold">Income of Co-Applicant:</span> ${application.coIncome || 'none'}</p>
                        <p><span style="font-weight: bold">Employer of Co-Applicant:</span> ${application.coEmployer || 'none'}</p>
                      </div>
                  </div>
              </body>
          </html>
      `;
  };