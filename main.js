// Set the size of the 3D model container
const modelContainer = document.getElementById('3dModelContainer');
// modelContainer.style.width = '400vw';
// modelContainer.style.height = '150vh';

// Create a Three.js scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
modelContainer.appendChild(renderer.domElement);

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load(
  'Web Development Portfolio/Music Artist Website/FRONTEND/imagesVideos/3dModel/scene.gltf',
  function(gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  },
  undefined,
  function(error) {
    console.error(error);
  }
);
