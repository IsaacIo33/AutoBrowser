let homepage = "https://google.com";
let searchURL = "https://google.com/search?udm=14&q=";
let tabbarEl = document.getElementById("tabbar");
let version = "1.0.0.5";
let updateAddress = true;
let lastClosedTab = "unset";
let history = "";
let incognito = false;
let showBottomTitle = true;
let whatsnew = `

 -- Added line breaks to the bottom of Settings. (IsaacIo33)
 -- Now you can type in file:// urls in the address bar. (IsaacIo33)
 -- Updated an Internal API. (IsaacIo33)
 -- Added a Whats new button. (IsaacIo33)
 -- Added a Loading line that appears when the active webview is loading. (IsaacIo33)
 -- Removed Border Radius from Buttons are in Sidebar pages and Mini Sidebar Browsers. (IsaacIo33)
 -- Fixed a bug that allows sidebar apps to stack. (vikenaitProductions)
 -- Fixed a bug where you couldn't toggle Sidebar pages. (IsaacIo33)
 -- Added a Add Current website as a Sidebar Mini Browser button to the Sidebar. (IsaacIo33)
 -- Moved the Favicon to the left of the Tabs instead of the bottom right corner. (IsaacIo33)
 -- Now when you hover a tab it shows the full Title on the bottom of the Screen. (IsaacIo33)

`;



function startup(){
let newContainerEl = document.createElement("div");
newContainerEl.innerHTML=`


<div id="sidebar">
<h1 onclick="document.querySelector('.activeWebview').reload()"><i class="fa-solid fa-rotate-right"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').loadURL(homepage)" class="hidden" id="homeBtn"><i class="fa-regular fa-house"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').goBack()" id="goBack"><i class="fa-solid fa-angle-left"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').goForward()" id="goForward"><i class="fa-solid fa-angle-right"></i></h1>
<h1 onclick="toggleSettings();"><i class="fa-solid fa-gear"></i></h1>
<h1 onclick="document.querySelector('.activeWebview').print()" id="printOpenBtn"><i class="fa-solid fa-print"></i></h1>
<h1 onclick="readingMode()" id="readOpenBtn"><i class="fa-solid fa-book-open"></i></h1>
<h1 onclick="toggleDevTools()" id="devToolsOpenBtn"><i class="fa-solid fa-code"></i></h1>
<h1 onclick="toggleHistory()" id="historyOpenBtn"><i class="fa-solid fa-clock-rotate-left"></i></h1>
<h1 onclick="newSidebarPage(document.querySelector('.activeWebview').getURL())"><i class="fa-regular fa-square-plus"></i></h1>
</div>


<div class="sidebarApp hidden" id="settings">
<h1>Settings</h1>
<p>Theme Color:</p>
<div style="display:flex; align-items:center; justify-content:space-around;">
<div class="selectOption" style="background-color:lightgray;" onclick="document.documentElement.style.setProperty('--theme', 'lightgray');"></div>
<div class="selectOption" style="background-color:gold;" onclick="document.documentElement.style.setProperty('--theme', 'gold');"></div>
<div class="selectOption" style="background-color:red;" onclick="document.documentElement.style.setProperty('--theme', 'red');"></div>
<div class="selectOption" style="background-color:blue;" onclick="document.documentElement.style.setProperty('--theme', 'blue');"></div>
<div class="selectOption" style="background-color:green;" onclick="document.documentElement.style.setProperty('--theme', 'green');"></div>
<div class="selectOption" style="background-color:#fec04b;" onclick="document.documentElement.style.setProperty('--theme', '#fec04b');"></div>
<div class="selectOption" style="background-color:purple;" onclick="document.documentElement.style.setProperty('--theme', 'purple');"></div>
<div class="selectOption" style="background-color:pink;" onclick="document.documentElement.style.setProperty('--theme', 'pink');"></div>
<div class="selectOption" style="background-color:cyan;" onclick="document.documentElement.style.setProperty('--theme', 'cyan');"></div>
<div class="selectOption" style="background-color:teal;" onclick="document.documentElement.style.setProperty('--theme', 'teal');"></div>
</div>
<br>
<span>Custom Color: </span><input onchange="document.documentElement.style.setProperty('--theme', this.value);" type="color">
<p>Homepage: (Include https://)</p>
<input onchange="homepage = this.value" type="text" value="${homepage}">
<p>Search Engine:</p>
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
<input onchange="searchURL = this.value" type="text" placeholder="Enter Search URL with query at end" style="width:80%;">
<p>Mini Sidebar Browser (formerly Sidebar Pages): (Include https://)</p>
<input onchange="newSidebarPage(this.value)" placeholder="Enter URL"><br><br>
<button onclick="newSidebarPage(document.querySelector('.activeWebview').getURL())">Add current Website</button>
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
</fieldset>
<p>Website Customize Settings:</p>
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.8078.74 Mobile Safari/537.36'); document.querySelector('.activeWebview').reload()">Mobile Mode</button>
<button onclick="document.querySelector('.activeWebview').executeJavaScript('document.body.style.filter=\`grayscale(1)\`;')">Grayscale</button>
<p>About:</p>
<div style="display:flex; align-items:center: text-align:center; justify-content:space-around;">
<img src="images/icon.png" alt="A" height="50">
<p>AutoBrowser ${version}</p>
</div>
<button onclick="newTab('http://ioposts.farleyengineeredsolutions.com/auto/releases.html')">Releases</button>
<button onclick="newTab('http://ioposts.farleyengineeredsolutions.com/auto/')">Website</button>
<button onclick="notify(whatsnew, 3000, '400px')">Whats New</button>
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
<button onclick="document.querySelector('.activeWebview').setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 AutoBrowser/${version} Safari/537.36'); document.querySelector('.activeWebview').reload()">Set User Agent to Default</button><br><br>
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
<button onclick="history = ''">Clear History</button>
<p id="historyText"></p>
</div>



<div id="tabbar"><div class="tab" style="font-size:1.4rem; width:55px;" onclick="newTab(homepage)"><p>+</p></div><div style="width:20%;" id="extraTabMargin"></div><input class="tab" id="bar" placeholder="Search the Web or Enter URL"></div>
`;
newContainerEl.id = "root_container";
newContainerEl.style.height="100vh";
document.body.appendChild(newContainerEl);
newSidebarPage("https://wikipedia.org/");
}

startup();

tabbarEl = document.getElementById("tabbar");

let newContainerEl = document.getElementById("root_container");
let addressBarEl = document.getElementById("bar");

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

function newTab(url){
    deselectTabs();
    let newTabEl = document.createElement("div");
    newTabEl.innerHTML="<span></span>";
    newTabEl.classList.add("tab");
    newTabEl.classList.add("active");
    tabbarEl.prepend(newTabEl);
    let newWebview = document.createElement("webview");
    newWebview.src = url;
    newWebview.setAttribute("allowpopups", "true");
    newWebview.classList.add("webview");
    newWebview.classList.add("activeWebview");
    newWebview.setAttribute("useragent", `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 AutoBrowser/${version} Safari/537.36`);
    newContainerEl.appendChild(newWebview);
    newTabEl.addEventListener("click", () => {
    deselectTabs();
    newWebview.classList.add("activeWebview");
    newWebview.style.display='flex';
    newTabEl.classList.add("active");
    });

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
             history += "<br><br><p>"+url+"</p>";
        }
    });

    newWebview.addEventListener("page-favicon-updated", (event) => {
        newTabEl.style.backgroundImage=`url(${event.favicons[0]})`;
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

    newTabEl.addEventListener("contextmenu", () => {
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



}

function update(){
    if (document.querySelector('.activeWebview')){


    document.querySelector(".active span").innerText = document.querySelector(".activeWebview").getTitle();
    document.title = `${document.querySelector(".activeWebview").getTitle()} - AutoBrowser`;

    if (document.activeElement !== addressBarEl && updateAddress){
    addressBarEl.value = document.querySelector(".activeWebview").getURL();
    }


    document.querySelector(".active span").innerHTML = document.querySelector(".active").innerText.split(" ").join("&nbsp;");
    

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

    if (document.querySelector(".activeWebview").isLoading()){
        document.body.style.borderTop="4px solid var(--theme)";
    } else {
        document.body.style.borderTop="none";
    }

    }
    document.getElementById("historyText").innerHTML = history;
    document.getElementById("extraTabMargin").style.width = `${20 - document.querySelectorAll('.tab').length*2 - 2}%`;
}

setInterval(update, 1);

setTimeout(() => {
    newTab(homepage);
}, 100);


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
        history += "<br><br><p>"+addressBarEl.value+"</p>";
    }
}
});

function clearSidebars(element) {
  for (let i = 0; i < document.querySelectorAll(".sidebarApp").length; i++) {
    if (element !== document.querySelectorAll(".sidebarApp")[i]){
    document.querySelectorAll(".sidebarApp")[i].classList.add("hidden");
    }
  }
}


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
function newSidebarPage(url){
    let newSidebarPageEl = document.createElement("h1");
    url = url.replaceAll("www.", "");
    newSidebarPageEl.innerHTML=url.toUpperCase().split('/')[2].split('')[0];
    let newWebviewEl = document.createElement("div");
    newWebviewEl.classList.add("sidebarApp");
    newWebviewEl.classList.add("hidden");
    newWebviewEl.style.overflow="hidden";
    newWebviewEl.innerHTML=`
    <button onclick="this.parentElement.querySelector('webview').reload()" style="width:5%;"><i class="fa-solid fa-rotate-right"></i></button>
    <button onclick="this.parentElement.querySelector('webview').goBack()" style="width:5%;"><i class="fa-solid fa-chevron-left"></i></button>
    <button onclick="this.parentElement.querySelector('webview').goForward()" style="width:5%;"><i class="fa-solid fa-chevron-right"></i></button>
    <input placeholder="Enter URL..." style="width:75%; height:15px;">
    <button onclick="newTab(this.parentElement.querySelector('webview').getURL()); this.parentElement.classList.add('hidden')" style="width:5%;"><i class="fa-solid fa-file-export"></i></button>
    <webview src="${url}" style="height:calc(100% - 15px); width:100%; display:flex;"></webview>`;
    newSidebarPageEl.addEventListener("click", () => {
        clearSidebars(newWebviewEl);
        newWebviewEl.classList.toggle("hidden");
    });
    newWebviewEl.querySelector("webview").addEventListener("page-favicon-updated", (event) => {
        newSidebarPageEl.innerHTML=`<img src="${event.favicons[0]}" alt="" onerror="this.parentElement.innerText='${url.toUpperCase().split('/')[2].split('')[0]}'" height="20">`;
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



function readingMode(){
    document.querySelector(".activeWebview").executeJavaScript(`document.reading`).then(result => {
        if (result){
        document.querySelector(".activeWebview").reload();
        } else {
    document.querySelector(".activeWebview").executeJavaScript(`
        document.reading = true;
        let READING_MODE_CONTENT = document.body.innerText;
        let newReadingMode = document.createElement("iframe");
        newReadingMode.srcdoc = "<br><pre style='font-family:sans-serif;'><h1>"+document.title+"</h1>"+READING_MODE_CONTENT+"</pre>";
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
        `);
    }
    }).catch(err => console.error(err));
}

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










let newScript = document.createElement("script");
newScript.textContent = `window.electronAPI.onOpenNewTab((url) => {
  console.log(url);
  if (!incognito){
  history += "<br><br><p>"+url+"</p>";
  }
  newTab(url);
});
`;
document.body.appendChild(newScript);
