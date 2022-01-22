import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MoveBox1 = () => {
  const Ref = useRef(null);
  /** case1 */
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: Ref.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);
  return (
    <>
      <canvas ref={Ref} />
    </>
  );
};

export const MoveBox2 = () => {
  const Ref = useRef(null);
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: Ref.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);
  return (
    <>
      <canvas ref={Ref} />
    </>
  );
};

export const MoveBox3 = () => {
  const Ref = useRef(null);
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: Ref.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.1;
      box.rotation.x += 0.1;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);
  return (
    <>
      <canvas ref={Ref} />
    </>
  );
};

export const MoveBox4 = () => {
  const Ref = useRef(null);
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: Ref.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 1;
      box.rotation.x += 1;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);
  return (
    <>
      <canvas ref={Ref} />
    </>
  );
};

export const MoveBox5 = () => {
  const Ref = useRef(null);
  /** case5 */
  // ここでは箱をたくさん作りたいので、箱を作っている処理のみ、関数化する。
  /** 箱をつくる */
  const createBoxFunc = (): THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshNormalMaterial
  > => {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    return box;
  };
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: Ref.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    let boxes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>[] =
      new Array(200).fill(null).map((_) => createBoxFunc());

    boxes.forEach((v, i) => {
      v.position.x = Math.floor(Math.random() * 1200 - 600);
      v.position.y = Math.floor(Math.random() * 1200 - 600);
      v.position.x = Math.floor(Math.random() * 1200 - 600);
    });
    scene.add(...boxes);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      boxes.forEach((v) => {
        v.rotation.y += 0.01;
        v.rotation.x += 0.01;
      });
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);
  return (
    <>
      <canvas ref={Ref} />
    </>
  );
};
