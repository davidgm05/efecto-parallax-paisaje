
import { useEffect } from 'react';
import './App.css'




function App() {
    useEffect(() => {
        const handleScroll = () => {
          
            const img = document.querySelector('.img');
            const container = document.querySelector('.container-img');
            
            
            let offset = window.scrollY ;
            
            container.style.backgroundPositionY = offset * 0.5 + 'px';

            let scale = Math.max(1, 2 - (offset / 300)); 
            img.style.transform = `translate(-50%, -50%) scale(${scale})`;

          //   if (scale === 1) {
          //     title.style.animation = 'scrollAnimation 9s infinite';
          // } else {
          //     title.style.animation = 'none'; 
          // }

            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <>
      <div>

        <div className='container-img'>
          <div className='title'>DestinoDiverso</div>
            <div className='img'></div>
            <div className='second-section'></div>
            <div className='third-section'></div>
        </div>
      </div>
      </>
    );
}

export default App;




