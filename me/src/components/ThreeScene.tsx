"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Globals.css";

const Mathutils = {
  normalize: function ($value, $min, $max) {
    return ($value - $min) / ($max - $min);
  },
  interpolate: function ($normValue, $min, $max) {
    return $min + ($max - $min) * $normValue;
  },
  map: function ($value, $min1, $max1, $min2, $max2) {
    if ($value < $min1) {
      $value = $min1;
    }
    if ($value > $max1) {
      $value = $max1;
    }
    return this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
  },
};

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap,
    });

    const ww = window.innerWidth;
    const wh = window.innerHeight;
    renderer.setSize(ww, wh);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    const clock = new THREE.Clock();

    let cameraRotationProxyX = 3.14159;
    let cameraRotationProxyY = 0;

    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    camera.rotation.y = cameraRotationProxyX;
    camera.rotation.z = cameraRotationProxyY;

    const c = new THREE.Group();
    c.position.z = 400;
    c.add(camera);
    scene.add(c);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.renderToScreen = true;
    bloomPass.threshold = 0;
    bloomPass.strength = 0.9;
    bloomPass.radius = 0;
    const composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
    ];

    const pathPoints = points.map(([x, z, y]) => new THREE.Vector3(x, y, z));
    const path = new THREE.CatmullRomCurve3(pathPoints);
    path.tension = 0.5;

    const geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(15, 2);
      }
    );

    const mapHeight = textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(15, 2);
      }
    );

    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: texture,
      shininess: 20,
      bumpMap: mapHeight,
      bumpScale: -0.03,
      specular: 0x0b2349,
    });

    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    const innerGeometry = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
    const innerGeo = new THREE.EdgesGeometry(innerGeometry);
    const mat = new THREE.LineBasicMaterial({
      linewidth: 2,
      opacity: 0.2,
      transparent: true,
    });

    const wireframe = new THREE.LineSegments(innerGeo, mat);
    scene.add(wireframe);

    const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
    light.castShadow = true;
    scene.add(light);

    let p1;
    const updateCameraPercentage = (percentage) => {
      p1 = path.getPointAt(percentage % 1);
      const p2 = path.getPointAt((percentage + 0.03) % 1);
      c.position.set(p1.x, p1.y, p1.z);
      c.lookAt(p2);
      light.position.set(p2.x, p2.y, p2.z);
    };

    let cameraTargetPercentage = 0;
    let currentCameraPercentage = 0;

    gsap.registerPlugin(ScrollTrigger);

    const tubePerc = { percent: 0 };
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scrollTarget",
          start: "top top",
          end: "bottom 100%",
          scrub: 5,
        },
      })
      .to(tubePerc, {
        percent: 0.96,
        ease: "none",
        duration: 10,
        onUpdate: () => {
          cameraTargetPercentage = tubePerc.percent;
        },
      });

    const render = () => {
      currentCameraPercentage = cameraTargetPercentage;
      camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
      camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;
      updateCameraPercentage(currentCameraPercentage);
      composer.render();
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    const onMouseMove = (evt) => {
      cameraRotationProxyX = Mathutils.map(
        evt.clientX,
        0,
        window.innerWidth,
        3.24,
        3.04
      );
      cameraRotationProxyY = Mathutils.map(
        evt.clientY,
        0,
        window.innerHeight,
        -0.1,
        0.1
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default ThreeScene;
