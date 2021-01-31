// const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const request = await fetch("https://ipinfo.io?token=7984d02b159997");

    const json = await request.json();
    
    let zip = json.postal;

    const response = await fetch(`https://localcoviddata.com/covid19/v1/locations?zipCode=${zip}`);

    const data = await response.json();
    
    data.counties.map((c) => {
      console.log(`There have been ${c.positiveCt} confirmed cases in ${c.countyName}.`);
    });
    
//     displayData(covidData);
  }
  catch (error) {
    console.log(error)
  };
};

// const displayData = (covidInfo) => {
//   covidInfo.forEach((e) => {
//     let para = document.createElement("p");
//     para.innerHTML = e;
//     document.querySelector('.covid-info').appendChild(para); 
//   })
// }

fetchData();
