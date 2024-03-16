import React, { useState, useEffect } from 'react';
import './Appwidget2.css'

function AppWidget2() {
  const [imageheight, setImageheight] = useState('100%');
  const [flexdirection, setFlexdirection] = useState('row');
  const [imgwidth, setImagewidth ] = useState('60%');
  const [labelwidth, setLabelwidth ] = useState('60%');

  const imgStyle = {
    height: imageheight,
    position: "relative",
    width: "100%",
    borderRadius: '50%'
  }
  const containerStyle = {
    display: "flex",
    backgroundColor: "rgb(237, 244, 248)",
    flexDirection: flexdirection,
    alignContent: "center",
    alignItems: 'center',
    justifyContent: "space-between",
    gap: "20px",
    zIndex: "20",
    padding: "20px",
    overflow: "hidden"
  }
  const labelStyle = {
    flexDirection: "column",
    display:"flex",
    width: labelwidth
  }
  const imgContainerstyle = {
    width: imgwidth,
    overflow: "hidden",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  }
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024) {
        setImageheight('auto');
        setFlexdirection('column');
        setImagewidth('100%');
        setLabelwidth('100%');
      } else {
        setImageheight('auto');
        setFlexdirection('row');
        setImagewidth('60%');
        setLabelwidth('40%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container2" style={containerStyle}>
      <div className="label" style={labelStyle}>
      <h2>Rozwiązania informatyczne</h2>
      <p>Jeżeli potrzebujesz zautomatyzować procesy w twojej firmie lub masz pomysł na ciekawy projekt z chęcią zajmę się realizacją twojej wizji!</p>
      <button>Sprawdź więcej!</button>
      </div>
      <div className='imgcontainer' style={imgContainerstyle}>
        <img src="img2.webp" alt="Strona Główna" style={imgStyle} />
      </div>
    </div>
  );
}

export default AppWidget2;