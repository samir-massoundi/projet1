/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function addShowForm(event) {
    event.preventDefault()
    if (document.getElementsByClassName("divShowItem").length < 5) {
        let divShow = document.createElement('div')
        divShow.className = 'form-group divShowItem'

        let labelShowName = document.createElement('label')
        labelShowName.innerText = 'Nom de la série'
        labelShowName.setAttribute('for', 'nameShow')

        let inputShowName = document.createElement('input')
        inputShowName.setAttribute('type', 'text')
        inputShowName.setAttribute('placeholder', 'nom de la serie')
        inputShowName.className = 'form-control'

        let labelShowImgLink = document.createElement('label')
        labelShowImgLink.innerText = 'Lien vers une image de la série'
        labelShowImgLink.setAttribute('imgLinkShow', 'nameShow')

        let inputShowImglink = document.createElement('input')
        inputShowImglink.className = 'form-control'
        let newHr = document.createElement('hr')

        divShow.appendChild(labelShowName)
        divShow.appendChild(inputShowName)
        divShow.appendChild(labelShowImgLink)
        divShow.appendChild(inputShowImglink)
        divShow.appendChild(newHr)

        let formLastChild = document.getElementById('form-show-list')
        formLastChild.insertBefore(divShow, formLastChild.lastElementChild)

        console.log(document.getElementsByClassName("divShowItem").length)
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
                "img_link": "img_link"
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
                "img_link": "https://lh3.googleusercontent.com/proxy/hSGTMd2QecxasEWXkSxVU-xFqDsmp-M9MVPuwyWNzUbpSxdPz4QU_wK581KlkwMuILvTh_A2kp2XcZV0rAFzabvpx466-JBD7G7ZKyfVYp4"
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
                "img_link": "https://static.wikia.nocookie.net/best-tv-shows/images/4/4d/Featured-image.jpg/revision/latest?cb=20190522155910"
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
    console.log(key)
}