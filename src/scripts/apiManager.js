let getParkInfo = () => {
    fetch("http://localhost:9099/parks", 
    {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(parsed => createDomElements(parsed))
}