window.SpeechRecognition = window.SpeechRecognition;

let recognition = new window.SpeechRecognition();
recognition.start();

recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript);
}