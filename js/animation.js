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

export function smoothZoomOut(camera, targetPosition = { x: 0, y: 0, z: 10 }, duration = 1000) {
    const start = { ...camera.position };
    const end = targetPosition;
    const startTime = performance.now();

    function animateZoom(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);

        // Linear interpolation
        camera.position.x = start.x + (end.x - start.x) * t;
        camera.position.y = start.y + (end.y - start.y) * t;
        camera.position.z = start.z + (end.z - start.z) * t;

        camera.lookAt(0, 0, 0);

        if (t < 1) {
            requestAnimationFrame(animateZoom);
        }
    }

    requestAnimationFrame(animateZoom);
}