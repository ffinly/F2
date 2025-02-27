---
title: 如何在 Node.js 中使用
order: 14
---

## 配置 jsx transform

详见：[配置 jsx transform](./jsx-transform)

## Usage

```jsx
import { Canvas, Chart, Interval, Axis } from '@antv/f2';
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const { props } = (
  <Canvas context={ctx} pixelRatio={1} animate={false}>
    <Chart data={data}>
      <Axis field="genre" />
      <Axis field="sold" />
      <Interval x="genre" y="sold" color="genre" />
    </Chart>
  </Canvas>
);

const fcanvas = new Canvas(props);
fcanvas.render();

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'chart.png'))); // 导出图片
```

**完整示例可参考**

- https://github.com/antvis/F2/tree/master/packages/node/examples
