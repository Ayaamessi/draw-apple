x= 0;
y= 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognised as : " + content;
      if (content =="1.")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple ";
        apple.png.jpg = "set";

        document.getElementById("status").innerHTML = "The Speech has been recognised as : " + content;
      if (content =="2.")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple ";
        apple.png.jpg = "set";
      
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apple ";
        apple.png.jpg = "set";
      
        
        document.getElementById("status").innerHTML = "The Speech has been recognised as : " + content;
        if (content =="3.")
        {
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";
        
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";

          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";

          document.getElementById("status").innerHTML = "The Speech has been recognised as : " + content;
        if (content =="4.")
        {
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";
        
          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";

          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";

          x = Math.floor(Math.random() * 900);
          y = Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Started drawing apple ";
          apple.png.jpg = "set";
}
}

function setup() {
    canvas = createCanvas(900,600);
}
function draw() {
    if(draw_Apple.png.jpg == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }

}