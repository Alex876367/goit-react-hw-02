import style from "./Cafe.module.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect } from "react";

const Cafe = () => {
  useEffect(() => {
    // Creating a new scene
    const scene = new THREE.Scene();

    // Setting up the camera
    const camera = new THREE.PerspectiveCamera(
      45,
      500 / 300, // Aspect ratio (500 / 500)
      0.1,
      1000
    );
    camera.position.set(4, 3, 4); // Move the camera to be in front of the object

    // Setting up the WebGL renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(500, 300);

    // Attaching the renderer to the document
    const canvasContainer = document.getElementById("canvas-container");
    canvasContainer.appendChild(renderer.domElement);

    // Adding ambient light to the scene
    const aLight = new THREE.AmbientLight(0xffffff, 2); // Increase intensity
    scene.add(aLight);

    // Adding directional light to the scene
    const dLight1 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    dLight1.position.set(5, 5, 5);
    scene.add(dLight1);

    const dLight2 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    dLight2.position.set(-5, 5, 5);
    scene.add(dLight2);

    const dLight3 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    dLight3.position.set(5, -5, 5);
    scene.add(dLight3);

    const dLight4 = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity
    dLight4.position.set(5, 5, -5);
    scene.add(dLight4);

    let loader = new GLTFLoader();
    let obj = null;

    loader.load("./free_isometric_cafe/scene.gltf", function (gltf) {
      obj = gltf;
      obj.scene.scale.set(1.3, 1.3, 1.3);
      scene.add(obj.scene);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false; // Disable zooming

    function animate() {
      requestAnimationFrame(animate);
      // поворачиваем объект по оси Y
      if (obj) {
        obj.scene.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    }

    animate();

    // Add event listeners to prevent OrbitControls from interfering with buttons
    const preventOrbitControls = (event) => {
      event.stopPropagation();
    };

    renderer.domElement.addEventListener("pointerdown", preventOrbitControls);
    renderer.domElement.addEventListener("pointermove", preventOrbitControls);
    renderer.domElement.addEventListener("pointerup", preventOrbitControls);

    // Clean up on component unmount
    return () => {
      canvasContainer.removeChild(renderer.domElement);
      renderer.domElement.removeEventListener(
        "pointerdown",
        preventOrbitControls
      );
      renderer.domElement.removeEventListener(
        "pointermove",
        preventOrbitControls
      );
      renderer.domElement.removeEventListener(
        "pointerup",
        preventOrbitControls
      );
    };
  }, []);

  return <div id="canvas-container" className={style.canvasContainer}></div>;
};

export default Cafe;
