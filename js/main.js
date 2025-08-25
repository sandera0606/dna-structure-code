// main.js

import '../css/style.css';
import { scene, camera, renderer, composer, setBackground } from './scene.js' // scene, camera, renderer, composer setup
import { loadDNA } from './models.js';
import { setupControls } from './interaction.js';
import { startAnimationLoop } from './animation.js';

// SCENE SETUP
// --- Background ---
setBackground(scene);

// --- Load DNA Model ---
let dnaModel;
loadDNA(scene);

// --- Controls ---
const controls = setupControls(camera, renderer);

// --- Animation Loop ---
startAnimationLoop({ composer, controls, dnaModel });
