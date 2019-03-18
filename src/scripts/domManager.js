const body = document.querySelector('body');

let createDomElements = (data) => {

    let docFrag = document.createDocumentFragment();

    data.forEach(element => {
        const article = document.createElement('article');
        const parkTitle = document.createElement('h3');
        const pInfo = document.createElement('p');
        const pWeather = document.createElement('p');
        const weatherList = document.createElement('ul');
        const current = document.createElement('li');
        const today = document.createElement('li');
        const week = document.createElement('li');
        let lat = element.latitude;
        let long = element.longitude;

        parkTitle.textContent = `Park Name: ${element.name}`;
        pInfo.textContent = `Located in: ${element.state}`;

        getDarkSkyInfo(lat, long).then(r => {
            pWeather.textContent = `Weather: `;
            current.textContent = `Currently: ${r.currently.summary} `;
            today.textContent = `Today: ${r.hourly.summary}`;
            week.textContent = `Week: ${r.daily.summary}`;
        }
        );

        pWeather.textContent = `Weather: `;
        current.textContent = `Currently: `;
        today.textContent = `Today: `;
        week.textContent = `Week: `;
        if (element.visited) {
            article.className = 'red-border'
        } else {
            article.className = 'green-border'
        }
        article.appendChild(parkTitle);
        article.appendChild(pInfo);
        article.appendChild(pWeather);
        weatherList.appendChild(current);
        weatherList.appendChild(today);
        weatherList.appendChild(week);
        article.appendChild(weatherList);


        article.classList.add('spacer');
        docFrag.appendChild(article);
    });
    body.appendChild(docFrag);
}

