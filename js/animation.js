export function animateHelix(dnaModel) {
  if (dnaModel) {
    dnaModel.rotation.y += 0.005; // tweak speed as needed
  }
}

export function startAnimationLoop({ composer, controls, dnaModel }) {
  function animate() {
    requestAnimationFrame(animate);

    if (controls) controls.update();

    composer.render();
  }
  animate();
}