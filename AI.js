//all info you want to include

// var data = {
//   chatinit:{
//     title: ["Hello <span class='emoji'> &#128075;</span", "I am Mr. AY", "How can I help you?"],
//     options: ["Movies <span class='emoji'> &#128250;</span>", "News", "Shopping <span class='emoji'> &#128090;</span>", "Music <span class='emoji'> &#127925;</span>"]
//   },
//   movies: {
//     title:["Please select a category"],
//     options:['Film Ratings','Bollywood','Web Series','Others'],
//     url : {
//       link:["https://www.rottentomatoes.com/"]
//     }
//   },
// }
//all info you want to include

var data = {
  chatinit:{
    title: ["Hello <span class='emoji'> &#128075;</span", "I am Mr. AY", "How can I help you?"],
    options: ["Math" , "Code", "TechNews","Random" ]
  },
  math: {
    title:["Please select a category"],
    options:['Addition','Subtraction','Multiplcation','Division'],
    url : {
      link:["https://www.mathway.com/Algebra", "https://www.mathway.com/Algebra", "https://www.mathway.com/Algebra", "https://www.mathway.com/Algebra"]
    }
  },
  code:{
      title: ["Please select a language"],
      options: ['HTML','Python', 'Java'],
      url: {
          link:["https://workik.com/ai-code-generator"]
      }
  },
  technews:{
      title:["Top 5 headlines in the Technology World"],
      options:['Big Tech says Austrilia rushed social media ban for youths under 16', 'TSMC founder Morris Chang offered top job to Jensen Huang memoir shows', 'Meta faces trial in October on unfair competition case lodged by Spanish media', 'Canadian news compainies challenge OpenAI alleged copyright breaches','Australian social media ban started with call to act by politicians wife'],
      url:{
          link:["https://www.reuters.com/technology/big-tech-says-australia-rushed-social-media-ban-youths-under-16-2024-11-29/","https://www.reuters.com/technology/tsmc-founder-morris-chang-offered-top-job-jensen-huang-memoir-shows-2024-11-29/", "https://www.reuters.com/technology/meta-faces-trial-october-unfair-competition-case-lodged-by-spanish-media-2024-11-29/", "https://www.reuters.com/sustainability/boards-policy-regulation/major-canadian-news-media-companies-launch-legal-action-against-openai-2024-11-29/", "https://www.reuters.com/world/asia-pacific/australian-social-media-ban-started-with-call-act-by-poiliticans-wife-2024-11-29/" ]
  }
},
  random:{
      title: ["Here are some more options for you"],
      options: ["YouTube","Netflix","Amazon Prime","Hulu"],
      url: {
          link:["https://www.youtube.com","https://www.netflix.com/browse","https://www.amazon.com","https://www.hulu.com/hub/home"]
      }
    }
  }






document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

//click start chat btn to open chat box
//click close chat btn to close chat box
function showChatBot() {
  console.log(this.innerText);
  if (this.innerText == "START CHAT") {
    document.getElementById("test").style.display = "block";
    document.getElementById("init").innerText = "CLOSE CHAT";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = "";
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, i * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = "<div>" + options[i] + "</div>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];
  document.querySelectorAll(".opt").forEach((el) => {
    el.remove();
  })
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">'+findText+'</span>';
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleResults(title, options, url) {
  for (let i = 0; i < title.length; i++) {
    var elm = document.createElement("p");
    elm.innerHTML = title[i];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  }

  if (isObjectEmpty(url) == true) {
    console.log("having more options");
    showOptions(options);
  } 
  else {
    console.log("end result");
    handleOptions(options, url);
  }
}

function handleOptions(options, url) {
  for(var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  // var opt = document.createElement("span");
  //   var inp = '<a class="m-link" href="'+url.more+'">'+'See more</a>';
  // var opt = document.createElement("span");
  //   var inp = '<a class="m-link" href="'+url.more+'"></a>';

    const isObjectEmpty = (url) => {
      return JSON.stringify(url) === "{}";
    }
    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll() {
  var elem = document.getElementById('chat-box');
  elem.scrollTop = elem.scrollHeight;
}