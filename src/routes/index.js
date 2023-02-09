import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  qrCode1,
  qrCode10,
  qrCode11,
  qrCode12,
  qrCode13,
  qrCode14,
  qrCode15,
  qrCode2,
  qrCode20,
  qrCode21,
  qrCode22,
  qrCode23,
  qrCode24,
  qrCode25,
  qrCode26,
  qrCode27,
  qrCode28,
  qrCode29,
  qrCode30,
  qrCode3,
  qrCode4,
  qrCode5,
  qrCode6,
  qrCode7,
  qrCode8,
  qrCode9,
} from "./routeMap";
import { QrCode1 } from "../pages/QrCode1";
import { QrCode2 } from "../pages/QrCode2";
import { QrCode3 } from "../pages/QrCode3";
import { QrCode4 } from "../pages/QrCode4";
import { QrCode5 } from "../pages/QrCode5";
import { QrCode6 } from "../pages/QrCode6";
import { QrCode7 } from "../pages/QrCode7";
import { QrCode8 } from "../pages/QrCode8";
import { QrCode9 } from "../pages/QrCode9";
import { QrCode10 } from "../pages/QrCode10";
import { QrCode11 } from "../pages/QrCode11";
import { QrCode12 } from "../pages/QrCode12";
import { QrCode13 } from "../pages/QrCode13";
import { QrCode14 } from "../pages/QrCode14";
import { QrCode15 } from "../pages/QrCode15";
import { QrCode20 } from "../pages/QrCode20";
import { QrCode21 } from "../pages/QrCode21";
import { QrCode22 } from "../pages/QrCode22";
import { QrCode23 } from "../pages/QrCode23";
import { QrCode24 } from "../pages/QrCode24";
import { QrCode25 } from "../pages/QrCode25";
import { QrCode26 } from "../pages/QrCode26";
import { QrCode27 } from "../pages/QrCode27";
import { QrCode28 } from "../pages/QrCode28";
import { QrCode29 } from "../pages/QrCode29";

import { QrCode30 } from "../pages/QrCode30";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<div>Página inválida</div>} />
      <Route path={qrCode1} element={<QrCode1 />} />
      <Route path={qrCode2} element={<QrCode2 />} />
      <Route path={qrCode3} element={<QrCode3 />} />
      <Route path={qrCode4} element={<QrCode4 />} />
      <Route path={qrCode5} element={<QrCode5 />} />
      <Route path={qrCode6} element={<QrCode6 />} />
      <Route path={qrCode7} element={<QrCode7 />} />
      <Route path={qrCode8} element={<QrCode8 />} />
      <Route path={qrCode9} element={<QrCode9 />} />
      <Route path={qrCode10} element={<QrCode10 />} />
      <Route path={qrCode11} element={<QrCode11 />} />
      <Route path={qrCode12} element={<QrCode12 />} />
      <Route path={qrCode13} element={<QrCode13 />} />
      <Route path={qrCode14} element={<QrCode14 />} />
      <Route path={qrCode15} element={<QrCode15 />} />

      <Route path={qrCode20} element={<QrCode20 />} />
      <Route path={qrCode21} element={<QrCode21 />} />
      <Route path={qrCode22} element={<QrCode22 />} />
      <Route path={qrCode23} element={<QrCode23 />} />
      <Route path={qrCode24} element={<QrCode24 />} />
      <Route path={qrCode25} element={<QrCode25 />} />
      <Route path={qrCode26} element={<QrCode26 />} />
      <Route path={qrCode27} element={<QrCode27 />} />
      <Route path={qrCode28} element={<QrCode28 />} />
      <Route path={qrCode29} element={<QrCode29 />} />
      
      <Route path={qrCode30} element={<QrCode30 />} />
    </Routes>
  );
}
