// https://teachablemachine.withgoogle.com/models/2LT_4XkuH/

function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true

    });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u2SUoVkUb/model.json',modelReady);

}

function modelReady(){
classifier.classify(gotResults);

}

function gotResults(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
     random_num_r = Math.floor(Math.random()*255)+1;
     random_num_g = Math.floor(Math.random()*255)+1;
     random_num_b = Math.floor(Math.random()*255)+1; 

  document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;

  document.getElementById("result_label").style.color ="rgb(" +random_num_r+","+random_num_g+","+random_num_b+")";

  document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";

  document.getElementById("result_confidence").style.color ="rgb(" +random_num_r+","+random_num_g+","+random_num_b+")";



  img_1=document.getElementById("alien_1");
  img_2=document.getElementById("alien_2");
  img_3=document.getElementById("alien_3");
  img_4=document.getElementById("alien_4");

 if (results[0].label=="Dog"){
    img_1.src= "Doggy.gif";
    img_2.src= "Cat.png";
    img_3.src= "Bird.png";
    img_4.src= "Ear.png";
 }

 else if (results[0].label=="Cat"){
    img_1.src= "Doggy.png";
    img_2.src= "Cat.gif";
    img_3.src= "Bird.png";
    img_4.src= "Ear.png";
 }

 else if (results[0].label=="Bird"){
    img_1.src= "Doggy.png";
    img_2.src= "Cat.png";
    img_3.src= "Bird.gif";
    img_4.src= "Ear.png";
 }

else {
    img_1.src= "Doggy.png";
    img_2.src= "Cat.png";
    img_3.src= "Bird.png";
    img_4.src= "Ear.gif";
 }

}



    
    
}
