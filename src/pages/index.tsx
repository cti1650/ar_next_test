import { Ar } from '@comp/ar/part';
import {
  MoveBox1,
  MoveBox2,
  MoveBox3,
  MoveBox4,
  MoveBox5,
} from '@comp/move/Box';
import React from 'react';

const Sample1 = () => {
  return (
    <>
      <h2>入門編 - sample1</h2>
      <h3>case1</h3>
      <MoveBox1 />
      <h3>case2 - ローテーションz軸方向追加</h3>
      <MoveBox2 />
      <h3>case3 - ローテーション速度up</h3>
      <MoveBox3 />
      <h3>case4 - さらにローテーション速度up</h3>
      <MoveBox4 />
      <h3>case5 - 箱増殖(200個)</h3>
      <MoveBox5 />
      <Ar />
    </>
  );
};

export default Sample1;
