// main.js

import '../css/style.css';
import { scene, camera, renderer, composer, setBackground } from './scene.js' // scene, camera, renderer, composer setup
import { getDnaModel, loadDNA } from './models.js';
import { setupControls } from './interaction.js';
import { startAnimationLoop } from './animation.js';

document.getElementById('prevBtn')

// SCENE SETUP
// --- Background ---
setBackground(scene);

// --- Load DNA Model ---
loadDNA(scene);

// --- Controls ---
const controls = setupControls(camera, renderer);

// --- Animation Loop ---
startAnimationLoop({ composer, controls });