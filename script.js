
// speek button
function speek() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB" || "hn-GB";
  recognition.onresult = function (e) {
    console.log(e);
    var content = e.results[0][0].transcript;
    console.log(content);
    document.getElementById("search").value = content;
    // const utterance = new SpeechSynthesisUtterance(content);
    // speechSynthesis.speak(utterance);
  };
  // recognition.start();
}

// searching button
const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const videogrid = document.getElementById("video-grid-title");
  const videopre = document.querySelectorAll(".video-prewiew");
  const videotitle = document.getElementsByClassName("video-title");

  for (let i = 0; i < videotitle.length; i++) {
      let match = videopre[i].getElementsByClassName("video-title")[0];

      if (match) {
          let textvalue = match.textContent || match.innerHTML;

          if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
              videopre[i].style.display = "";
          }
          else {
              videopre[i].style.display = "none";
          }
      }
  }
}