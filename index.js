var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        //Desired action
        document.getElementById('navbar').style.height="55px"
    }else{
        scrollBefore = scrolled;
        //Desired action
        document.getElementById('navbar').style.height="0px"
    }

})
function dateconverter(date){
    date = date.split(' ')//['date','time']
    const date1 = new Date(date[1]+date[2]+date[3]);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))-1;
    if(diffDays==0){
        return `Today`
    }
    else if(diffDays==1){
        return `${diffDays} day ago`
    }
    else{
        return `${diffDays} days ago`
    }
}
//api: https://gnews.io/api/v4/search?q=india&token=c6552a8e5a6575a8064cb9962114c4c5
window.addEventListener('load',()=>{
    document.getElementById("news-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`
    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/?q=india')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("news-container").innerHTML=''
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a href=${data.articles[i].link} class="wrapper"><div class="news" style="background: linear-gradient( transparent 20%, rgb(56, 55, 55) 100%),url('${data.articles[i]['image']}')">
            <div class="text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${dateconverter(data.articles[i]['publishedAt'])}
                </p>
                <h3>
                ${data.articles[i]['title']}
                </h3>
            </div>
         </div></a>`
        }
    })
    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/?q=news')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a href=${data.articles[i].link} class="wrapper"><div class="news" style="background: linear-gradient( transparent 20%, rgb(56, 55, 55) 100%),url('${data.articles[i]['image']}')">
            <div class="text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${dateconverter(data.articles[i]['publishedAt'])}
                </p>
                <h3>
                ${data.articles[i]['title']}
                </h3>
            </div>
         </div></a>`
        }
    })
})
//api:https://gnews.io/api/v4/search?q="${topic}"%20in%20india&token=c6552a8e5a6575a8064cb9962114c4c5
function gettopicnews(e){
    var topic = e.innerHTML.toLowerCase();
    document.getElementById("news-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`
    fetch(`https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/?q=${topic}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("news-container").innerHTML='';
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a href=${data.articles[i].link} class="wrapper"><div class="news" style="background: linear-gradient( transparent 20%, rgb(56, 55, 55) 100%),url('${data.articles[i]['image']}')">
            <div class="text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${dateconverter(data.articles[i]['publishedAt'])}
                </p>
                <h3>
                ${data.articles[i]['title']}
                </h3>
            </div>
         </div></a>`
         var classes = document.querySelectorAll('.items');
         [].forEach.call(classes, function(el) {
         el.classList.remove("active-pill");
         });
        e.classList.add("active-pill")
        }
    })
}
//api:https://gnews.io/api/v4/search?q="${topic}"%20in%20india&token=c6552a8e5a6575a8064cb9962114c4c5
function searchtopic(e){
    var topic = document.getElementById('topicsearch').value.toLowerCase();
    document.getElementById("news-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`
    document.getElementById('topicsearch').value=''
    fetch(`https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/search/?q=${topic}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("news-container").innerHTML='';
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a class="wrapperlink" href="${data.articles[i].source.link}"><div class="search-news">
            <div class="thumb-image" style="background:url('${data.articles[i].image}')"></div>
            <div class="search-text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${data.articles[i]['publishedAt']}
                </p>
                <h4>
                ${data.articles[i]['title']}
                </h4>
            </div>
         </div></a>`
        }
    })
    e.preventDefault();
}
function loadallnews(e){
    document.getElementById("news-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`
    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/?q=india')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("news-container").innerHTML= '';
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a href=${data.articles[i].link} class="wrapper"><div class="news" style="background: linear-gradient( transparent 20%, rgb(56, 55, 55) 100%),url('${data.articles[i]['image']}')">
            <div class="text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${dateconverter(data.articles[i]['publishedAt'])}
                </p>
                <h3>
                ${data.articles[i]['title']}
                </h3>
            </div>
         </div></a>`
        }
    })
    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/?q=news')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        for(var i=0; i<data.totalArticles; i++){
            document.getElementById("news-container").innerHTML+=`<a href=${data.articles[i].link} class="wrapper"><div class="news" style="background: linear-gradient( transparent 20%, rgb(56, 55, 55) 100%),url('${data.articles[i]['image']}')">
            <div class="text">
                <p class="meta-text">
                    ${data.articles[i]['source']['name']} · ${dateconverter(data.articles[i]['publishedAt'])}
                </p>
                <h3>
                ${data.articles[i]['title']}
                </h3>
            </div>
         </div></a>`
        }
        var classes = document.querySelectorAll('.items');
         [].forEach.call(classes, function(el) {
         el.classList.remove("active-pill");
         });
        document.getElementById("all-btn").classList.add("active-pill")
    })
    var classes = document.querySelectorAll('.nav-icons');
    [].forEach.call(classes, function(el) {
    el.classList.remove("active");
    });
    document.getElementById('home-icon').classList.add("active")
    var containers = document.querySelectorAll('.all-container');
    [].forEach.call(containers, function(el) {
    el.style.display="none";
    });
    document.getElementById('all-news-container').style.display="block"
}
var loadweather = (e)=>{
    var lat;
    var lon;
    var location = document.getElementById('location')
    var temp = document.getElementById('temparature');
    var des = document.getElementById('description');
    var icon = document.getElementById('icon');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(data=>{
            lat = data.coords.latitude
            lon = data.coords.longitude
            var api = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=c48ee98d738b3e599eaa4612efce566f`
            fetch(api)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                document.getElementById("all-weather-container").innerHTML=`<div class="main-weather" style="background:url('./weather-images/${data['list'][0]['weather'][0]['icon']}.gif')">
                <div class="data-place mx-auto"><div><p class="location">${data.list[0].name}</p>
                 <p class="temparature"><span class="tempnum">${(data['list'][0]['main']['temp']-273).toFixed(1)}</span><span class="unit">°C</span><br><div class="feels">
                         Feels like ${(data['list'][0]['main']['feels_like']-273).toFixed(1)}°C</div></p></div><div class="message">${data['list'][0]['weather'][0]['description']}</div></div>  
                <div class="w-info mx-auto"> <div class="w-info-slot"><p class="info">${data['list'][0]['main']['humidity']}%</p><span class="meta-text">Humidity</span>
                    </div><div class="w-info-slot"><p class="info">${data['list'][0]['wind']['speed']} KM</p><span class="meta-text">Velocity</span>
                 </div><div class="w-info-slot"><p class="info">${data['list'][0]['main']['pressure']}</p><span class="meta-text">Pressure</span>
                 </div></div>
             </div>`
            })
        })
    }
    else{
        let query = ((window.location.href).split('?'))[1]
        query = query.split('&');
        for(let i = 0;i<2;i++){
            query[i] = (query.split("="))[1]
        }
        lat = query[0]
        lon = query[1]
        var api = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=c48ee98d738b3e599eaa4612efce566f`
            fetch(api)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                document.getElementById("all-weather-container").innerHTML=`<div class="main-weather" style="background:url('./weather-images/${data['list'][0]['weather'][0]['icon']}.gif')">
                <div class="data-place mx-auto"><div><p class="location">${data.list[0].name}</p>
                 <p class="temparature"><span class="tempnum">${(data['list'][0]['main']['temp']-273).toFixed(1)}</span><span class="unit">°C</span><br><div class="feels">
                         Feels like ${(data['list'][0]['main']['feels_like']-273).toFixed(1)}°C</div></p></div><div class="message">${data['list'][0]['weather'][0]['description']}</div></div>  
                <div class="w-info mx-auto"> <div class="w-info-slot"><p class="info">${data['list'][0]['main']['humidity']}%</p><span class="meta-text">Humidity</span>
                    </div><div class="w-info-slot"><p class="info">${data['list'][0]['wind']['speed']} KM</p><span class="meta-text">Velocity</span>
                 </div><div class="w-info-slot"><p class="info">${data['list'][0]['main']['pressure']}</p><span class="meta-text">Pressure</span>
                 </div></div>
             </div>`
            })
        
    }
    var classes = document.querySelectorAll('.nav-icons');
    [].forEach.call(classes, function(el) {
    el.classList.remove("active");
    });
    e.classList.add("active")
    var containers = document.querySelectorAll('.all-container');
    [].forEach.call(containers, function(el) {
    el.style.display="none";
    });
    document.getElementById('all-weather-container').style.display="block"

}
var loadwallpapers = (e)=>{
            var array = ["A rose by any other name would smell as sweet.", "All that glitters is not gold.", "All the world’s a stage, and all the men and women merely players.", "Ask not what your country can do for you; ask what you can do for your country.", "Ask, and it shall be given you; seek, and you shall find.", "Eighty percent of success is showing up.", "Elementary, my dear Watson.", "For those to whom much is given, much is required.", "Frankly, my dear, I don't give a damn.", "Genius is one percent inspiration and ninety-nine percent perspiration.", "Go ahead, make my day.", "He travels the fastest who travels alone.", "Hell has no fury like a woman scorned.", "Hell is other people.", "Here's looking at you, kid.", "Houston, we have a problem.", "I have a dream that my four little children will o…their skin but by the content of their character.", "I have always depended on the kindness of strangers.", "I love the smell of napalm in the morning.", "I think therefore I am.", "If at first you don’t succeed, try, try again.", "If you are going through hell, keep going.", "If you build it, they will come.", "If you want something done right, do it yourself.", "If you want something said, ask a man; if you want something done, ask a woman.", "I'll be back.", "I'm gonna make him an offer he can't refuse.", "I've got a feeling we're not in Kansas anymore.", "Keep your friends close, but your enemies closer.", "Knowledge is power.", "Life is like a box of chocolates. You never know what you’re gonna get.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "May the Force be with you.", "No one can make you feel inferior without your consent.", "Not all those who wander are lost.", "Nothing is certain except for death and taxes.", "Parting is such sweet sorrow", "Power corrupts; absolute power corrupts absolutely.", "Speak softly and carry a big stick", "That’s one small step for a man, a giant leap for mankind.", "The love of money is the root of all evil.", "The only thing we have to fear is fear itself.", "The truth will set you free.", "There's no place like home.", "Three can keep a secret, if two of them are dead.", "Tis better to have loved and lost than never to have loved at all.", "To be or not to be, that is the question.", "To err is human; to forgive, divine.", "To thine own self, be true.", "Two roads diverged in a wood, and I, I took the on…avelled by, and that has made all the difference.", "United we stand, divided we fall.", "What doesn't kill us makes us stronger.", "What we've got here is failure to communicate. Some men you just can't reach.", "Whatever you are, be a good one.", "You can fool all of the people some of the time, a…you can't fool all of the people all of the time.", "You must be the change you wish to see in the world.", "You talkin' to me?"]
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            var api = `https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/images/?n=15`
            fetch(api)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                document.getElementById("all-wallpaper-container").innerHTML=""
                for(let i = 0; i<15;i++){
                document.getElementById("all-wallpaper-container").innerHTML+=`<div class="wallpapers" style="background-image:url('${data.result[i].image}')">
                <div class="details"><br><h4 class="quotes">${array[i]}</h4><br><p class="meta-text" style="margin-bottom:14px">&#169; Unplash images</p>
                <a href="${data.result[i].download}" class="d-btn">Download</a>
                </div>
                </div>`
                }
            })

    var classes = document.querySelectorAll('.nav-icons');
    [].forEach.call(classes, function(el) {
    el.classList.remove("active");
    });
    e.classList.add("active")
    var containers = document.querySelectorAll('.all-container');
    [].forEach.call(containers, function(el) {
    el.style.display="none";
    });
    document.getElementById('all-wallpaper-container').style.display="block"

}
function loadalljobs(){
    document.getElementById("job-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`

    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/job?topic=West%20Bengal')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("job-container").innerHTML= '';
        for(var i=0; i<(data.result).length; i++){
            document.getElementById("job-container").innerHTML+=`<a href="${data.result[i].link}" class="wrapper"><div class="jobs">
            <div class="jobtext">
                <p class="meta-text">
                   ${data.result[i].recruiter}<br>${data.result[i].qualification}
                </p>
                <h3>
                ${data.result[i].post}
                </h3>
            </div>
         </div></a>`
        }
    })
    fetch('https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/job?topic=Other%20All%20India%20Exams')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        for(var i=0; i<(data.result).length; i++){
            document.getElementById("job-container").innerHTML+=`<a href="${data.result[i].link}" class="wrapper"><div class="jobs">
            <div class="jobtext">
                <p class="meta-text">
                   ${data.result[i].recruiter}<br>${data.result[i].qualification}
                </p>
                <h3>
                ${data.result[i].post}
                </h3>
            </div>
         </div></a>`
        }
        var classes = document.querySelectorAll('.job-item');
         [].forEach.call(classes, function(el) {
         el.classList.remove("job-pill");
         });
        document.getElementById("job-btn").classList.add("job-pill")
    })
    var classes = document.querySelectorAll('.nav-icons');
    [].forEach.call(classes, function(el) {
    el.classList.remove("active");
    });
    document.getElementById('job-icon').classList.add("active")
    var containers = document.querySelectorAll('.all-container');
    [].forEach.call(containers, function(el) {
    el.style.display="none";
    });
    document.getElementById('all-job-container').style.display="block"
}
function gettopicjob(e){
    var topic = e.innerHTML;
    document.getElementById("job-container").innerHTML=`<div class="spinner-container"><div class="spinner"></div> </div>`

    fetch(`https://arcane-cove-56746.herokuapp.com/api/newsapi/v1/job?topic=${topic}`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        document.getElementById("job-container").innerHTML='';
        for(var i=0; i<(data.result).length; i++){
            document.getElementById("job-container").innerHTML+=`<a href="${data.result[i].link}" class="wrapper"><div class="jobs">
            <div class="jobtext">
                <p class="meta-text">
                   ${data.result[i].recruiter}<br>${data.result[i].qualification}
                </p>
                <h3>
                ${data.result[i].post}
                </h3>
            </div>
         </div></a>`
         var classes = document.querySelectorAll('.job-item');
         [].forEach.call(classes, function(el) {
         el.classList.remove("job-pill");
         });
        e.classList.add("job-pill")
        }
    })
}
/*window.onhashchange = function() {
    var param = (window.location.hash).replace("#","")
    if(param==""){
        loadallnews()
        window.history.deleteAll()
    }
    else if(param=="all-wallpaper-container"){
        loadwallpapers()
    }
    else if(param=="all-weather-container"){
        loadweather()
    }
}
 */
