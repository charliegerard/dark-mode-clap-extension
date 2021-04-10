import "regenerator-runtime/runtime";
import "babel-polyfill";
import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

// Where to load the model from.
const SPEECH_MODEL_TFHUB_URL =
  "https://teachablemachine.withgoogle.com/models/GWAYbcqlE/";

// // Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async function () {
  await chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { data: "start" },
        function (response) {}
      );
    }
  );
  //   // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   // chrome.tabs.sendMessage(
  //   //   tab.id,
  //   //   { data: "start" },
  //   //   function (response) {}
  //   // );
  //   // });

  //   // chrome.scripting.executeScript({
  //   //   target: { tabId: tab.id },
  //   //   function: () => {},
  //   // });
});

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// // changeColor.addEventListener("click", async () => {
// //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// //   const recognizer = await createModel();
// //   const classLabels = recognizer.wordLabels(); // get class labels

// //   // // listen() takes two arguments:
// //   // // 1. A callback function that is invoked anytime a word is recognized.
// //   // // 2. A configuration object with adjustable fields
// //   recognizer.listen(
// //     (result) => {
// //       const scores = result.scores; // probability of prediction for each class
// //       console.log(scores);
// //       //     // render the probability scores per class
// //       //     for (let i = 0; i < classLabels.length; i++) {
// //       //       const classPrediction =
// //       //         classLabels[i] + ": " + result.scores[i].toFixed(2);
// //       //       console.log("PREDICTION: ", classPrediction);
// //       //     }
// //     },
// //     {
// //       includeSpectrogram: false, // in case listen should return result.spectrogram
// //       probabilityThreshold: 0.75,
// //       invokeCallbackOnNoiseAndUnknown: true,
// //       overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
// //     }
// //   );

// //   chrome.scripting.executeScript({
// //     target: { tabId: tab.id },
// //     function: () => {},
// //   });
// // });

// // The body of this function will be execuetd as a content script inside the
// // current page
// // function setPageBackgroundColor() {
// //   chrome.storage.sync.get("color", ({ color }) => {
// //     // document.body.style.backgroundColor = color;
// //     document.body.classList.add("tw-dark");
// //   });
// // }

// const URL = SPEECH_MODEL_TFHUB_URL;

// async function createModel() {
//   const checkpointURL = URL + "model.json"; // model topology
//   const metadataURL = URL + "metadata.json"; // model metadata

//   const recognizer = speechCommands.create(
//     "BROWSER_FFT", // fourier transform type, not useful to change
//     undefined, // speech commands vocabulary feature, not useful for your models
//     checkpointURL,
//     metadataURL
//   );

//   // check that model and metadata are loaded via HTTPS requests.
//   await recognizer.ensureModelLoaded();
//   return recognizer;
// }
