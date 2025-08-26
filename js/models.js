import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
let dnaModel = null;

function loadDNA(scene) {
  loader.load(
    './helix.glb',
    (gltf) => {
      dnaModel = gltf.scene;
      dnaModel.position.y -= 1.25;
      scene.add(dnaModel);
    },
    undefined,
    (err) => console.error(err)
  );
}

function getDnaModel(){return dnaModel;}

export { loadDNA, getDnaModel, dnaModel };