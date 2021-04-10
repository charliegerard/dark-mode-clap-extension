import "regenerator-runtime/runtime";
import "babel-polyfill";
import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

let recognitionStarted = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.data === "start") {
    console.log("HERE");
    if (!recognitionStarted) {
      startRecognition();
    }
  }
});

const SPEECH_MODEL_TFHUB_URL =
  "https://teachablemachine.withgoogle.com/models/GWAYbcqlE/";

const startRecognition = async () => {
  recognitionStarted = true;
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels();

  recognizer.listen(
    (result) => {
      const scores = result.scores;
      const predictionIndex = scores.indexOf(Math.max(...scores));
      const prediction = classLabels[predictionIndex];

      if (prediction === "Clap") {
        if (document.body.classList.contains("tw-dark")) {
          document.body.classList.remove("tw-dark");
        } else {
          document.body.classList.add("tw-dark");
        }
      }
    },
    {
      includeSpectrogram: false, // in case listen should return result.spectrogram
      probabilityThreshold: 0.75,
      invokeCallbackOnNoiseAndUnknown: true,
      overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
    }
  );
};

const URL = SPEECH_MODEL_TFHUB_URL;

async function createModel() {
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();
  return recognizer;
}

chrome.runtime.connect(null, {
  name: "mychannel",
});
