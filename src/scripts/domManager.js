const body = document.querySelector('body');

let createDomElements = (data) => {

    let docFrag = document.createDocumentFragment();

    data.forEach(element => {
        const article = document.createElement('article');
        const parkTitle = document.createElement('h3');
        const pInfo = document.createElement('p');
        parkTitle.textContent = `Park Name: ${element.name}`;
        pInfo.textContent = `Located in: ${element.state}`;
            if(element.visited){
                article.className = 'red-border'
            }else{
                article.className = 'green-border'
            }
        article.appendChild(parkTitle);
        article.appendChild(pInfo);
        article.classList.add('spacer');
        docFrag.appendChild(article);
    });
    body.appendChild(docFrag);
}