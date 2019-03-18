let getDarkSkyInfo = (lat, long) => {
    return fetch(`https://api.darksky.net/forecast/44b2a941396207d1ca80f2c42ddde21c/${lat},${long}`)
    .then(response => response.json());
}
let getParkInfo = () => {
    fetch("http://localhost:9099/parks", 
    {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(parsed => createDomElements(parsed));
}
