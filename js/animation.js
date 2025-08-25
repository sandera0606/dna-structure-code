import {getDnaModel} from './models.js';

function animateHelix(dnaModel) {
  if (dnaModel) {
    dnaModel.rotation.y += 0.005; // tweak speed as needed
  }
}

let isOnHomepage = true;

export function setHomeStatus(boolean){
  isOnHomepage = boolean;
}

export function startAnimationLoop({ composer, controls }) {
  function animate() {
    requestAnimationFrame(animate);

    if (controls) controls.update();

    if(isOnHomepage){
      const dnaModel = getDnaModel();
      animateHelix(dnaModel);
    }
    composer.render();
  }
  animate();
}