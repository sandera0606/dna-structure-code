// main.js

import '../css/style.css';
import { scene, camera, renderer, composer, setBackground } from './scene.js' // scene, camera, renderer, composer setup
import { getDnaModel, loadDNA } from './models.js';
import { setupControls, enableControls, disableControls } from './interaction.js';
import { startAnimationLoop, setHomeStatus } from './animation.js';

let isOnHomePage = true;

// SCENE SETUP
// --- Background ---
setBackground(scene);

// --- Load DNA Model ---
loadDNA(scene);

// --- Controls ---
const controls = setupControls(camera, renderer);

// --- Animation Loop ---
startAnimationLoop({ composer, controls });

function showHomepageUI() {
    document.getElementById('infoBtn').classList.remove('hidden');
    document.getElementById('startExploringBtn').classList.remove('hidden');
}

function showExploreUI() {
    document.getElementById('infoBtn').classList.add('hidden');
    document.getElementById('startExploringBtn').classList.add('hidden');
}

function zoomIn() {
    if (isOnHomePage) {
        setHomeStatus(false);
        enableControls();
        isOnHomePage = false;
        showExploreUI();
    }
}

function zoomOut() {
    if (!isOnHomePage) {
        setHomeStatus(true);
        disableControls();
        isOnHomePage = true;
        showHomepageUI();
    }
}

// Attach event listeners
document.getElementById('startExploringBtn').addEventListener('click', zoomIn);
document.getElementById('infoBtn').addEventListener('click', () => {
    // Show your info modal or panel here
    alert('DNA is the molecule that carries genetic information...');
});
document.getElementById('homeBtn').addEventListener('click', zoomOut);

// Initial UI state
showHomepageUI();
disableControls();

// Toggle dropdown open/close
const dropdown = document.getElementById('menuDropdown');
dropdown.querySelector('.dropbtn').addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

// Close if clicking outside
window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});