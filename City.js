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
    camera.position.set(100, 50, 150)

    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', function () { renderer.render(scene, camera); });

    //Light
    let ambientLight = new THREE.AmbientLight(0xefffd0, 1)
    scene.add(ambientLight)

    let directionalLight = new THREE.DirectionalLight(0xefffd0, 1)
    directionalLight.position.set(-200, 100, 20)
    directionalLight.castShadow = true;
    /* scene.add(directionalLight) */

    // Light Helper
    let directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20, "ffffff")
    scene.add(directionalLightHelper)

    // Road
    let geometry = new THREE.PlaneGeometry(150, 100);
    let material = new THREE.MeshPhongMaterial({ color: 0x303030, side: THREE.DoubleSide });
    let road = new THREE.Mesh(geometry, material);
    road.rotation.x = Math.PI / 2
    scene.add(road)

    // Floor
    let floorGeometry = new THREE.BoxGeometry(45, 37, 1);
    let floorMaterial = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide });
    let floor1 = new THREE.Mesh(floorGeometry, floorMaterial);
    floor1.rotation.x = Math.PI / 2
    floor1.position.set(52.5, 0.5, 21)
    scene.add(floor1)

    let floorGeometry1 = new THREE.BoxGeometry(45, 43, 1);
    let floor2 = new THREE.Mesh(floorGeometry1, floorMaterial);
    floor2.rotation.x = Math.PI / 2
    floor2.position.set(52.5, 0.5, -28.5)
    scene.add(floor2)

    let floorGeometry2 = new THREE.BoxGeometry(65, 43, 1);
    let floor3 = new THREE.Mesh(floorGeometry2, floorMaterial);
    floor3.rotation.x = Math.PI / 2
    floor3.position.set(-13, 0.5, -28.5)
    scene.add(floor3)

    // Grass
    let GrassGeometry = new THREE.BoxGeometry(92, 18, 1);
    let grassMaterial = new THREE.MeshPhongMaterial({ color: 0x25661D, side: THREE.DoubleSide });
    let grass = new THREE.Mesh(GrassGeometry, grassMaterial);
    grass.rotation.x = Math.PI / 2
    grass.position.set(-26, 0.5, 41)
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

    let GrassGeometry3 = new THREE.BoxGeometry(79.5, 15, 1);
    let grass3 = new THREE.Mesh(GrassGeometry3, grassMaterial);
    grass3.rotation.x = Math.PI / 2
    grass3.position.set(-19.7, 0.5, 10)
    scene.add(grass3)

    let grassGeometry4 = new THREE.BoxGeometry(15, 40, 1);
    let grass4 = new THREE.Mesh(grassGeometry4, grassMaterial);
    grass4.rotation.x = Math.PI / 2
    grass4.position.set(12.5, 0.5, 25)
    scene.add(grass4)

    let grassGeometry5 = new THREE.PlaneGeometry(25, 25);
    let grass5 = new THREE.Mesh(grassGeometry5, grassMaterial);
    grass5.position.set(6, -6, -0.6)
    floor2.add(grass5)

    // River
    let riverGeometry = new THREE.PlaneGeometry(85, 20);
    let riverMaterial = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river = new THREE.Mesh(riverGeometry, riverMaterial);
    river.rotation.x = Math.PI / 2
    river.position.set(-30, 0.1, 25)
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
    building1.position.set(68, 10.5, 25)
    building1.castShadow = true;
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

    let window11 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window11.position.set(-3, 3, 5.1)
    building1.add(window11)

    let window12 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window12.position.set(0, 3, 5.1)
    building1.add(window12)

    let window13 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window13.position.set(3, 3, 5.1)
    building1.add(window13)

    let window14 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window14.position.set(-3, -1, 5.1)
    building1.add(window14)

    let window15 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window15.position.set(0, -1, 5.1)
    building1.add(window15)

    let window16 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window16.position.set(3, -1, 5.1)
    building1.add(window16)

    let doorGeometry = new THREE.PlaneGeometry(2, 4)
    let doorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    let door = new THREE.Mesh(doorGeometry, doorMaterial)
    door.position.set(0, -8, 5.1)
    building1.add(door)


    let BuildingMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building2 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial2)
    building2.position.set(56, 10.5, 25)
    building2.castShadow = true;
    scene.add(building2)


    let window20 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window20.position.set(-3, 3, 5.1)
    building2.add(window20)

    let window21 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window21.position.set(0, 3, 5.1)
    building2.add(window21)

    let window22 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window22.position.set(3, 3, 5.1)
    building2.add(window22)

    let window23 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window23.position.set(-3, -1, 5.1)
    building2.add(window23)

    let window24 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window24.position.set(0, -1, 5.1)
    building2.add(window24)

    let window25 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window25.position.set(3, -1, 5.1)
    building2.add(window25)

    let window26 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window26.position.set(-3, 7, 5.1)
    building2.add(window26)

    let window27 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window27.position.set(0, 7, 5.1)
    building2.add(window27)

    let window28 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window28.position.set(3, 7, 5.1)
    building2.add(window28)

    let door3 = new THREE.Mesh(doorGeometry, doorMaterial)
    door3.position.set(0, -8, 5.1)
    building2.add(door3)

    let BuildingGeometry3 = new THREE.BoxGeometry(10, 10, 10, 3, 3, 3)
    let BuildingMaterial3 = new THREE.MeshPhongMaterial({ color: 0x000001 })
    let building3 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial3)
    building3.position.set(43, 5.5, 25)
    building3.castShadow = true;
    scene.add(building3)

    let window17 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window17.position.set(-3, 2, 5.1)
    building3.add(window17)

    let window18 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window18.position.set(0, 2, 5.1)
    building3.add(window18)

    let window19 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window19.position.set(3, 2, 5.1)
    building3.add(window19)

    let door2 = new THREE.Mesh(doorGeometry, doorMaterial)
    door2.position.set(0, -3, 5.1)
    building3.add(door2)

    let BuildingMaterial4 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let building4 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial4)
    building4.position.set(68, 10.5, 10)
    building4.rotation.y = Math.PI
    building4.castShadow = true;
    scene.add(building4)
    
    
    let window29 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window29.position.set(-3, 3, 5.1)
    building4.add(window29)

    let window30 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window30.position.set(0, 3, 5.1)
    building4.add(window30)

    let window31 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window31.position.set(3, 3, 5.1)
    building4.add(window31)

    let window32 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window32.position.set(-3, -1, 5.1)
    building4.add(window32)

    let window33 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window33.position.set(0, -1, 5.1)
    building4.add(window33)

    let window34 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window34.position.set(3, -1, 5.1)
    building4.add(window34)

    let window35 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window35.position.set(-3, 7, 5.1)
    building4.add(window35)

    let window36 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window36.position.set(0, 7, 5.1)
    building4.add(window36)

    let window37 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window37.position.set(3, 7, 5.1)
    building4.add(window37)

    let door4 = new THREE.Mesh(doorGeometry, doorMaterial)
    door4.position.set(0, -8, 5.1)
    building4.add(door4)

    let BuildingMaterial5 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building5 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial5)
    building5.position.set(56, 5.5, 10)
    building5.castShadow = true;
    scene.add(building5)
//ACABAR WINDOWS AND DOORS
    // let window38 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window29.position.set(-3, 3, 5.1)
    // building4.add(window29)

    // let window39 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window30.position.set(0, 3, 5.1)
    // building4.add(window30)

    // let window40 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window31.position.set(3, 3, 5.1)
    // building4.add(window31)

    // let window41 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window32.position.set(-3, -1, 5.1)
    // building4.add(window32)

    // let window42 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window33.position.set(0, -1, 5.1)
    // building4.add(window33)

    // let window43 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window34.position.set(3, -1, 5.1)
    // building4.add(window34)

    // let window44 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window35.position.set(-3, 7, 5.1)
    // building4.add(window35)

    // let window45 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window36.position.set(0, 7, 5.1)
    // building4.add(window36)

    // let window46 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    // window37.position.set(3, 7, 5.1)
    // building4.add(window37)

    // let door4 = new THREE.Mesh(doorGeometry, doorMaterial)
    // door4.position.set(0, -8, 5.1)
    // building4.add(door4)
    let BuildingMaterial6 = new THREE.MeshPhongMaterial({ color: 0x000001 })
    let building6 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial6)
    building6.position.set(43, 10.5, 10)
    building6.castShadow = true;
    scene.add(building6)

    let building7 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building7.position.set(68, 10.5, -16)
    building7.castShadow = true;
    scene.add(building7)

    let building8 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial5)
    building8.position.set(43, 10.5, -16)
    building8.castShadow = true;
    scene.add(building8)

    let building9 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial4)
    building9.position.set(56, 5.5, -16)
    building9.castShadow = true;
    scene.add(building9)

    let building10 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building10.position.set(38, 10.5, -43)
    building10.castShadow = true;
    scene.add(building10)

    let building11 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial2)
    building11.position.set(38, 5.5, -30)
    building11.castShadow = true;
    scene.add(building11)

    // Factory
    let FactoryGeometry6 = new THREE.BoxGeometry(50, 20, 30, 3, 3, 3)
    let FactoryMaterial6 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let factory = new THREE.Mesh(FactoryGeometry6, FactoryMaterial6)
    factory.position.set(-8, 11, -35)
    factory.castShadow = true;
    scene.add(factory)

    let gateGeometry = new THREE.PlaneGeometry(20, 10)
    let gateMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    let gate = new THREE.Mesh(gateGeometry, gateMaterial)
    gate.position.set(-12, -5.5, 15.1)
    factory.add(gate)

    let gate1 = new THREE.Mesh(gateGeometry, gateMaterial)
    gate1.position.set(12, -5.5, 15.1)
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
    fence.castShadow = true;
    scene.add(fence)

    let fence1 = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence1.rotation.y = Math.PI / 2
    fence1.position.set(18, 2.5, -30)
    fence1.castShadow = true;
    scene.add(fence1)

    let fenceGeometry1 = new THREE.PlaneGeometry(30, 5)
    let fence2 = new THREE.Mesh(fenceGeometry1, fenceMaterial)
    fence2.position.set(-25, 2.5, -10)
    fence2.castShadow = true;
    scene.add(fence2)

    let fenceGeometry2 = new THREE.PlaneGeometry(5, 5)
    let fence3 = new THREE.Mesh(fenceGeometry2, fenceMaterial)
    fence3.position.set(15.5, 2.5, -10)
    fence3.castShadow = true;
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
            trashCan.position.set(33, 1, 9)
            trashCan.castShadow = true;
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
            trashCan.position.set(33, 1, 12)
            trashCan.castShadow = true;
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
            trashCan.position.set(33, 1, 15)
            trashCan.castShadow = true;
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
            trashCan.position.set(-42, 1, -21)
            trashCan.castShadow = true;
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
            trashCan.position.set(-42, 1, -18)
            trashCan.castShadow = true;
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
            trashCan.position.set(-42, 1, -15)
            trashCan.castShadow = true;
            trashCan.rotation.y = - Math.PI / 2
            scene.add(trashCan);
        });
    });

    let trash = new THREE.MTLLoader();
    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(10, 1, 10)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash1 = new THREE.MTLLoader();
    trash1.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-20, 1, 15)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash2 = new THREE.MTLLoader();
    trash2.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-50, 1, 5)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash3 = new THREE.MTLLoader();
    trash3.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-57, 1, -15)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    /**
     * Group of trash
     */
    let trash4 = new THREE.MTLLoader();
    trash4.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-41, 1, -13)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash5 = new THREE.MTLLoader();
    trash5.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-41, 1, -12)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash6 = new THREE.MTLLoader();
    trash6.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-41, 1.5, -12.5)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash7 = new THREE.MTLLoader();
    trash7.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-41.5, 1, -12.5)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    /**
     * Group of trash End
     */

    let trash8 = new THREE.MTLLoader();
    trash8.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(-43, 1, -22)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    /**
     * Group of trash
     */
    let trash9 = new THREE.MTLLoader();
    trash9.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(33, 1, 18)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash10 = new THREE.MTLLoader();
    trash10.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(33, 1, 17.5)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash11 = new THREE.MTLLoader();
    trash11.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(33, 1.5, 17)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    let trash12= new THREE.MTLLoader();
    trash12.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(33.5, 1, 17)
            trash.castShadow = true;
            trash.rotation.y = - Math.PI / 2
            scene.add(trash);
        });
    });

    /**
     * Group of trash End
     */

    let trash13 = new THREE.MTLLoader();
    trash13.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.01, 0.01, 0.01);
            trash.position.set(32, 1, 8)
            trash.castShadow = true;
            scene.add(trash);
        });
    });

    let cigarett1 = new THREE.MTLLoader();
    cigarett1.load('./models/Cigarett.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Cigarett.obj', function (object) {
            cigarett = object;
            cigarett.scale.set(0.03, 0.03, 0.03);
            cigarett.position.set(0, 1, 8)
            cigarett.castShadow = true;
            scene.add(cigarett);
        });
    });

    let cigarett2 = new THREE.MTLLoader();
    cigarett2.load('./models/Cigarett.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Cigarett.obj', function (object) {
            cigarett = object;
            cigarett.scale.set(0.03, 0.03, 0.03);
            cigarett.position.set(0.7, 1, 8)
            cigarett.castShadow = true;
            scene.add(cigarett);
        });
    });

    let cigarett3 = new THREE.MTLLoader();
    cigarett3.load('./models/Cigarett.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Cigarett.obj', function (object) {
            cigarett = object;
            cigarett.scale.set(0.03, 0.03, 0.03);
            cigarett.position.set(0.5, 1, 8.2)
            cigarett.castShadow = true;
            scene.add(cigarett);
        });
    });

    document.addEventListener("keydown", doKey);

    addTree()
    
    // Run the animation loop
    render();
}
//Função que adiciona uma árvore
function addTree(){

    tree = new THREE.Object3D()
    //Tronco
    let logGeometry = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let logMaterial = new THREE.MeshPhongMaterial({ color: 0xA0522D})
    let log = new THREE.Mesh(logGeometry, logMaterial)
    log.position.y = 3
    tree.add(log)
    //Folhas
    let branchGeometry = new THREE.SphereGeometry(3, 7, 10)
    let branchMaterial = new THREE.MeshPhongMaterial({ color: 0x00BB00})
    let branch = new THREE.Mesh(branchGeometry, branchMaterial)
    branch.position.y = 3
    log.add(branch)
    tree.position.set(1, 1, 9)
    scene.add(tree)

    tree1 = new THREE.Object3D()
    //Tronco
    let logGeometry1 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log1 = new THREE.Mesh(logGeometry1, logMaterial)
    log1.position.y = 3
    tree1.add(log1)
    //Folhas
    let branchGeometry1 = new THREE.SphereGeometry(3, 7, 10)
    let branch1 = new THREE.Mesh(branchGeometry1, branchMaterial)
    branch1.position.y = 3
    log1.add(branch1)
    tree1.position.set(-30, 1, 15)
    scene.add(tree1)

    tree2 = new THREE.Object3D()
    //Tronco
    let logGeometry2 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log2 = new THREE.Mesh(logGeometry2, logMaterial)
    log2.position.y = 3
    tree2.add(log2)
    //Folhas
    let branchGeometry2 = new THREE.SphereGeometry(3, 7, 10)
    let branch2 = new THREE.Mesh(branchGeometry2, branchMaterial)
    branch2.position.y = 3
    log2.add(branch2)
    tree2.position.set(-50, 1, 15)
    scene.add(tree2)

    tree3 = new THREE.Object3D()
    //Tronco
    let logGeometry3 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log3 = new THREE.Mesh(logGeometry3, logMaterial)
    log3.position.y = 3
    tree3.add(log3)
    //Folhas
    let branchGeometry3 = new THREE.SphereGeometry(3, 7, 10)
    let branch3 = new THREE.Mesh(branchGeometry3, branchMaterial)
    branch3.position.y = 3
    log3.add(branch3)
    tree3.position.set(-54, 1, 12)
    scene.add(tree3)

    tree4 = new THREE.Object3D()
    //Tronco
    let logGeometry4 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log4 = new THREE.Mesh(logGeometry4, logMaterial)
    log4.position.y = 3
    tree4.add(log4)
    //Folhas
    let branchGeometry4 = new THREE.SphereGeometry(3, 7, 10)
    let branch4 = new THREE.Mesh(branchGeometry4, branchMaterial)
    branch4.position.y = 3
    log4.add(branch4)
    tree4.position.set(-57, 1, -25)
    scene.add(tree4)

    tree5 = new THREE.Object3D()
    //Tronco
    let logGeometry5 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log5 = new THREE.Mesh(logGeometry5, logMaterial)
    log5.position.y = 3
    tree5.add(log5)
    //Folhas
    let branchGeometry5 = new THREE.SphereGeometry(3, 7, 10)
    let branch5 = new THREE.Mesh(branchGeometry5, branchMaterial)
    branch5.position.y = 3
    log5.add(branch5)
    tree5.position.set(-15, 1, 40)
    scene.add(tree5)

    tree6 = new THREE.Object3D()
    //Tronco
    let logGeometry6 = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let log6 = new THREE.Mesh(logGeometry6, logMaterial)
    log6.position.y = 3
    tree6.add(log6)
    //Folhas
    let branchGeometry6 = new THREE.SphereGeometry(3, 7, 10)
    let branch6 = new THREE.Mesh(branchGeometry6, branchMaterial)
    branch6.position.y = 3
    log6.add(branch6)
    tree6.position.set(-48, 1, 43)
    scene.add(tree6)

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