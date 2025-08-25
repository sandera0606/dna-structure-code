import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { THREE, scene, camera, outlinePass } from './scene.js';
import { dnaModel } from './models.js';
import { extractKey, infos, images } from './util.js';

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
  if (intersects.length === 0) return;

  let obj = intersects[0].object;
  if (dnaModel && (dnaModel.children.includes(obj) || obj.parent)) {
    obj = findTopLevelMesh(obj);
    const partName = obj.name;
    const key = extractKey(partName);
    document.getElementById('infoText').innerHTML = infos.get(key);
    document.getElementById('infoImage').innerHTML = "<img src=" + images.get(key) + ">";
    outlinePass.selectedObjects = [obj];
  }
}

window.addEventListener('pointermove', updatePointer);
window.addEventListener('click', handleClick);

export { handleClick };
