Webcam.set({

    width:360,
    height:270,
    image_format:'jpeg',
    jpeg_quality:90

});

camera = document.getElementById( "camera" );

Webcam.attach('#camera');

function capture_image(){

    Webcam.snap(function(data_uri){

        document.getElementById( "result" ).innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'

    });

}

console.log('ml5 Version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OGLxD0waG/model.json',modelLoaded);

function modelLoaded(){

    console.log( 'Model loaded!' );

}

function identify_image(){

    image = document.getElementById( "captured_image" );
    classifier.classify(image, gotResult);

}

function gotResult(error, results){
    if (error){

        console.error(error);

    } else {

        console.log(results);
        accuracy = results[0].confidence.toFixed(2) * 100;
        document.getElementById( "person" ).innerHTML = results[0].label;
        document.getElementById( "accuracy" ).innerHTML = accuracy.toFixed(0) + '%';
        

    }
}