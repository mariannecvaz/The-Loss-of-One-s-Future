let renderer = null,
    scene = null,
    camera,
    directionalLight,
    raycaster,
    mouse = new THREE.Vector2(),
    pivot = new THREE.Object3D(),
    cube,
    angle = 0,
    remainingTrash = [],
    selectedObject = null,
    forward = 0,
    right = 0,
    obstacles = [],
    gatePivot = new THREE.Object3D,
    buildingPivot,
    riverPivot1,
    riverPivot2,
    factoryPivot,
    point = 0;

window.onload = function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#516B84");
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', resize, false);

    raycaster = new THREE.Raycaster();

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(-50, 0, -50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Luz
    let ambientLight = new THREE.HemisphereLight(0xefffd0, 0.8)
    scene.add(ambientLight)

    directionalLight = new THREE.DirectionalLight(0xefffd0)
    directionalLight.intensity = 0.1;
    directionalLight.position.set(-200, 100, 40)
    scene.add(directionalLight)

    // Estrada
    let geometry = new THREE.PlaneGeometry(150, 100);
    let material = new THREE.MeshPhongMaterial({ color: 0x171717, side: THREE.DoubleSide });
    let road = new THREE.Mesh(geometry, material);
    road.rotation.x = Math.PI / 2
    scene.add(road)

    // Área de colisão com os prédios
    let buildingPivotG = new THREE.BoxGeometry(44, 22, 33);
    let buildingPivotM = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 })
    buildingPivot = new THREE.Mesh(buildingPivotG, buildingPivotM)
    buildingPivot.position.set(57, 12, 22)
    scene.add(buildingPivot)

    // Área de colisão com a fábrica
    let factoryPivotG = new THREE.BoxGeometry(62, 22, 43);
    let factoryPivotM = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 })
    factoryPivot = new THREE.Mesh(factoryPivotG, factoryPivotM)
    factoryPivot.position.set(-12, 12, -31)
    scene.add(factoryPivot)

    // Área de colisão com os rios
    let riverPivot1G = new THREE.BoxGeometry(75.2, 4, 13.5);
    let riverPivot1M = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 })
    riverPivot1 = new THREE.Mesh(riverPivot1G, riverPivot1M)
    riverPivot1.position.set(-32.8, 2, 25)
    scene.add(riverPivot1)

    let riverPivot2G = new THREE.BoxGeometry(12, 4, 75.2);
    let riverPivot2M = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 })
    riverPivot2 = new THREE.Mesh(riverPivot2G, riverPivot2M)
    riverPivot2.position.set(-64.4, 2, -17)
    scene.add(riverPivot2)

    let cubeG = new THREE.BoxGeometry(2, 2, 2)
    let cubeM = new THREE.MeshNormalMaterial()
    cube = new THREE.Mesh(cubeG, cubeM)
    cube.position.set(-50, 4, -40)
    scene.add(cube)

    // Chão
    createFloor()
    // Prédios
    createBuilding()
    // Parque
    createPark()
    // Fábrica
    createFactory()
    // Árvores
    addTree()
    // Lixo
    addTrash()

    document.addEventListener("keyup", keyUp, false);
    document.addEventListener("mousedown", mouseDown, false);
    document.addEventListener("mouseup", mouseUp, false);

    document.addEventListener("keydown", doKey, false);

    render();
}

// Função que adiciona o lixo/ecopontos
function addTrash() {
    // Modelo do lixo
    let mtlTrashCan = new THREE.MTLLoader();
    mtlTrashCan.load('./models/Ecopontos.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Ecopontos.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.015, 0.015, 0.015);
            trashCan.position.set(-24, -11, -8)
            trashCan.rotation.y = - Math.PI / 2
            buildingPivot.add(trashCan);
        });
    });

    mtlTrashCan.load('./models/Ecopontos.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Ecopontos.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.015, 0.015, 0.015);
            trashCan.position.set(-33, -11, 2)
            trashCan.rotation.y = - Math.PI / 2
            factoryPivot.add(trashCan);
        });
    });

    let trash = new THREE.MTLLoader();
    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(10, 1, 10)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash1 = new THREE.MTLLoader();
    trash1.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-57, 1, -20)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash2 = new THREE.MTLLoader();
    trash2.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-57, 1, 0)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash3 = new THREE.MTLLoader();
    trash3.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-44, 1, -15)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash4 = new THREE.MTLLoader();
    trash4.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-44, 1, -20)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash5 = new THREE.MTLLoader();
    trash5.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-44, 1, 10)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash6 = new THREE.MTLLoader();
    trash6.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-35, 1, 15)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash7 = new THREE.MTLLoader();
    trash7.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-35, 1, 8)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash8 = new THREE.MTLLoader();
    trash8.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-12, 1, 10)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash9 = new THREE.MTLLoader();
    trash9.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(10, 1, 25)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash10 = new THREE.MTLLoader();
    trash10.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(15, 1, 40)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash11 = new THREE.MTLLoader();
    trash11.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(34, 1, 25)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash12 = new THREE.MTLLoader();
    trash12.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(33, 1, 20)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash13 = new THREE.MTLLoader();
    trash13.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(55, 1, -35)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash14 = new THREE.MTLLoader();
    trash14.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(57, 1, -42)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash15 = new THREE.MTLLoader();
    trash15.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(50, 1, -45)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });

    let trash16 = new THREE.MTLLoader();
    trash16.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(60, 1, -25)
            trash.name = "trash"
            scene.add(trash);
            remainingTrash.push(trash)
        });
    });
}

//Função que adiciona as árvores
function addTree() {
    // Tronco geometria/material
    let logGeometry = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let logGeometry1 = new THREE.CylinderGeometry(0.5, 0.5, 8)
    let logTexture = new THREE.TextureLoader().load("./images/logTexture.png")
    let logMaterial = new THREE.MeshPhongMaterial({ map: logTexture })

    // Folhas geometria/material
    let branchGeometry = new THREE.SphereGeometry(3, 7, 10)
    let branchGeometry1 = new THREE.SphereGeometry(4, 7, 10)
    let branchMaterial = new THREE.MeshLambertMaterial({ color: 0x00BB00 })
    let branchMaterial1 = new THREE.MeshLambertMaterial({ color: 0x008000 })

    tree = new THREE.Object3D()
    //Tronco
    let log = new THREE.Mesh(logGeometry1, logMaterial)
    log.position.y = 3
    tree.add(log)
    //Folhas
    let branch = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch.position.y = 3
    log.add(branch)
    tree.position.set(1, 1, 9)
    scene.add(tree)

    tree1 = new THREE.Object3D()
    //Tronco
    let log1 = new THREE.Mesh(logGeometry, logMaterial)
    log1.position.y = 3
    tree1.add(log1)
    //Folhas
    let branch1 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch1.position.y = 3
    log1.add(branch1)
    tree1.position.set(-30, 1, 15)
    scene.add(tree1)

    tree2 = new THREE.Object3D()
    //Tronco
    let log2 = new THREE.Mesh(logGeometry1, logMaterial)
    log2.position.y = 4
    tree2.add(log2)
    //Folhas
    let branch2 = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch2.position.y = 3
    log2.add(branch2)
    tree2.position.set(-48, 1, 15)
    scene.add(tree2)

    tree3 = new THREE.Object3D()
    //Tronco
    let log3 = new THREE.Mesh(logGeometry, logMaterial)
    log3.position.y = 3
    tree3.add(log3)
    //Folhas
    let branch3 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch3.position.y = 3
    log3.add(branch3)
    tree3.position.set(-54, 1, 12)
    scene.add(tree3)

    tree4 = new THREE.Object3D()
    //Tronco
    let log4 = new THREE.Mesh(logGeometry, logMaterial)
    log4.position.y = 3
    tree4.add(log4)
    //Folhas
    let branch4 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch4.position.y = 3
    log4.add(branch4)
    tree4.position.set(-57, 1, -25)
    scene.add(tree4)

    tree5 = new THREE.Object3D()
    //Tronco
    let log5 = new THREE.Mesh(logGeometry1, logMaterial)
    log5.position.y = 3
    tree5.add(log5)
    //Folhas
    let branch5 = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch5.position.y = 3
    log5.add(branch5)
    tree5.position.set(-15, 1, 40)
    scene.add(tree5)

    tree6 = new THREE.Object3D()
    //Tronco
    let log6 = new THREE.Mesh(logGeometry, logMaterial)
    log6.position.y = 3
    tree6.add(log6)
    //Folhas
    let branch6 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch6.position.y = 3
    log6.add(branch6)
    tree6.position.set(-48, 1, 43)
    scene.add(tree6)
}

//Função que adiciona os prédios
function createBuilding() {
    let BuildingGeometry1 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial1 = new THREE.MeshPhongMaterial({ color: 0x303030 })
    let building1 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building1.position.set(11, -1, 10)
    buildingPivot.add(building1)

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
    let doorMaterial = new THREE.MeshPhongMaterial({ color: 0xD9DDDC })
    let door = new THREE.Mesh(doorGeometry, doorMaterial)
    door.position.set(0, -8, 5.1)
    building1.add(door)


    let BuildingMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building2 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial2)
    building2.position.set(-1, -1, 10)
    buildingPivot.add(building2)


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
    let building3 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial1)
    building3.position.set(-13, -6, 10)
    buildingPivot.add(building3)

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
    building4.position.set(11, -1, -7)
    building4.rotation.y = Math.PI
    buildingPivot.add(building4)


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
    building5.position.set(-1, -6, -7)
    building5.rotation.y = Math.PI
    buildingPivot.add(building5)

    let window47 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window47.position.set(-3, 2, 5.1)
    building5.add(window47)

    let window48 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window48.position.set(0, 2, 5.1)
    building5.add(window48)

    let window49 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window49.position.set(3, 2, 5.1)
    building5.add(window49)

    let door6 = new THREE.Mesh(doorGeometry, doorMaterial)
    door6.position.set(0, -3, 5.1)
    building5.add(door6)

    let building6 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building6.position.set(-13, -1, -7)
    building6.rotation.y = Math.PI
    buildingPivot.add(building6)

    let window38 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window38.position.set(-3, 3, 5.1)
    building6.add(window38)

    let window39 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window39.position.set(0, 3, 5.1)
    building6.add(window39)

    let window40 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window40.position.set(3, 3, 5.1)
    building6.add(window40)

    let window41 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window41.position.set(-3, -1, 5.1)
    building6.add(window41)

    let window42 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window42.position.set(0, -1, 5.1)
    building6.add(window42)

    let window43 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window43.position.set(3, -1, 5.1)
    building6.add(window43)

    let window44 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window44.position.set(-3, 7, 5.1)
    building6.add(window44)

    let window45 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window45.position.set(0, 7, 5.1)
    building6.add(window45)

    let window46 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window46.position.set(3, 7, 5.1)
    building6.add(window46)

    let door5 = new THREE.Mesh(doorGeometry, doorMaterial)
    door5.position.set(0, -8, 5.1)
    building6.add(door5)
}

//Função que adiciona a fábrica
function createFactory() {
    let factoryGeometry = new THREE.BoxGeometry(50, 20, 30, 3, 3, 3)
    let factoryMaterial = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let factory = new THREE.Mesh(factoryGeometry, factoryMaterial)
    factory.position.set(2, -1, -4)
    factoryPivot.add(factory)

    let chimneyGeometry = new THREE.CylinderGeometry(3, 3, 5)
    let chimneyMaterial = new THREE.MeshPhongMaterial({ color: 0x9a7663 })
    let chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial)
    chimney.position.set(-15, 12, 0)
    factory.add(chimney)

    let chimneyTopGeometry = new THREE.CylinderGeometry(4, 4, 2)
    let chimneyTopMaterial = new THREE.MeshPhongMaterial({ color: 0x00000 })
    let chimneyTop = new THREE.Mesh(chimneyTopGeometry, chimneyTopMaterial)
    chimneyTop.position.y = 3
    chimney.add(chimneyTop)

    let gateGeometry = new THREE.PlaneGeometry(20, 10)
    let gateMaterial = new THREE.MeshPhongMaterial({ color: 0xB9BBB6, side: THREE.DoubleSide })
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

    let fenceGeometry = new THREE.BoxGeometry(40, 5, 1.5)
    let fenceMaterial = new THREE.MeshPhongMaterial({ color: 0x303030, side: THREE.DoubleSide })
    let fence = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence.rotation.y = Math.PI / 2
    fence.position.set(28.9, -9.5, 0)
    factoryPivot.add(fence)

    let fence1 = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence1.rotation.y = Math.PI / 2
    fence1.position.set(-27, -9.5, 0)
    factoryPivot.add(fence1)

    let fenceGeometry1 = new THREE.BoxGeometry(30, 5, 1.5)
    let fence2 = new THREE.Mesh(fenceGeometry1, fenceMaterial)
    fence2.position.set(-12.75, -9.5, 20)
    factoryPivot.add(fence2)

    let fenceGeometry2 = new THREE.BoxGeometry(5, 5, 1.5)
    let fence3 = new THREE.Mesh(fenceGeometry2, fenceMaterial)
    fence3.position.set(27.15, -9.5, 20)
    factoryPivot.add(fence3)
}

//Função que adiciona o chão
function createFloor() {
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
    river.position.set(0, -1.5, 0)
    riverPivot1.add(river)

    let riverGeometry1 = new THREE.PlaneGeometry(15, 85);
    let riverMaterial1 = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river1 = new THREE.Mesh(riverGeometry1, riverMaterial1);
    river1.rotation.x = Math.PI / 2
    river1.position.set(0, -1.5, 5)
    riverPivot2.add(river1)

    // Muro
    let fenceG = new THREE.PlaneGeometry(150, 5);
    let fenceM = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide });
    let fence = new THREE.Mesh(fenceG, fenceM);
    fence.position.set(0, 2.5, -50)
    scene.add(fence)

    let fence2 = new THREE.Mesh(fenceG, fenceM);
    fence2.position.set(0, 2.5, 50)
    scene.add(fence2)

    let fenceG1 = new THREE.PlaneGeometry(100, 5);
    let fence1 = new THREE.Mesh(fenceG1, fenceM);
    fence1.rotation.y = Math.PI / 2
    fence1.position.set(-75, 2.5, 0)
    scene.add(fence1)

    let fence3 = new THREE.Mesh(fenceG1, fenceM);
    fence3.rotation.y = Math.PI / 2
    fence3.position.set(75, 2.5, 0)
    scene.add(fence3)

    obstacles.push(fence, fence1, fence2, fence3);
}

//Função que adiciona o parque
function createPark() {
    let WallGeometry = new THREE.BoxGeometry(5, 5, 1.5)
    let WallMaterial = new THREE.MeshPhongMaterial({ color: 0x303030 })
    let wall = new THREE.Mesh(WallGeometry, WallMaterial)
    wall.position.set(72.5, 2.5, -12.7)
    scene.add(wall)

    let WallGeometry1 = new THREE.BoxGeometry(38, 5, 1.5)
    let wall1 = new THREE.Mesh(WallGeometry1, WallMaterial)
    wall1.rotation.y = Math.PI / 2
    wall1.position.set(38, 2.5, -31)
    scene.add(wall1)

    let WallGeometry2 = new THREE.BoxGeometry(26.1, 5, 1.5)
    let wall2 = new THREE.Mesh(WallGeometry2, WallMaterial)
    wall2.position.set(50.3, 2.5, -12.7)
    scene.add(wall2)

    gatePivot.position.set(70.5, 2.25, -13)
    scene.add(gatePivot)

    let gateGeometry = new THREE.BoxGeometry(7, 4.5, 0.5)
    let gateMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    let gate = new THREE.Mesh(gateGeometry, gateMaterial)
    gate.position.x = -3.5
    gate.name = "gate"
    gatePivot.add(gate)
    remainingTrash.push(gate)

    let seesawGeometry = new THREE.BoxGeometry(2.5, 0.5, 10)
    let seesawMaterial = new THREE.MeshPhongMaterial({ color: 0xA52A2A })
    seesaw = new THREE.Mesh(seesawGeometry, seesawMaterial)
    seesaw.position.set(50, 2.25, -30)
    seesaw.rotation.x = 0
    scene.add(seesaw)

    let structureGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 30)
    let structureMaterial = new THREE.MeshPhongMaterial({ color: 0x000080 })
    let structure = new THREE.Mesh(structureGeometry, structureMaterial)
    structure.position.set(50, 1.55, -30)
    structure.rotation.z = Math.PI / 2
    scene.add(structure)

    let tunelGeometry = new THREE.CylinderGeometry(2, 2, 8.5, 30, 80, 80, true)
    let tunelMaterial = new THREE.MeshPhongMaterial({ color: 0xA52A2A, side: THREE.DoubleSide })
    let tunel = new THREE.Mesh(tunelGeometry, tunelMaterial)
    tunel.position.set(65, 3.10, -35)
    tunel.rotation.z = Math.PI / 2
    tunel.rotation.y = Math.PI / 3
    scene.add(tunel)

    obstacles.push(wall, wall1, wall2, seesaw, tunel)
}

let seesawSpeed = 0.01
let speed = 0.5

function render() {
    document.getElementById("remaining").innerHTML = remainingTrash.length - 1;
    // Os números não estão como queremos devido ao bug do picking
    if (remainingTrash.length >= 15) {
        directionalLight.intensity = 0.5
    } else if (remainingTrash.length == 8) {
        directionalLight.intensity = 1
    } else if (remainingTrash.length == 5) {
        document.getElementById("end").style.display = "block"
    }


    let oldRot = cube.rotation.y
    // Mover para a direita
    if (right == 1) {
        cube.rotation.y -= 0.05
        if (checkCollisions()) {
            cube.rotation.y = oldRot
        }
    }
    // Mover para a esquerda
    else if (right == -1) {
        cube.rotation.y += 0.05
        if (checkCollisions()) {
            cube.rotation.y = oldRot
        }
    }

    let oldPos = cube.position.clone();
    // Movimento para frente
    if (forward == 1) {
        cube.position.x += speed * Math.sin(cube.rotation.y)
        cube.position.z += speed * Math.cos(cube.rotation.y)
        if (checkCollisions()) {
            cube.position.x = oldPos.x
            cube.position.z = oldPos.z
        }
    }
    // Movimento para trás
    else if (forward == -1) {
        cube.position.x -= speed * Math.sin(cube.rotation.y)
        cube.position.z -= speed * Math.cos(cube.rotation.y)
        if (checkCollisions()) {
            cube.position.x = oldPos.x
            cube.position.z = oldPos.z
        }
    }

    // Movimento do sobe e desce
    seesaw.rotation.x += seesawSpeed
    if (seesaw.rotation.x <= -0.2) {
        seesawSpeed += 0.01
    } else if (seesaw.rotation.x >= 0.2) {
        seesawSpeed -= 0.01
    }

    // Camera segue o cubo
    let relativeOffset = new THREE.Vector3(0, 0, -0.1);

    let cameraOffset = relativeOffset.applyMatrix4(cube.matrixWorld);
    camera.position.copy(cameraOffset);

    camera.lookAt(cube.position)
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

// Colisões com os prédios, a fábrica, os muros e o rio
function checkCollisions() {
    let pivotBox = new THREE.Box3().setFromObject(cube);
    let obstBox = new THREE.Box3().setFromObject(buildingPivot);
    let collision = pivotBox.intersectsBox(obstBox);
    let obstBox1 = new THREE.Box3().setFromObject(factoryPivot);
    let collision1 = pivotBox.intersectsBox(obstBox1);
    let obstBox2 = new THREE.Box3().setFromObject(riverPivot1);
    let collision2 = pivotBox.intersectsBox(obstBox2);
    let obstBox3 = new THREE.Box3().setFromObject(riverPivot2);
    let collision3 = pivotBox.intersectsBox(obstBox3);
    if (collision || collision1 || collision2 || collision3) {
        return true;
    }
    for (let i = 0; i < obstacles.length; i++) {
        let obstBox4 = new THREE.Box3().setFromObject(obstacles[i]);
        let collision4 = pivotBox.intersectsBox(obstBox4);
        if (collision4) {
            return true;
        }
    }
    return false;
}

// Função que apanha o lixo e abre o portão
function mouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    let deleteI
    raycaster.setFromCamera(mouse, camera);

    // Calcula os objetos que intersetam o raio de escolha
    let intersects = raycaster.intersectObjects(remainingTrash, true);
    if (intersects.length > 0) {
        selectedObject = intersects[0].object;
        if (selectedObject.name != "gate") {

            selectedObject.position.y = -200
            deleteI = remainingTrash.indexOf(selectedObject)
            remainingTrash.splice(deleteI, 1)
        }
        else {
            if (point % 2 == 0) {
                gatePivot.rotation.y = -1.5
                point++
            } else {
                gatePivot.rotation.y = 0
                point++
            }
        }
    }
    else {
        console.log("não apanhei lixo")
    }
}

// Deixa o objeto a nulo
function mouseUp(event) {
    selectedObject = null;
}

// Função para as teclas
function doKey(event) {
    event.preventDefault();
    let key = event.key;
    if (key == "w") {
        forward = 1
    }
    else if (key == "s") {
        forward = -1
    }
    else if (key == "d") {
        right = 1
    }
    else if (key == "a") {
        right = -1
    }
    if (key == "r") {
        window.location.href = 'City.html'
    }
    if (key === "Escape") {
        window.location.href = 'World.html'
    }
}

// Função que permite que o cubo pare assim que o botão deixa de ser pressionado
function keyUp(event) {
    event.preventDefault();
    let key = event.key;
    if (key == "w" || key == "s") {
        forward = 0;
    }
    if (key == "d" || key == "a") {
        right = 0;
    }
}

// Altera o jogo consoante o tamanho da janela
function resize() {
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}