Webcam.set({ 
    width:350,
    height:300,
    image_format: 'jpg',
    jpg_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';
});
}

console.log('ml5 version : ', ml5.version);

classsifier = ml5.ImageClassifier('https://teachablemachine.withgoogle.com/models/9pCYBJWTN/model.json', modelLoaded);

function modelLoaded() {
 console.log('Model Loaded');
}