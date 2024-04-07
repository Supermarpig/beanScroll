"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Home = () => {
  const mountRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    // 基本場景設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // 設定背景色為黑色
    mountRef.current.appendChild(renderer.domElement);

    // 光照設定
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 環境光
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 定嚮光
    directionalLight.position.set(0, 1, 0); // 根據需要調整位置
    scene.add(directionalLight);

    // 加載GLB模型
    const loader = new GLTFLoader();
    loader.load(
      "/models/bean.glb", // 替換為您的GLB模型路徑
      (gltf) => {
        const bean = gltf.scene; // 直接使用加載的場景
        bean.scale.set(1, 0.5, 1); // 根據需要調整模型尺寸
        bean.position.set(0, 0, 0); // 可能需要調整模型位置
        scene.add(bean);

        // 調整相機位置和朝向
        camera.position.z = 5;
        camera.lookAt(bean.position);

        // 動畫渲染場景
        const animate = function () {
          requestAnimationFrame(animate);
          bean.rotation.x += 0.01; // 可以根據需要調整旋轉速度
          bean.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined, // 進度回調函數（可選）
      (error) => console.error("An error happened", error)
    );

    // 清理資源，防止記憶體泄漏
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Home;
