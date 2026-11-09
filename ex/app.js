let homepage = "https://isaacio33.github.io/auto-start-page";
let searchURL = "https://google.com/search?udm=14&q=";
let version = "1.0.1.9";
let updateAddress = true;
let lastClosedTab = "unset";
let browsingHistory = "";
let incognito = false;
let showBottomTitle = false;
let useragent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.8127.18 AutoBrowser/${version} Safari/537.36`;
let whatsnew = `

 -- Now Tabs that have no Titles are labeled with an ID. (IsaacIo33)
 -- Slightly resized favicons. (IsaacIo33)
 -- Made Sidebar Pages have a gradient background. (IsaacIo33)
 -- Fixed a Speed Issue. (IsaacIo33)
 -- Now when you toggle reading mode the page doesn't reload. (IsaacIo33)
 -- Now some code is grouped into some other code instead of being seperate. (IsaacIo33)
 -- Now when a Mini Sidebar Browser has no favicon it's favicon becomes a globe. (IsaacIo33)
 -- Updated User Agent to Chrome/158.0.8127.18 for Webviews. (IsaacIo33)
 -- Added a new User Agent feature to Developer Tools. (IsaacIo33)
 -- Updated the User Agent for Mini Sidebar Browsers. (IsaacIo33)
 -- Reordered Color selectors in Settings. (IsaacIo33)
 -- Orginazed Settings into Sections. (IsaacIo33)
 -- Cleaned up Code. (IsaacIo33)
 -- Redesigned Browsing history urls. (IsaacIo33)
 -- Made Mini Sidebar Browser webviews have 2px less in height. (IsaacIo33)
 `;

let credits = `

<h1>Credits</h1>

<ul>
<li>IsaacIo33 - Creator/Maintainer - https://github.com/IsaacIo33/</li>
<li>vikenaitProductions - Maintainer - https://github.com/vikenaitProductions/</li>
</ul>

`;

// This function is executed on startup:

function startup(){
let newContainerEl = document.createElement("div");
newContainerEl.innerHTML=`


<div id="sidebar">
<h1 onclick="document.querySelector('.activeWebview').reload()" id="reloadBtn"><i class="fa-solid fa-rotate-right"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').loadURL(homepage)" class="hidden" id="homeBtn"><i class="fa-regular fa-house"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').goBack()" id="goBack"><i class="fa-solid fa-angle-left"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').goForward()" id="goForward"><i class="fa-solid fa-angle-right"></i></h1>
<h1 onclick="toggleSettings();"><i class="fa-solid fa-gear"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').print()" id="printOpenBtn" class="hidden"><i class="fa-solid fa-print"></i></h1>
<h1 onclick="readingMode()" id="readOpenBtn"><i class="fa-solid fa-book-open"></i></h1>
<h1 onclick="toggleDevTools()" id="devToolsOpenBtn"><i class="fa-solid fa-code"></i></h1>
<h1 onclick="toggleHistory()" id="historyOpenBtn"><i class="fa-solid fa-clock-rotate-left"></i></h1>
<h1 onclick="newSidebarPage(document.querySelector('.activeWebview').getURL())"><i class="fa-regular fa-square-plus"></i></h1>
</div>


<div class="sidebarApp hidden" id="settings">

<h1>Settings</h1>
<fieldset>
<legend><p>Theme Color:</p></legend>

<div style="display:flex; align-items:center; justify-content:space-around;">
<div class="selectOption" style="background-color:lightgray;" onclick="document.documentElement.style.setProperty('--theme', 'lightgray');"></div>
<div class="selectOption" style="background-color:red;" onclick="document.documentElement.style.setProperty('--theme', 'red');"></div>
<div class="selectOption" style="background-color:gold;" onclick="document.documentElement.style.setProperty('--theme', 'gold');"></div>
<div class="selectOption" style="background-color:#fec04b;" onclick="document.documentElement.style.setProperty('--theme', '#fec04b');"></div>
<div class="selectOption" style="background-color:#FCF092;" onclick="document.documentElement.style.setProperty('--theme', '#FCF092');"></div>
<div class="selectOption" style="background-color:green;" onclick="document.documentElement.style.setProperty('--theme', 'green');"></div>
<div class="selectOption" style="background-color:#33FF7A;" onclick="document.documentElement.style.setProperty('--theme', '#33FF7A');"></div>
<div class="selectOption" style="background-color:cyan;" onclick="document.documentElement.style.setProperty('--theme', 'cyan');"></div>
<div class="selectOption" style="background-color:lightblue;" onclick="document.documentElement.style.setProperty('--theme', 'lightblue');"></div>
<div class="selectOption" style="background-color:blue;" onclick="document.documentElement.style.setProperty('--theme', 'blue');"></div>
<div class="selectOption" style="background-color:purple;" onclick="document.documentElement.style.setProperty('--theme', 'purple');"></div>
<div class="selectOption" style="background-color:teal;" onclick="document.documentElement.style.setProperty('--theme', 'teal');"></div>
<div class="selectOption" style="background-color:pink;" onclick="document.documentElement.style.setProperty('--theme', 'pink');"></div>
<div class="selectOption" style="background-color:#FFA18F;" onclick="document.documentElement.style.setProperty('--theme', '#FFA18F');"></div>
<div class="selectOption" style="background-color:#8D1FCC;" onclick="document.documentElement.style.setProperty('--theme', '#8D1FCC');"></div>
</div>
<br>
<span>Custom Color: </span><input onchange="document.documentElement.style.setProperty('--theme', this.value);" type="color">

</fieldset>

<fieldset>

<legend><p>Homepage: (Include https://)</p></legend>
<input onchange="homepage = this.value" type="text" value="${homepage}">

</fieldset>



<fieldset>
<legend><p>Search Engine:</p></legend>
<select onchange="searchURL = this.value">
<option value="https://google.com/search?udm=14&q=">Google No-AI</option>
<option value="https://google.com/search?q=">Google</option>
<option value="https://bing.com/search?q=">Bing</option>
<option value="https://search.yahoo.com/search?p=">Yahoo!</option>
<option value="https://www.mojeek.com/search?q=">Mojeek</option>
<option value="https://start.duckduckgo.com/?q=">DuckDuckGo</option>
<option value="https://noai.duckduckgo.com/?ia=web&origin=funnel_home_website&t=h_&q=">DuckDuckGo No-AI</option>
</select>

<p>Custom Search Engine: (Include https://)</p>
<input onchange="searchURL = this.value" type="text" placeholder="Enter Search URL with query at end" style="width:80%;" id="customSearchEngineInput">



</fieldset>


<fieldset>
<legend><p>Data Reset</p></legend>
<button onclick="localStorage.removeItem('data'); localStorage.removeItem('sidebarPages'); localStorage.removeItem('tabs'); window.location.reload()">Reset ALL Data to default</button><br>
<button onclick="localStorage.removeItem('data'); window.location.reload()">Reset Most Data to default</button><br>
<button onclick="localStorage.removeItem('sidebarPages'); window.location.reload()">Reset Mini Sidebar Browser Data to default</button><br>
<button onclick="localStorage.removeItem('tabs'); window.location.reload()">Reset Tab Data to default</button>

</fieldset>

<!--
<p>Mini Sidebar Browser (formerly Sidebar Pages): (Include https://)</p>
<input onchange="newSidebarPage(this.value)" placeholder="Enter URL"><br><br>
<button onclick="newSidebarPage(document.querySelector('.activeWebview').getURL())">Add current Website</button>
-->

<br>

<fieldset>
<legend><p>Tabs and Sidebar:</p></legend>
<button onclick="if (lastClosedTab !== 'unset'){ newTab(lastClosedTab); }">Restore last closed tab</button><br>
<button onclick="document.getElementById('homeBtn').classList.toggle('hidden')">Toggle Home Button</button><br>
<button onclick="showBottomTitle = !showBottomTitle">Toggle Title Previews</button><br>
<hr>
<button onclick="document.getElementById('historyOpenBtn').classList.toggle('hidden')">Toggle History Button</button><br>
<button onclick="document.getElementById('readOpenBtn').classList.toggle('hidden')">Toggle Reading Mode Button</button><br>
<button onclick="document.getElementById('printOpenBtn').classList.toggle('hidden')">Toggle Print Button</button><br>
<button onclick="document.getElementById('devToolsOpenBtn').classList.toggle('hidden')">Toggle Developer Tools Button</button><br>
<hr>
<button onclick="document.querySelector('.activeWebview').print()">Print current Page</button><br>
<button onclick="document.querySelector('.active button').outerHTML=''">Change current Tab to be Protected</button><br>
<button onclick="closeAllTabs()">Close all Tabs</button>

</fieldset>

<fieldset>
<legend><p>Website Customize Settings:</p></legend>

<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.8078.74 Mobile Safari/537.36'); document.querySelector('.activeWebview').reload()">Mobile Mode</button>
<button onclick="document.querySelector('.activeWebview').executeJavaScript('document.body.style.filter=\`grayscale(1)\`;')">Grayscale</button>

</fieldset>

<fieldset>

<legend><p>About:</p></legend>
<div style="display:flex; align-items:center: text-align:center; justify-content:space-around;">
<img src="images/icon.png" alt="A" height="50">
<p>AutoBrowser ${version}</p>
</div>
<button onclick="newTab('http://ioposts.farleyengineeredsolutions.com/auto/releases.html')">Releases</button>
<button onclick="newTab('http://ioposts.farleyengineeredsolutions.com/auto/')">Website</button>
<button onclick="notify(whatsnew, 3000, '700px')">Whats New</button>
<button onclick="notify(credits, 5000, '400px')">Credits</button>
<button onclick="newTab('https://github.com/IsaacIo33/AutoBrowser/wiki')">Wiki</button>
<button onclick="newTab('https://github.com/IsaacIo33/AutoBrowser/')">Repo</button>

</fieldset>

<br><br>

</div>


<div class="sidebarApp hidden" id="devTools">
<h1>Developer Tools</h1>
<button onclick="document.querySelector('.activeWebview').openDevTools()">Standard Chrome Developer tools</button><br>
<button onclick="newTab('view-source:'+document.querySelector('.activeWebview').getURL())">View Page Source Code</button>
<p>Multi-line JavaScript runner: (Runs on active webview)</p>
<textarea onchange="document.querySelector('.activeWebview').executeJavaScript(this.value)" placeholder="Enter JavaScript code..." style="height:200px; width:300px; background-color:black; color:white;"></textarea>
<hr>
<br>
<button onclick="document.querySelector('.activeWebview').reloadIgnoringCache()">Reload ignoring Cache</button><br><br>
<p>Multi-line CSS inserter: (Runs on active webview)</p>
<textarea onchange="document.querySelector('.activeWebview').executeJavaScript('let newStyle = document.createElement(\`style\`); newStyle.textContent=\`'+this.value+'\`; document.body.appendChild(newStyle);')" placeholder="Enter CSS code..." style="height:200px; width:300px; background-color:black; color:white;"></textarea>
<hr>
<br>
<button onclick="document.querySelector('.activeWebview').setUserAgent(useragent); document.querySelector('.activeWebview').reload()">Set User Agent to Default</button><br><br>
<button onclick="document.querySelector('.activeWebview').setUserAgent(navigator.userAgent); document.querySelector('.activeWebview').reload()">Set User Agent to Rendering Engine version</button><br><br>
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:159.0) Gecko/20100101 Firefox/159.0'); document.querySelector('.activeWebview').reload()">Set User Agent to Firefox</button><br><br>
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko'); document.querySelector('.activeWebview').reload()">Set User Agent to IE</button><br><br>
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.7.5) Gecko/20070321 Netscape/8.1.3'); document.querySelector('.activeWebview').reload()">Set User Agent to Netscape</button>
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/4.79 (Win98; I)'); document.querySelector('.activeWebview').reload(); notify('Please note: This User Agent is of a Very old version of Netscape most websites will not work', 1000)">Set User Agent to Netscape 4.79</button>
<br>
<p>Custom User Agent:</p>
<textarea onchange="document.querySelector('.activeWebview').setUserAgent(this.value); document.querySelector('.activeWebview').reload()" placeholder="Enter User Agent"></textarea>
</div>

<div class="sidebarApp hidden" id="history">
<h1>History</h1>
<input type="checkbox" onchange="incognito = this.checked; notify('Incognito Status updated: '+incognito, 500)"><span>Incognito</span><br>
<button onclick="browsingHistory = ''">Clear History</button>
<p id="historyText"></p>
</div>


<div style="display:flex; align-items:center; justify-content:center;">
<img src="https://ioposts.farleyengineeredsolutions.com/drive/files/ioTest/2026_11_07_0qz_Kleki.png" style="background-color:rgba(255, 254, 254, 0.624);" alt="Menu" height="50" width="40" draggable="false" onclick="document.querySelector('#sidebar').classList.toggle('sidebarHidden'); if (document.querySelector('#sidebar').classList.contains('sidebarHidden')){ document.documentElement.style.setProperty('--sidebarWidth', '0px'); } else { document.documentElement.style.setProperty('--sidebarWidth', '40px'); }">
<div id="tabbar">
<div id="tabContainer">
<div class="tab" style="font-size:1.4rem; width:40px; height:35px; margin-top:15px; margin-left:5px;" onclick="newTab(homepage)"><p>+</p></div>
</div>
<!-- <div style="width:24%;" id="extraTabMargin"></div> -->
<input class="tab" id="bar" placeholder="Search the Web or Enter URL">
</div>
</div>
`;
newContainerEl.id = "root_container";
newContainerEl.style.height="100vh";
document.body.appendChild(newContainerEl);
// newSidebarPage("https://wikipedia.org/");




if (!localStorage.getItem("data")){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
} else {
    let cookie = localStorage.getItem("data");
    let sCookie = cookie.split("%%%");
    document.documentElement.style.setProperty('--theme', sCookie[0]);
    homepage = sCookie[1];
    searchURL = sCookie[2];
    lastClosedTab = sCookie[3];
    browsingHistory = sCookie[4];
    incognito = eval(sCookie[5]);
    showBottomTitle = eval(sCookie[6]);
    document.querySelector("select").value = sCookie[2];
    if (document.querySelector("select").value == ''){
    document.querySelector("#customSearchEngineInput").value = sCookie[2];
    }
}

document.querySelector("input[type=checkbox]").checked = incognito;

if (!localStorage.getItem("sidebarPages")){
    localStorage.setItem("sidebarPages", "");
} else {
    let urls = localStorage.getItem("sidebarPages").split("%%%");
    for (let i = 0; i < urls.length; i++) {
        let element = urls[i];
        newSidebarPage(element);
    }
}

if (!localStorage.getItem("tabs")){
    localStorage.setItem("tabs", "");
} else {
    let urls = localStorage.getItem("tabs").split("%%%");
    for (let i = 0; i < urls.length; i++) {
        let element = urls[i];
        setTimeout(() => {
        newTab(element);
        }, 500);
    }

}

}

startup();



let tabbarEl = document.getElementById("tabbar");

let newContainerEl = document.getElementById("root_container");
let addressBarEl = document.getElementById("bar");

// To "click off" of every tab: (Really to make all tabs unselected)

function deselectTabs(){
    let allTabs = document.querySelectorAll(".tab");
    for (let i = 0; i < allTabs.length; i++) {
        let element = allTabs[i];
        element.classList.remove("active");
    }
    let allWebviews = document.querySelectorAll(".webview");
    for (let i = 0; i < allWebviews.length; i++) {
        let element = allWebviews[i];
        element.classList.remove("activeWebview");
        element.style.display="none";
    }
}

// newTab function:

function newTab(url){
    deselectTabs();
    let newTabEl = document.createElement("div");
    newTabEl.innerHTML=`<span>Tab ${document.querySelectorAll(".tab").length - 2}</span>`;
    newTabEl.classList.add("tab");
    newTabEl.classList.add("active");
    document.getElementById("tabContainer").prepend(newTabEl);
    let newWebview = document.createElement("webview");
    newWebview.src = url;
    newWebview.setAttribute("allowpopups", "true");
    newWebview.classList.add("webview");
    newWebview.classList.add("activeWebview");
    newWebview.setAttribute("useragent", useragent);
    newContainerEl.appendChild(newWebview);
    newTabEl.addEventListener("click", () => {
    deselectTabs();
    newWebview.classList.add("activeWebview");
    newWebview.style.display='flex';
    newTabEl.classList.add("active");
    });
    let newCloseBtn = document.createElement("button");
    newCloseBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    newTabEl.appendChild(newCloseBtn);

    newWebview.addEventListener("update-target-url", (event) => {
        if (event.url){
            updateAddress = false;
            addressBarEl.value = event.url;
            addressBarEl.style.border="1px solid black";
        } else {
            updateAddress = true;
            addressBarEl.style.border="none";
        }
    });

    newWebview.addEventListener("will-navigate", (event) => {
        let url = event.url;
          if (!incognito){
             browsingHistory += "<br><br><p>"+url+"</p>";
        }
    });

    newWebview.addEventListener("page-favicon-updated", (event) => {
        newTabEl.style.backgroundImage=`url(${event.favicons[0]})`;
    });



    newWebview.addEventListener("page-title-updated", (event) => {
        newTabEl.querySelector("span").innerHTML=event.title.replaceAll(" ", "&nbsp;");
    });

    newWebview.addEventListener("dom-ready", () => {
        newWebview.executeJavaScript(`
        document.addEventListener("click", (event) => {
            if (event.target.tagName.toLowerCase() == "img" && event.ctrlKey){
                event.preventDefault();
                window.open(event.target.src, "_blank");
            }
        });
            `);
    });

    newCloseBtn.addEventListener("mousedown", () => {
        deselectTabs();
        lastClosedTab = newWebview.getURL();
    newWebview.outerHTML="";
    newTabEl.outerHTML="";
    document.querySelector(".tab").click();
    });

    newTabEl.addEventListener("mouseover", () => {
        if (showBottomTitle){
        notify(newWebview.getTitle(), 500, 30+"px", window.innerHeight - 30 + "px");
        }
    });

    newTabEl.addEventListener("auxclick", (event) => {
        if (event.button === 1){
          deselectTabs();
        lastClosedTab = newWebview.getURL();
    newWebview.outerHTML="";
    newTabEl.outerHTML="";
    document.querySelector(".tab").click();
        }
    });



}



// Update and often functions:

function update(){
    if (document.querySelector('.activeWebview')){


    // document.querySelector(".active span").innerHTML = document.querySelector(".activeWebview").getTitle().replaceAll(" ", "&nbsp;");
    // document.title = `${document.querySelector(".activeWebview").getTitle()} - AutoBrowser`;

    if (document.activeElement !== addressBarEl && updateAddress){
        if (document.querySelector(".activeWebview").getURL() !== "https://isaacio33.github.io/auto-start-page/"){
             addressBarEl.value = document.querySelector(".activeWebview").getURL();
        }  else {
            addressBarEl.value = "";
        }
    }

    

    if (document.querySelector('.activeWebview').canGoBack()){
        document.getElementById("goBack").style.display="flex";
    } else {
        document.getElementById("goBack").style.display="none";
    }
    if (document.querySelector('.activeWebview').canGoForward()){
        document.getElementById("goForward").style.display="flex";
    } else {
        document.getElementById("goForward").style.display="none";
    }

    if (document.querySelector(".activeWebview").isLoading()){ // <i class="fa-solid fa-rotate-right"></i>
        document.querySelector("#reloadBtn").innerHTML=`<i class="fa-solid fa-hourglass fa-beat-fade"></i>`;
        // document.querySelector(".active").style.borderTop="4px solid lightgray";
    } else if (document.querySelector("#reloadBtn").innerHTML !== `<i class="fa-solid fa-rotate-right"></i>`) {
        // document.querySelector(".active").style.borderTop="none";
        document.querySelector("#reloadBtn").innerHTML=`<i class="fa-solid fa-rotate-right"></i>`;
    }

    }
    document.getElementById("historyText").innerHTML = browsingHistory;
    // document.getElementById("tabContainer").style.width = `${50 + document.querySelectorAll('.tab').length * 6}%`;

    // localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}`);
    
}

setInterval(update, 200);



function often(){
    let cookie = localStorage.getItem("data");
    let sCookie = cookie.split("%%%");
    if (window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim() !== sCookie[0]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (homepage !== sCookie[1]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (searchURL !== sCookie[2]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (lastClosedTab !== sCookie[3]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (browsingHistory !== sCookie[4]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (incognito !== sCookie[5]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    } else if (showBottomTitle !== sCookie[6]){
    localStorage.setItem("data", `${window.getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()}%%%${homepage}%%%${searchURL}%%%${lastClosedTab}%%%${browsingHistory}%%%${incognito}%%%${showBottomTitle}`);
    }

        
   if (localStorage.getItem("sidebarPages") || localStorage.getItem("sidebarPages") == ""){
    let urls = [];

    let allSidebarWebviews = document.querySelectorAll(".miniSidebarBrowserWebviewContainer");

    for (let i = 0; i < allSidebarWebviews.length; i++) {
        let element = allSidebarWebviews[i].querySelector("webview");
        urls.push(element.getURL());
    }


    if (localStorage.getItem("sidebarPages") !== urls.join("%%%")){
    localStorage.setItem("sidebarPages", urls.join("%%%"));
    }

   }

   if (localStorage.getItem("tabs") || localStorage.getItem("tabs") == ""){
    let urls = [];

    let allWebviews = document.querySelectorAll(".webview");

    for (let i = 0; i < allWebviews.length; i++) {
        let element = allWebviews[i];
        urls.push(element.getURL());
    }


    if (localStorage.getItem("tabs") !== urls.join("%%%")){
    localStorage.setItem("tabs", urls.join("%%%"));
    }

   }
}

setInterval(often, 1200);



// End of Update and Often functions



setTimeout(() => {
    if (!localStorage.getItem("tabs")){
    newTab(homepage);
    }
}, 100);



// Address bar event listener:

addressBarEl.addEventListener("keydown", (event) => {
if (event.key.toLowerCase() == "enter"){
    if (!addressBarEl.value.startsWith("file:") && addressBarEl.value.includes(" ") || !addressBarEl.value.split(".")[1] || addressBarEl.value.split(".")[1] == ''){
    document.querySelector(".activeWebview").loadURL(searchURL+addressBarEl.value);
    document.querySelector(".activeWebview").focus();
    } else if (addressBarEl.value.startsWith("file:")){
    document.querySelector(".activeWebview").loadURL(addressBarEl.value);
    document.querySelector(".activeWebview").focus();
    } else if (!addressBarEl.value.startsWith("http")){
    document.querySelector(".activeWebview").loadURL("http://"+addressBarEl.value);
    document.querySelector(".activeWebview").focus();
    } else {
    document.querySelector(".activeWebview").loadURL(addressBarEl.value);
    document.querySelector(".activeWebview").focus();
    }
    if (!incognito){
        browsingHistory += "<br><br><p>"+addressBarEl.value+"</p>";
    }
}
});

// To close other Sidebar Pages:

function clearSidebars(element) {
  for (let i = 0; i < document.querySelectorAll(".sidebarApp").length; i++) {
    if (element !== document.querySelectorAll(".sidebarApp")[i]){
    document.querySelectorAll(".sidebarApp")[i].classList.add("hidden");
    }
  }
}


// Toggle functions:

function toggleSettings(){
    clearSidebars(document.querySelector("#settings"));
    document.querySelector("#settings").classList.toggle("hidden");
}

function toggleDevTools(){
    clearSidebars(document.querySelector("#devTools"));
    document.querySelector("#devTools").classList.toggle("hidden");
}
function toggleHistory(){
    clearSidebars(document.querySelector("#history"));
    document.querySelector("#history").classList.toggle("hidden");
}

// The function to create a new Mini Sidebar Browser:

function newSidebarPage(url){
    let newSidebarPageEl = document.createElement("h1");
    url = url.replaceAll("www.", "");
    let simpleURL = url.toUpperCase().split('/')[2].split('')[0];
    newSidebarPageEl.innerHTML=`<img src="https://cdn.pixabay.com/photo/2013/04/01/08/26/browser-98386_1280.png" alt="" height="20">`;
    let newWebviewEl = document.createElement("div");
    newWebviewEl.classList.add("sidebarApp");
    newWebviewEl.classList.add("miniSidebarBrowserWebviewContainer");
    newWebviewEl.classList.add("hidden");
    newWebviewEl.style.overflow="hidden";
    newWebviewEl.innerHTML=`
    <button onclick="this.parentElement.querySelector('webview').reload()" style="width:5%;"><i class="fa-solid fa-rotate-right"></i></button>
    <button onclick="this.parentElement.querySelector('webview').goBack()" style="width:5%;"><i class="fa-solid fa-chevron-left"></i></button>
    <button onclick="this.parentElement.querySelector('webview').goForward()" style="width:5%;"><i class="fa-solid fa-chevron-right"></i></button>
    <input placeholder="Enter URL..." style="width:70%; height:15px;">
    <button onclick="newTab(this.parentElement.querySelector('webview').getURL()); this.parentElement.classList.add('hidden')" style="width:5%;"><i class="fa-solid fa-file-export"></i></button>
    <webview src="${url}" style="height:calc(100% - 17px); width:100%; display:flex;" useragent="${useragent}"></webview>`;
    newSidebarPageEl.addEventListener("click", () => {
        clearSidebars(newWebviewEl);
        newWebviewEl.classList.toggle("hidden");
    });
    newWebviewEl.querySelector("webview").addEventListener("page-favicon-updated", (event) => {
        newSidebarPageEl.innerHTML=`<img src="${event.favicons[0]}" alt="" onerror="this.src='https://cdn.pixabay.com/photo/2013/04/01/08/26/browser-98386_1280.png'" height="20">`;
    });
    newWebviewEl.querySelector("webview").addEventListener("did-navigate", (event) => {
        if (newWebviewEl.querySelector("input") !== document.activeElement){
        newWebviewEl.querySelector("input").value = event.url;
        }
    });
    newWebviewEl.querySelector("input").addEventListener("keydown", (event) => {
        if (event.key == "Enter"){
            newWebviewEl.querySelector("webview").loadURL(newWebviewEl.querySelector("input").value);
        }
    });
    newSidebarPageEl.addEventListener("contextmenu", () => {
        newSidebarPageEl.outerHTML = '';
        newWebviewEl.outerHTML = '';
    });
    document.getElementById("sidebar").appendChild(newSidebarPageEl);
    document.getElementById("root_container").prepend(newWebviewEl);
}


// Reading mode function:

function readingMode(){
    document.querySelector(".activeWebview").executeJavaScript(`document.reading`).then(result => {
        if (result){
        document.querySelector(".activeWebview").executeJavaScript(`
            endReadingModeZZ();
        `);
        } else {
    document.querySelector(".activeWebview").executeJavaScript(`
        function startReadingModeZZ(){
        document.reading = true;
        let newReadingMode = document.createElement("iframe");
        newReadingMode.id = "readingModeIframe";
        newReadingMode.srcdoc = "<br><pre style='font-family:sans-serif;'><h1>"+document.title+"</h1>"+document.body.innerText+"</pre>";
        newReadingMode.style.position="fixed";
        newReadingMode.setAttribute("frameborder", "0");
        newReadingMode.style.left="0";
        newReadingMode.style.top="0";
        newReadingMode.style.height="100vh";
        newReadingMode.style.width="100%";
        newReadingMode.style.backgroundColor="white";
        newReadingMode.style.zIndex="9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
        document.body.prepend(newReadingMode);
        newReadingMode.focus();
        }


        function endReadingModeZZ(){
        document.getElementById("readingModeIframe").outerHTML='';   
        document.reading = false;
        }

        startReadingModeZZ();
        `);
    }
    }).catch(err => console.error(err));
}

// Notify function for "whats new popup" etc.

function notify(content, end, height, margintop){
    let newPopup = document.createElement("div");
    newPopup.style.position="fixed";
    newPopup.style.width="100%";
    if (!height){ 
    newPopup.style.height="50px";
    } else {
    newPopup.style.height=height;
    }
    if (margintop){
    newPopup.style.marginTop=margintop;
    }
    newPopup.style.backgroundColor="black";
    newPopup.style.color="white";
    newPopup.style.display="flex";
    newPopup.style.alignItems="center";
    newPopup.style.justifyContent="center";
    newPopup.style.zIndex="10000000000000000000000";
    newPopup.innerHTML=`<pre style="font-family:'Saira', system-ui, -apple-system, sans-serif;">${content}</pre>`;
    document.body.prepend(newPopup);
    setTimeout(() => {
        newPopup.outerHTML='';
    }, end);
}






// Function to close all Tabs

function closeAllTabs(){
    let tabs = document.querySelectorAll('.tab');
    for (let i = 0; i < tabs.length; i++) {
        let element = tabs[i];
        if (element !== document.querySelectorAll('.tab')[document.querySelectorAll('.tab').length - 1] && element !== document.querySelectorAll('.tab')[document.querySelectorAll('.tab').length - 2]){
        element.outerHTML='';
        }
    }
    let webviews = document.querySelectorAll('.webview');
    for (let i = 0; i < webviews.length; i++) {
        let element = webviews[i];
        element.outerHTML='';
    }
}


// Handle links that open in a new Window to make them open in a new tab instead:

window.electronAPI.onOpenNewTab((url) => {
  if (!incognito){
  browsingHistory += "<br><br><p>"+url+"</p>";
  }
  newTab(url);
});


