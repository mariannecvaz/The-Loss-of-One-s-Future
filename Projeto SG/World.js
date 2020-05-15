let renderer = null,
scene = null,
camera = null,
light = null,
ambient = null,
sphere = null,
sphere1 = null,
sphere2 = null;

window.onload = function init() {
// Create the Three.js renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//show canvas
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a new Three.js scene
scene = new THREE.Scene();

//Camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3);
scene.add(camera);

let controls = new THREE.OrbitControls(camera);
controls.addEventListener('change', function () { renderer.render(scene, camera); });

// Add lights
light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

ambient = new THREE.AmbientLight(0x333333, 0.5)
scene.add(ambient);

//CRATE
//Geometry
let geometry = new THREE.SphereGeometry(1, 32, 32);
//Textures
let texture = new THREE.TextureLoader().load("./images/no_clouds_4k.jpg");

//Material 1 - color map
let material = new THREE.MeshPhongMaterial();
material.map = texture;
material.bumpMap = texture;
material.bumpScale = 0.005;

//Mesh 1
sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

let geometry1 = new THREE.SphereGeometry(1, 150, 150);
let clouds = new THREE.TextureLoader().load("./images/fair_clouds_4k.png")

//Material 2
let material1 = new THREE.MeshPhongMaterial();
material1.map = clouds;
material1.transparent = 0.5

//Mesh 2
sphere1 = new THREE.Mesh(geometry1, material1);
scene.add(sphere1);

let geometry2 = new THREE.SphereGeometry(10, 200, 200);
let stars = new THREE.TextureLoader().load("./images/galaxy_starfield.png")

//Material 3
let material2 = new THREE.MeshBasicMaterial({ color: 0xffffff});
material2.side = THREE.DoubleSide
material2.map = stars;

//Mesh 3
sphere2 = new THREE.Mesh(geometry2, material2);
scene.add(sphere2);

// Run the run loop
render();
}


function render() {
requestAnimationFrame(render);
// move the light
sphere.rotation.y = 10 * Math.sin(Date.now() / 100000);
sphere1.rotation.y = 10 * Math.sin(Date.now() / 100000);
renderer.render(scene, camera);
}
