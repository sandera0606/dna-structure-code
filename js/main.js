// main.js

import '../css/style.css';
import { scene, camera, renderer, composer, setBackground } from './scene.js' // scene, camera, renderer, composer setup
import { getDnaModel, loadDNA } from './models.js';
import { setupControls, enableControls, disableControls } from './interaction.js';
import { startAnimationLoop, setHomeStatus, smoothZoomOut } from './animation.js';

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
    document.getElementById('prevBtn').classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('startExploringBtn').classList.remove('hidden');
    console.log(document.getElementById('infoImage'));
    document.getElementById('infoImage').classList.add('hidden');
}

function showExploreUI() {
    document.getElementById('prevBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('startExploringBtn').classList.add('hidden');
    console.log(document.getElementById('infoImage'));
    document.getElementById('infoImage').classList.remove('hidden');
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
    smoothZoomOut(camera, { x: 0, y: 0, z: 10 }, 1000);
}

// Attach event listeners
document.getElementById('startExploringBtn').addEventListener('click', zoomIn);
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