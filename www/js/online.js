function addShowForm(event) {
    event.preventDefault()
    divShowItems=document.getElementsByClassName("divShowItem").length
    if ( divShowItems < 5) {
        let divShow = document.createElement('div')
        divShow.className = 'form-group divShowItem'

        let labelShowName = document.createElement('label')
        labelShowName.innerText = 'Nom de la série'
        labelShowName.setAttribute('for', 'nameShow')

        let inputShowName = document.createElement('input')
        inputShowName.setAttribute('type', 'text')
        inputShowName.className = 'form-control'
        inputShowName.id='show-name'+ (divShowItems+1)
        inputShowName.setAttribute('name', 'show-name')
        inputShowName.setAttribute('placeholder', 'nom de la serie')

        let labelShowImgLink = document.createElement('label')
        labelShowImgLink.innerText = 'Lien vers une image de la série'
        labelShowImgLink.setAttribute('for', 'nameShow')
        
        let inputShowImglink = document.createElement('input')
        inputShowImglink.setAttribute('type', 'text')
        inputShowImglink.className = 'form-control'
        inputShowImglink.id='img_link' + (divShowItems+1)
        inputShowImglink.setAttribute('placeholder', 'Lien vers une image de la série')
        inputShowImglink.setAttribute('name', 'img_link')
        
        let newHr = document.createElement('hr')

        divShow.appendChild(labelShowName)
        divShow.appendChild(inputShowName)
        divShow.appendChild(labelShowImgLink)
        divShow.appendChild(inputShowImglink)
        divShow.appendChild(newHr)

        let formLastChild = document.getElementById('form-show-list')
        formLastChild.insertBefore(divShow, formLastChild.lastElementChild)

    } else {
        alert('5 elements maximum par liste')
    }
}

function resetForm() {
    let showItems = document.getElementsByClassName('divShowItem')
    for (let i = 1; i < showItems.length; i) {
        console.log(showItems.length);
        showItems[i].remove();
    }
}

function populateStorage() {
    var storage = window.localStorage;
    storage.setItem('1', `{
        "title": "Series live recommandées",
        "content": [{
                "name": "The Witcher",
                "img_link": "https://i.ytimg.com/vi/8wvpE2GCor4/maxresdefault.jpg"
            },
            {
                "name": "Loki",
                "img_link": "https://www.justgeek.fr/wp-content/uploads/2021/04/loki-disney-bande-annonce-550x309.jpeg"
            },
            {
                "name": "Wandavision",
                "img_link": "https://fr.web.img4.acsta.net/r_654_368/newsv7/21/01/13/14/11/3695233.jpg"
            },
            {
                "name": "Good Omens",
                "img_link": "https://www.rts.ch/2019/06/07/14/22/10491472.image?w=1280&h=720"
            },
            {
                "name": "Russian Doll ",
                "img_link": "https://archzine.fr/wp-content/uploads/2019/06/natasha-lyonne-russian-doll-poupe%CC%81e-russe-nadia-netflix-saison-2-twitter-news-actu-infos-lifestyle-se%CC%81ries-tv.jpg"
            }
        ]
    }`)
    storage.setItem('2', `{
        "title": "Series qui arrivent",
        "content": [{
                "name": "Cowboy Bebop",
                "img_link": "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceisAEPalt9ltbvcjhtlS7j5KIYjt-v5DxYoQxE4nBw04cRzMhLbgj25UcWs7vUtNVisI3Sh0ZGjCa6Y7kEjFxy292k.jpg?r=168"
            },
            {
                "name": "Young Justice",
                "img_link": "https://www.dcplanet.fr/wp-content/uploads/2021/10/Young_Justice_Phantoms_key_art.jpg"
            },
            {
                "name": "Moon Knight",
                "img_link": "https://assets.cdn.moviepilot.de/files/3aa5e7106f6030e1d8f9f100bb1711bc247689a1187962b6d0a5603f4cb8/limit/1024/2000/moon-knight.jpg"
            },
            {
                "name": "Ironheart",
                "img_link": "https://ayther.fr/wp-content/uploads/2020/12/ironheart-disney-plus.jpg"
            }
        ]}`)
    storage.setItem('3',`{
        "title": "Series d'animation recommandées",
        "content": [{
                "name": "Final space",
                "img_link": "https://fr.web.img6.acsta.net/newsv7/21/04/02/12/41/4758141.jpg"
            },
            {
                "name": "Castlevania",
                "img_link": "https://vonguru.fr/wp-content/uploads/2021/04/castlevania-saison-4-netflix-sortie-breve-cine-series-vonguru.jpg"
            },
            {
                "name": "The Dragon Prince",
                "img_link": "https://www.betanews.fr/wp-content/uploads/2020/11/The-Dragon-Prince-Saison-4-Date-de-sortie-distribution-intrigue.jpg"
            },
            {
                "name": "Devilman Crybaby",
                "img_link": "https://www.close-upmag.com/wp-content/uploads/2018/02/Devilman-Crybaby_Image-principale.jpg"
            },
            {
                "name": "Invincible",
                "img_link": "https://sm.ign.com/ign_fr/news/a/amazons-in/amazons-invincible-official-first-look-trailer-for-adult-ani_1kj1.jpg"
            }
        ]
    }`)
}

function setTopLinks() {
    let storage = window.localStorage;
    let ul = document.getElementById('topListLink')
    ul.innerHTML = ""

    Object.entries(storage).forEach(element => {

        try{
            let str = element[1]
            let parsed 
            parsed = JSON.parse(str)
            let listItem = document.createElement('li')
            let link = document.createElement('a')
            link.href ="#"
            link.innerText=parsed.title
            link.setAttribute('onclick',`getListByKey(${element[0]})`)
            listItem.appendChild(link)

            ul.appendChild(listItem)
            
        }
        catch(e)
        {
            console.error("parsing error", e)
        }


    })
}

// fetchApiTopNames() {
//     console.log();
// }

// fetchApiTopContent(id){
//     log
// }

function getListByKey(key){
    let storage = window.localStorage
    let list = storage.getItem(key)
    list = JSON.parse(list)

    let listShowcase = document.getElementById('list-showcase')
    listShowcase.innerHTML = ''
    listShowcase.classList.remove("hidden")

    let h2 = document.createElement('h2')
    h2.innerText=list.title
    listShowcase.appendChild(h2)

    list.content.forEach((show,key) => {
       article = document.createElement('article')

       h3 = document.createElement('h3')
       topNumber = parseInt(key)
       topNumber++
       h3.innerText = 'Top ' +  topNumber+ ' : ' + show.name

       img = document.createElement('img')
       img.src = show.img_link
       img.className = 'img-fluid'

       article.appendChild(h3)
       article.appendChild(img)
       listShowcase.appendChild(article)
    })
}


function showPage(name){
    let pages = document.getElementsByClassName('page')
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id == name){
            pages[i].classList.remove('hidden')
        }
        else{
            pages[i].classList.add('hidden')
        }
    }
}

function postForm(event) {
    event.preventDefault()

    let storage = window.localStorage
    let formObject = {
        title:'',
        content: []
    }
    console.log(formObject);
    //recuperer le nom du top
    let topTitle = document.getElementById('topTitle').value
    formObject.title = topTitle
    //recuperer le tableau avec les series
    let showList = document.getElementsByClassName("divShowItem")
    let showElement = {
        name:'',
        img_link:''
    }
    for (let i = 0; i < showList.length; i++) {
        showElement.name= document.getElementById('show-name' + (i+1)).value
        showElement.img_link= document.getElementById('img_link' + (i+1)).value
        formObject.content.push(showElement)
    }
    
    //JSONIFY le tout
    let parseObj= JSON.stringify(formObject)
    //Mettre le tour dans le local storage
    let nbKey = storage.length
    nbKey++;
    nbKey = nbKey.toString()
    storage.setItem(nbKey, parseObj)
    setTopLinks()
}
setTopLinks()
