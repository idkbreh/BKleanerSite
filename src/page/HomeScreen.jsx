import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavigatorBar/Navigator';
import '../index.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { isAuthTokenValid } from '../constant/isAuthenCheck';
import NavbarLogin from '../components/NavigatorBar/Navigators';

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isCounting) {
        setIsCounting(true);
        startCounting();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCounting]);

  const startCounting = () => {
    const start = countRef.current;
    const end = 13000000;
    const duration = 3000; // 3 seconds
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  };
const check = isAuthTokenValid()
if(check == false){
  return (
    <>
      <Navbar />
      <div className="content bottom">
        <h1 className="title">
          <span className="green">BKLeaner</span>ยินดีต้อนรับและ สวัสดีเจ้าหน้าที่ครับ
        </h1>
           {/* <div className="counter">
          {count.toLocaleString()} ล้าน
        </div> */}
        <Button className="h2" type="default"><Link to="/login">เจ้าหน้าเข้าสู่ระบบ</Link></Button>
        <Button danger className="h2" type="default">ติดต่อปัญหา</Button>
      </div>
    </>
  );
}else{
  return(
    <>
    <NavbarLogin />
    <div className="content bottom">
      <h1 className="">
        LIVE VIDEO FROM MACHINE
      </h1>
      <img className='res'   src="https://placehold.co/600x400"></img>
         {/* <div className="counter">
        {count.toLocaleString()} ล้าน
      </div> */}
    </div>
  </>
  )
}
}

export default App;
