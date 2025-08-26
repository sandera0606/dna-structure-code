// main.js

import '../css/style.css';
import { scene, camera, renderer, composer, setBackground } from './scene.js' // scene, camera, renderer, composer setup
import { getDnaModel, loadDNA } from './models.js';
import { setupControls, enableControls, disableControls } from './interaction.js';
import { startAnimationLoop, setHomeStatus, smoothZoom } from './animation.js';
import { homepage } from './util.js';

let isOnHomePage = true;
let index = 0;
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

function showHomepageUI() {
  isOnHomePage = true;
  index = 0;
  document.getElementById('textPart').innerHTML = homepage[index];
  document.getElementById('prevBtn').classList.remove('hidden');
  document.getElementById('prevBtn').disabled = true;
  document.getElementById('nextBtn').classList.remove('hidden');
  document.getElementById('startExploringBtn').classList.remove('hidden');
  document.getElementById('infoImage').classList.add('hidden');
}

function showExploreUI() {
  isOnHomePage = false;
  document.getElementById('prevBtn').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('startExploringBtn').classList.add('hidden');
  document.getElementById('infoImage').classList.remove('hidden');
}

function zoomIn() {
  if (isOnHomePage) {
      setHomeStatus(false);
      enableControls();
      showExploreUI();
  }
  smoothZoom(camera, { x: 0, y: 0, z: 3 }, 500);
}

function zoomOut() {
  if (!isOnHomePage) {
      setHomeStatus(true);
      disableControls();
      showHomepageUI();
  }
  smoothZoom(camera, { x: 0, y: 0, z: 10 }, 1000);
}

function nextPage(){
  if(index < homepage.length - 1){
    if(index==0){
      document.getElementById('prevBtn').disabled = false;
    }
    ++index;
    if(index==homepage.length - 1){
      document.getElementById('nextBtn').disabled = true;
    }
    document.getElementById('textPart').innerHTML = homepage[index];
  }
}

function prevPage(){
  if(index > 0){
    if(index==homepage.length - 1){
      document.getElementById('nextBtn').disabled = false;
    }
    --index;
    if(index==0){
      document.getElementById('prevBtn').disabled = true;
    }
    document.getElementById('textPart').innerHTML = homepage[index];
  }
}

// Attach event listeners
// start exploring
document.getElementById('startExploringBtn').addEventListener('click', zoomIn);
// home
document.getElementById('homeBtn').addEventListener('click', zoomOut);
// next/previous buttons
document.getElementById('prevBtn').addEventListener('click', prevPage);
document.getElementById('nextBtn').addEventListener('click', nextPage);

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
