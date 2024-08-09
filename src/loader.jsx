import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IonIcon } from '@ionic/react';
import './index.css';

function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      gsap.to(loaderRef.current, {
        y: '-100%',
        duration: 2,
      });
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      {[...Array(20)].map((_, i) => (
        <span key={i} style={{ '--i': i + 1 }}></span>
      ))}
      <div className="plane">
        <ion-icon name="airplane-sharp" className="icon"></ion-icon>
      </div>
    </div>
  );
}

export default Loader;
