var SpeechRecognition = window.webkitSpeechRecognition();
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(event);
    if(content=="tire minha selfie"){
        console.log("tirando selfie---");
        speak();
    }
    
}

function speak(){
var synth= window.webkitSpeechRecognition;
var speakData= "tirando sua selfie em 5 segundos";
var utterThis= new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout();

setTimeout(function(){
    takeSelfie();
    save();
    
},5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    jpeg_quality: 90
});

var camera = document.getElementById("camera");

function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
});
}

function save(){
    var link=document.getElementById("link");
    var image=document.getElementById("selfImage").src;
    link.href=image;
    link.click();
}

