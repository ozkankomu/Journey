
const apiKey = 'L6k85Ai0gDrPx60p8q6aAyEBBNkqjD8D';
const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`


fetch(url)
    .then((res) => {
        if (!res.ok) {
            renderError(`something went wrong: ${res.status}`);
            throw new Error();
        }
        return res.json();
    })
    .then((data) => news(data))
    .catch()


const renderError = () => {
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML += `
        <h2>Countries can not found fatch</h2>
        <img src="https://i.stack.imgur.com/6M513.png" alt="">
    `
}

let news = (newsData) => {

    let d = (date) => {
        let dt = newsData.results[date].published_date
        return dt.split('T')[0];

    }


   // console.log(newsData.results);

    let top_left = document.getElementById('top-left');
    let top_right = document.getElementById('top-right');

    for (let i = 4; i < 8; i++) {

        let newsSmallCard = document.createElement('div')
        newsSmallCard.classList.add('newsSmallCard');
        top_left.appendChild(newsSmallCard);

        newsSmallCard.innerHTML = `
        <div class="newsSmallCard" id="newsSmallCard">
        <div class="CardImage" id="CardImage"><img
                src="${newsData.results[i].multimedia[0].url}"
                alt=""></div>
        <div class="smCardContent" id="smCardContent">
            <p class="smWiter">${newsData.results[i].byline} - ${d(i)}</p>
            <h1 class="smCardTitle" id="h1">${newsData.results[i].title}</h1>
            <a class="smCardLink" target='_blank' href="${newsData.results[i].url}">Read Artical <i
                    class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    </div>
            `
    }

    let upCardImage = document.createElement('div');
    upCardImage.classList.add('upCardImage');
    top_right.appendChild(upCardImage);

    upCardImage.innerHTML = `
    <div class="upCardImage" id="upCardImage">
                            <img src="${newsData.results[9].multimedia[0].url}"
                                alt="">
                            <div class="shadow"></div>
                            <div class="upCardContent">
                                <p class="upWiter">${newsData.results[9].byline} - ${d(9)}</p>
                                <h1 class="upCardTitle">${newsData.results[9].title}</h1>
                                <a class="upCardLink"  target='_blank' href="${newsData.results[9].url}">Read Artical <i
                                        class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
    
    `



    for (let i = 10; i < 14; i++) {
        let recentCrad = document.createElement('div');
        let recentNewsBody = document.getElementById('recentNewsBody');
        recentCrad.classList.add('recentCrad');
        recentNewsBody.appendChild(recentCrad);

        recentCrad.innerHTML = `    
                 <div class="reCardImage "><img
                            src="${newsData.results[i].multimedia[0].url}"
                            alt=""></div>
                   
                            <div class="recentCardContent">
                            
                            <p class="reWiter">${newsData.results[i].byline} - ${d(i)}</p>
                            
                            <h1 class="reCardTitle">${newsData.results[i].title}</h1>
                        <p class="redescription">${newsData.results[i].abstract}</p>
                        <a  target='_blank' href="${newsData.results[i].url}" class="reCardLink">Read Artical<i
                                class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                        
                    </div>
    `
    }




    for (let i = 14; i < 15; i++) {

        let carousel_inner = document.getElementById('carousel-inner');
        let carousel_item = document.createElement('div');
        carousel_inner.appendChild(carousel_item);

        carousel_item.innerHTML = `
        <div class="carousel-item active">
              <img src="${newsData.results[i].multimedia[0].url}"
              class="imgnews" alt="...">
               <div class="shadow"></div>
               <div class="carousel-caption text-start">
              <a class="herolink" target='_blank' href="${newsData.results[i].url}">
              <p class="hrwriter">${newsData.results[i].byline} - ${d(i)}</p>
              <h5 class="herotitle">${newsData.results[i].title}</h5>
                  <p class="herodescription">${newsData.results[i].abstract}</p>
              </a>
              </div>
              </div>
              `

        for (let i = 16; i < 19; i++) {

            let carousel_inner = document.getElementById('carousel-inner');
            let carousel_item = document.createElement('div');
            carousel_inner.appendChild(carousel_item);

            carousel_item.innerHTML = `
                <div class="carousel-item">
                      <img src="${newsData.results[i].multimedia[0].url}"
                      class="imgnews" alt="...">
                       <div class="shadow"></div>
                       <div class="carousel-caption text-start">
                      <a class="herolink"  target='_blank' href="${newsData.results[i].url}">
                      <p class="hrwriter">${newsData.results[i].byline} - ${d(i)}</p>
                      <h5 class="herotitle">${newsData.results[i].title}</h5>
                          <p class="herodescription">${newsData.results[i].abstract}</p>
                      </a>
                      </div>
                      </div>
                      `



        }

    }















}







