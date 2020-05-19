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
    camera.position.x = 100;
    camera.position.y = 50;
    camera.position.z = 100;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', function () { renderer.render(scene, camera); });

    //Light
    /* let ambientLight = new THREE.AmbientLight(0xE0CF4C, 1) */
    /* let ambientLight = new THREE.AmbientLight(0xefffd0, 1) */
    let ambientLight = new THREE.AmbientLight(0xefffc0, 1)

    scene.add(ambientLight)

    // Floor
    let geometry = new THREE.PlaneGeometry(150, 100);
    let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    let floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = Math.PI / 2
    scene.add(floor)

    // Road
    let RoadGeometry = new THREE.PlaneGeometry(10, 100);
    let RoadMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, side: THREE.DoubleSide });
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
    let grassMaterial = new THREE.MeshPhongMaterial({ color: 0x25661D, side: THREE.DoubleSide });
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
    let riverMaterial = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river = new THREE.Mesh(riverGeometry, riverMaterial);
    river.rotation.x = Math.PI / 2
    river.position.set(-30, 0.1, 15)
    scene.add(river)

    let riverGeometry1 = new THREE.PlaneGeometry(15, 85);
    let riverMaterial1 = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river1 = new THREE.Mesh(riverGeometry1, riverMaterial1);
    river1.rotation.x = Math.PI / 2
    river1.position.set(-65, 0.1, -7.5)
    scene.add(river1)

    // Buildings
    let BuildingGeometry1 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial1 = new THREE.MeshPhongMaterial({ color: 0x000001 })
    let building1 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building1.position.set(68, 10, 25)
    scene.add(building1)

    let windowGeometry1 = new THREE.PlaneGeometry(2, 3)
    let windowMaterial1 = new THREE.MeshPhongMaterial({ color: 0x8ABEC2 })
    let window8 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window8.position.set(-3, 7, 5.1)
    building1.add(window8)
    
    let window9 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window9.position.set(0, 7, 5.1)
    building1.add(window9)

    let window10 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window10.position.set(3, 7, 5.1)
    building1.add(window10)

    let BuildingMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building2 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial2)
    building2.position.set(56, 10, 25)
    scene.add(building2)

    let BuildingGeometry3 = new THREE.BoxGeometry(10, 10, 10, 3, 3, 3)
    let BuildingMaterial3 = new THREE.MeshPhongMaterial({ color: 0x000001 })
    let building3 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial3)
    building3.position.set(43, 5, 25)
    scene.add(building3)

    let BuildingMaterial4 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let building4 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial4)
    building4.position.set(68, 10, 10)
    scene.add(building4)

    let BuildingMaterial5 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building5 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial5)
    building5.position.set(56, 5, 10)
    scene.add(building5)

    let BuildingMaterial6 = new THREE.MeshPhongMaterial({ color: 0x000001 })
    let building6 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial6)
    building6.position.set(43, 10, 10)
    scene.add(building6)

    // Factory
    let FactoryGeometry6 = new THREE.BoxGeometry(50, 20, 30, 3, 3, 3)
    let FactoryMaterial6 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let factory = new THREE.Mesh(FactoryGeometry6, FactoryMaterial6)
    factory.position.set(-8, 10, -35)
    scene.add(factory)

    let gateGeometry = new THREE.PlaneGeometry(20, 10)
    let gateMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    let gate = new THREE.Mesh(gateGeometry, gateMaterial)
    gate.position.set(-12, -5, 15.1)
    factory.add(gate)

    let gate1 = new THREE.Mesh(gateGeometry, gateMaterial)
    gate1.position.set(12, -5, 15.1)
    factory.add(gate1)

    let windowGeometry = new THREE.PlaneGeometry(5, 5)
    let windowMaterial = new THREE.MeshPhongMaterial({ color: 0x8ABEC2, side: THREE.DoubleSide })
    let Window = new THREE.Mesh(windowGeometry, windowMaterial)
    Window.position.set(-21, 5, 15.1)
    factory.add(Window)

    let Window1 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window1.position.set(-15, 5, 15.1)
    factory.add(Window1)

    let Window2 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window2.position.set(-9, 5, 15.1)
    factory.add(Window2)

    let Window3 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window3.position.set(-3, 5, 15.1)
    factory.add(Window3)

    let Window4 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window4.position.set(3, 5, 15.1)
    factory.add(Window4)

    let Window5 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window5.position.set(9, 5, 15.1)
    factory.add(Window5)

    let Window6 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window6.position.set(15, 5, 15.1)
    factory.add(Window6)

    let Window7 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window7.position.set(21, 5, 15.1)
    factory.add(Window7)


    let fenceGeometry = new THREE.PlaneGeometry(40, 5)
    let fenceMaterial = new THREE.MeshPhongMaterial({ color: 0x303030, side: THREE.DoubleSide })
    let fence = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence.rotation.y = Math.PI / 2
    fence.position.set(-40, 2.5, -30)
    scene.add(fence)

    let fence1 = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence1.rotation.y = Math.PI / 2
    fence1.position.set(18, 2.5, -30)
    scene.add(fence1)

    let fenceGeometry1 = new THREE.PlaneGeometry(30, 5)
    let fence2 = new THREE.Mesh(fenceGeometry1, fenceMaterial)
    fence2.position.set(-25, 2.5, -10)
    scene.add(fence2)
    
    let fenceGeometry2 = new THREE.PlaneGeometry(5, 5)
    let fence3 = new THREE.Mesh(fenceGeometry2, fenceMaterial)
    fence3.position.set(15.5, 2.5, -10)
    scene.add(fence3)

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
            trashCan.position.set(-42, 0, -21)
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
            trashCan.position.set(-42, 0, -18)
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
            trashCan.position.set(-42, 0, -15)
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