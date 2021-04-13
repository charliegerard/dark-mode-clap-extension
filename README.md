# Dark mode clap extension for Netlify 👏

Experiment to toggle [Netlify](https://app.netlify.com/)'s dark mode by clapping your hands.

This Chrome extension uses [TensorFlow.js](https://www.tensorflow.org/js) to recognise the sound of clapping hands, and toggle the dark mode on/off.

If you'd like to know more about this experiment, check out [the blog post](https://charliegerard.dev/blog/toggle-dark-mode-clapping-hands-chrome-extension)!

## Install

- Clone the repo.
- Run `yarn install` to install the dependencies.
- Run `yarn build` to generate the `dist` folder.
- Visit `chrome://extensions` in your browser and make sure developer mode is toggled on.
- Click on "Load unpacked" and select the `dist` folder generated.
- Visit `https://app.netlify.com` and clap your hands to toggle dark mode.

_The first time you use the extension, you will probably be asked for permission to use the browser's microphone, so it might take a few seconds._
