let renderer = null,
    scene = null,
    camera;

// The three.js object that represents the car model

window.onload = function init() {
    // Create the Three.js renderer
    renderer = new THREE.WebGLRenderer();
    // Set the viewport 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#516B84");
    document.body.appendChild(renderer.domElement);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.y = 160;
    camera.position.z = 200;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', function () { renderer.render(scene, camera); });

    //Light
    let ambientLight = new THREE.AmbientLight(0xE0CF4C, 1)
    scene.add(ambientLight)

    // Floor
    let geometry = new THREE.PlaneGeometry(150, 100);
    let material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    let floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = Math.PI / 2
    scene.add(floor)

    // Road
    let RoadGeometry = new THREE.PlaneGeometry(10, 100);
    let RoadMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    let road = new THREE.Mesh(RoadGeometry, RoadMaterial);
    road.rotation.x = Math.PI / 2
    road.position.set(25, 0.1, 0)
    scene.add(road)

    let RoadGeometry1 = new THREE.PlaneGeometry(130, 10);
    let road1 = new THREE.Mesh(RoadGeometry1, RoadMaterial);
    road1.rotation.x = Math.PI / 2
    road1.position.set(10, 0.1, -2)
    scene.add(road1)

    let RoadGeometry2 = new THREE.PlaneGeometry(50, 10);
    let road2 = new THREE.Mesh(RoadGeometry2, RoadMaterial);
    road2.rotation.x = Math.PI / 2
    road2.position.set(50, 0.1, 45)
    scene.add(road2)

    let RoadGeometry3 = new THREE.PlaneGeometry(10, 50);
    let road3 = new THREE.Mesh(RoadGeometry3, RoadMaterial);
    road3.rotation.x = Math.PI / 2
    road3.position.set(-50, 0.1, -25)
    scene.add(road3)

    // Grass
    let GrassGeometry = new THREE.BoxGeometry(92, 30, 1);
    let grassMaterial = new THREE.MeshBasicMaterial({ color: 0x25661D, side: THREE.DoubleSide });
    let grass = new THREE.Mesh(GrassGeometry, grassMaterial);
    grass.rotation.x = Math.PI / 2
    grass.position.set(-26, 0.5, 35)
    scene.add(grass)

    let GrassGeometry1 = new THREE.BoxGeometry(5, 100, 1);
    let grass1 = new THREE.Mesh(GrassGeometry1, grassMaterial);
    grass1.rotation.x = Math.PI / 2
    grass1.position.set(-73, 0.5, 0)
    scene.add(grass1)

    let GrassGeometry2 = new THREE.BoxGeometry(5, 53, 1);
    let grass2 = new THREE.Mesh(GrassGeometry2, grassMaterial);
    grass2.rotation.x = Math.PI / 2
    grass2.position.set(-57, 0.5, -23.5)
    scene.add(grass2)

    let GrassGeometry3 = new THREE.BoxGeometry(79.5, 5, 1);
    let grass3 = new THREE.Mesh(GrassGeometry3, grassMaterial);
    grass3.rotation.x = Math.PI / 2
    grass3.position.set(-19.7, 0.5, 5.5)
    scene.add(grass3)

    let grassGeometry4 = new THREE.BoxGeometry(15, 40, 1);
    let grass4 = new THREE.Mesh(grassGeometry4, grassMaterial);
    grass4.rotation.x = Math.PI / 2
    grass4.position.set(12.5, 0.5, 25)
    scene.add(grass4)

    // River
    let riverGeometry = new THREE.PlaneGeometry(85, 20);
    let riverMaterial = new THREE.MeshBasicMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river = new THREE.Mesh(riverGeometry, riverMaterial);
    river.rotation.x = Math.PI / 2
    river.position.set(-30, 0.1, 15)
    scene.add(river)

    let riverGeometry1 = new THREE.PlaneGeometry(15, 85);
    let riverMaterial1 = new THREE.MeshBasicMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river1 = new THREE.Mesh(riverGeometry1, riverMaterial1);
    river1.rotation.x = Math.PI / 2
    river1.position.set(-65, 0.1, -7.5)
    scene.add(river1)

    // Buildings
    let BuildingGeometry1 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial1 = new THREE.MeshBasicMaterial({ color: 0x000001 })
    let building1 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building1.position.set(68, 10, 25)
    scene.add(building1)

    let BuildingGeometry2 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial2 = new THREE.MeshBasicMaterial({ color: 0x9C5941 })
    let building2 = new THREE.Mesh(BuildingGeometry2, BuildingMaterial2)
    building2.position.set(56, 10, 25)
    scene.add(building2)

    let BuildingGeometry3 = new THREE.BoxGeometry(10, 10, 10, 3, 3, 3)
    let BuildingMaterial3 = new THREE.MeshBasicMaterial({ color: 0x000001 })
    let building3 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial3)
    building3.position.set(43, 5, 25)
    scene.add(building3)

    let BuildingGeometry4 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial4 = new THREE.MeshBasicMaterial({ color: 0x877663 })
    let building4 = new THREE.Mesh(BuildingGeometry4, BuildingMaterial4)
    building4.position.set(68, 10, 10)
    scene.add(building4)

    let BuildingGeometry5 = new THREE.BoxGeometry(10, 10, 10, 3, 3, 3)
    let BuildingMaterial5 = new THREE.MeshBasicMaterial({ color: 0x9C5941 })
    let building5 = new THREE.Mesh(BuildingGeometry5, BuildingMaterial5)
    building5.position.set(56, 5, 10)
    scene.add(building5)

    let BuildingGeometry6 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial6 = new THREE.MeshBasicMaterial({ color: 0x000001 })
    let building6 = new THREE.Mesh(BuildingGeometry6, BuildingMaterial6)
    building6.position.set(43, 10, 10)
    scene.add(building6)

    // Fabric
    let mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/fabrica.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/fabrica.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            scene.add(trashCan);
        });
    });

    // Trash Cans model
    let mtlBlueTrash = new THREE.MTLLoader();
    mtlBlueTrash.load('./models/EcopontoAzul.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoAzul.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(33, 0, 9)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    let mtlYellowTrash = new THREE.MTLLoader();
    mtlYellowTrash.load('./models/EcopontoAmarelo.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoAmarelo.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(33, 0, 12)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    let mtlGreenTrash = new THREE.MTLLoader();
    mtlGreenTrash.load('./models/EcopontoVerde.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoVerde.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(33, 0, 15)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    mtlBlueTrash.load('./models/EcopontoAzul.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoAzul.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(-40, 0, -21)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    mtlYellowTrash.load('./models/EcopontoAmarelo.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoAmarelo.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(-40, 0, -18)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    mtlGreenTrash.load('./models/EcopontoVerde.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/EcopontoVerde.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.01, 0.01, 0.01);
            trashCan.position.set(-40, 0, -15)
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
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