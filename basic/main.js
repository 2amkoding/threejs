import * as THREE from 'three';

//1. Create the SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color('#FOFOFO');
//2 .Add the CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//3. Create and Add a CUBE OBJECT
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//4. Add LIGHTING
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);
//5. Setup the RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//6. Animate the SCENE
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();