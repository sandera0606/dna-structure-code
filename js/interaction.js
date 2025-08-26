import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { THREE, scene, camera, outlinePass } from './scene.js';
import { dnaModel } from './models.js';
import { extractKey, infos, images, defaultInfo, homepage } from './util.js';
import { setHomeStatus, getHomeStatus, smoothZoom } from './animation.js';

let homeIndex = 0;

// controls
export function setupControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  return controls;
}

// raycasting
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function updatePointer(ev) {
  pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
}

function findTopLevelMesh(mesh) {
  let current = mesh;
  while (current.parent && current.parent !== dnaModel && current.parent.type !== 'Scene') {
    current = current.parent;
  }
  return current;
}

function handleClick() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length === 0){
    document.getElementById('textPart').innerHTML = defaultInfo;
    document.getElementById('infoImage').classList.add('hidden');
    outlinePass.selectedObjects = [];
  }

  let obj = intersects[0].object;
  if (dnaModel && (dnaModel.children.includes(obj) || obj.parent)) {
    obj = findTopLevelMesh(obj);
    const partName = obj.name;
    const key = extractKey(partName);
    document.getElementById('textPart').innerHTML = infos.get(key);
    document.getElementById('infoImage').classList.remove('hidden');
    document.getElementById('infoImage').innerHTML = "<img src=" + images.get(key) + ">";
    outlinePass.selectedObjects = [obj];
  }
}

export function enableControls(){
  window.addEventListener('pointermove', updatePointer);
  window.addEventListener('click', handleClick);
}

export function disableControls(){
  window.removeEventListener('pointermove', updatePointer);
  window.removeEventListener('click', handleClick);
}

function showHomepageUI() {
  homeIndex = 0;
  setHomeStatus(true);
  zoomOut();
  document.getElementById('textPart').innerHTML = homepage[homeIndex];
  document.getElementById('prevBtn').classList.remove('hidden');
  document.getElementById('prevBtn').disabled = true;
  document.getElementById('nextBtn').disabled = false;
  document.getElementById('nextBtn').classList.remove('hidden');
  document.getElementById('startExploringBtn').classList.remove('hidden');
  document.getElementById('infoImage').classList.add('hidden');
  disableControls();
}

function showExploreUI() {
  enableControls();
  setHomeStatus(false);
  document.getElementById('prevBtn').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('startExploringBtn').classList.add('hidden');
  document.getElementById('infoImage').classList.remove('hidden');
}

function zoomIn() {
  if (getHomeStatus()) {
      setHomeStatus(false);
      enableControls();
      showExploreUI();
  }
  smoothZoom(camera, { x: 0, y: 0, z: 3 }, 500);
}

function zoomOut() {
  if (!getHomeStatus()) {
      setHomeStatus(true);
      disableControls();
      showHomepageUI();
  }
  smoothZoom(camera, { x: 0, y: 0, z: 10 }, 1000);
}

function nextPage(){
  if(homeIndex < homepage.length - 1){
    if(homeIndex==0){
      document.getElementById('prevBtn').disabled = false;
    }
    ++homeIndex;
    if(homeIndex==homepage.length - 1){
      document.getElementById('nextBtn').disabled = true;
    }
    document.getElementById('textPart').innerHTML = homepage[homeIndex];
  }
}

function prevPage(){
  if(homeIndex > 0){
    if(homeIndex==homepage.length - 1){
      document.getElementById('nextBtn').disabled = false;
    }
    --homeIndex;
    if(homeIndex==0){
      document.getElementById('prevBtn').disabled = true;
    }
    document.getElementById('textPart').innerHTML = homepage[homeIndex];
  }
}

// Attach event listeners
// start exploring
document.getElementById('startExploringBtn').addEventListener('click', zoomIn);
// home
document.getElementById('homeBtn').addEventListener('click', showHomepageUI);
// next/previous buttons
document.getElementById('prevBtn').addEventListener('click', prevPage);
document.getElementById('nextBtn').addEventListener('click', nextPage);

// Initial UI state
showHomepageUI();

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
