"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Header from '@/components/shared/Header/Header'

const Home = () => {
  const mountRef = useRef<HTMLDivElement>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 設定為白色背景
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 5; // 將相機位置拉遠

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 光源設定
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // 加載模型
    const loader = new GLTFLoader();
    loader.load(
      "/models/bean.glb",
      (gltf) => {
        // 將模型的縮放因子設定為20，使其看起來更大
        gltf.scene.scale.set(20, 20, 20);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error(error)
    );

    let angle = 0; // 定義旋轉角度
    let rotationAngle = 0; // 定義水準旋轉角度
    const radius = 1; // 相機環繞半徑

    const animate = () => {
      requestAnimationFrame(animate);
      // 維持旋轉
      camera.position.x = radius * Math.sin(angle);
      camera.position.z = radius * Math.cos(angle) + 5; // 以5為基礎距離進行旋轉
      camera.lookAt(scene.position);
      camera.rotation.y = rotationAngle; // 水準旋轉
      renderer.render(scene, camera);
    };
    animate();

    // 處理滾輪事件以同時進行縮放和360度旋轉
    const handleWheel = (event: any) => {
      const delta = event.deltaY * 0.005;
      angle += delta; // 調整角度以旋轉

      const newPositionZ = camera.position.z + delta * 5; // 計算新的Z位置以進行縮放
      // 限製相機的z位置，防止過於接近或遠離模型
      camera.position.z = Math.min(Math.max(newPositionZ, 1), 10);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={mountRef} className="h-[100vh] w-full"/>
      <div className="h-[100vh]">這放第1個展示</div>
      <div className="h-[100vh]">這放第2個展示</div>
      <div className="h-[100vh]">這放第3個展示</div>
      <div className="h-[100vh]">這放第3個展示</div>
      <div id="home" className="h-[100vh]">home 頁面</div>
      <div id="pricing" className="h-[100vh]">pricing 頁面</div>
      <div id="faq" className="h-[100vh]">faq 頁面</div>
      <footer className="h-[30vh]"> 放頁尾連結</footer>
    </>
  )
};

export default Home;
