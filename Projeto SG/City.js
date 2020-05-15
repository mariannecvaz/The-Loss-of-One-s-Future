let renderer = null,
    scene = null,
    camera;

// The three.js object that represents the car model

window.onload = function init() {
    // Create the Three.js renderer
    renderer = new THREE.WebGLRenderer();
    // Set the viewport 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#AAAAAA");
    document.body.appendChild(renderer.domElement);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.y = 160;
    camera.position.z = 200;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // Car model
    let mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/toycar.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/toycar.obj', function (object) {
            car = object;
            car.scale.set(0.2, 0.2, 0.2);
            scene.add(car);
        });
    });

    document.addEventListener("keydown", doKey);

    // Run the animation loop
    render();
}

function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

// key handling
function doKey(event) {
    let key = event.key;
    if (key == "w") {

    }
    else if (key == "s") {

    }
    else if (key == "d") {

    }
    else if (key == "a") {

    }
    else if (key == 1) {

    }
    else if (key == 2) {

    }
}