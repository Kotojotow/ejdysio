import React, { useState, useEffect } from 'react';
import { Link,  } from 'react-router-dom';
import './Appwidget1.css'

function AppWidget1() {
  const [flexdirection, setFlexdirection] = useState('row');
  const [imgwidth, setImagewidth ] = useState('60%');
  const [labelwidth, setLabelwidth ] = useState('60%');

  const imgStyle = {
    height: "auto",
    position: "relative",
    width: "100%",
    borderRadius: '50%'
  }
  const containerStyle = {
    display: "flex",
    backgroundColor: "rgb(243, 243, 228)",
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
        setFlexdirection('column');
        setImagewidth('100%');
        setLabelwidth('100%');
      } else {
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
    <div className="container" style={containerStyle}>
      <div className='imgcontainer' style={imgContainerstyle}>
        <img src="logo.webp" alt="Strona Główna" style={imgStyle} />
      </div>
      <div className="label" style={labelStyle}>
        <h2>Aplikacja do układania Grafiku!</h2>
        <p>Wypróbuj narzędzie do układania grafiku w twojej firmie. Wprowadź dane pracowników, kilka informacji oraz spersonalizowane opcje, aby w kilka chwil otrzymać gotowy grafik!</p>
        <Link to="grafik"><button>Wypróbuj!</button></Link>
      </div>
    </div>
  );
}

export default AppWidget1;