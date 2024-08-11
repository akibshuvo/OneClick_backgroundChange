import { useState } from 'react';
import man from './assets/nam.png';


function App() {
  const [bgColor, setBgColor] = useState('bg-placeholderColor');
  
  const handleColorChange = (color) => {
    setBgColor(color); 
  };

  return (
    <>
      <div className={`w-full flex justify-center h-screen  ${bgColor}`}>
        <div>
        
            <img className="w-[800px] h-[800px]" src={man} alt="man" />
        

          <div className="flex justify-center gap-x-3  w-full bg-blueWhite p-4 shadow-xl rounded-3xl border border-borderColor">
            <button onClick={() => handleColorChange('bg-mainColor')} className=" px-10 py-4 text-whiteColor border border-borderColor  bg-mainColor  rounded-lg"></button>
            <button onClick={() => handleColorChange('bg-whiteColor')} className=" px-10 py-4 text-textColor  border border-borderColor  bg-whiteColor  rounded-lg"></button>
            <button onClick={() => handleColorChange('bg-priceColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-priceColor  rounded-lg"></button>
            <button onClick={() => handleColorChange('bg-iconColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-iconColor  rounded-lg"></button>
            <button onClick={() => handleColorChange('bg-shareColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-shareColor  rounded-lg"></button>
            <button onClick={() => handleColorChange('bg-btnColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-btnColor  rounded-lg"> </button>
            <button onClick={() => handleColorChange('bg-bgColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-bgColor  rounded-lg"></button>

          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;













// import { useState } from 'react';
// import man from './assets/nam.png';
// import man1 from './assets/akib.png';

// function App() {
//   const [bgColor, setBgColor] = useState('bg-placeholderColor');
  
//   const handleColorChange = (color) => {
//     setBgColor(color);
//   };

//   return (
//     <>
//     <div className='flex justify-center  bg-blueWhite h-screen'>
// <div>
//       <div className={` w-[800px] h-[800px] flex justify-center items-center rounded-full border border-borderColor mt-2 ${bgColor}`}>
//             <img className="w-[650px] h-[650px]" src={man} alt="man" />
//         </div>
//          <div className="flex justify-center gap-x-3 mt-5 w-full bg-blueWhite p-4 shadow-xl rounded-3xl border border-borderColor">
//             <button onClick={() => handleColorChange('bg-mainColor')} className=" px-10 py-4 text-whiteColor border border-borderColor  bg-mainColor  rounded-lg"></button>
//             <button onClick={() => handleColorChange('bg-whiteColor')} className=" px-10 py-4 text-textColor  border border-borderColor  bg-whiteColor  rounded-lg"></button>
//             <button onClick={() => handleColorChange('bg-priceColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-priceColor  rounded-lg"></button>
//             <button onClick={() => handleColorChange('bg-iconColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-iconColor  rounded-lg"></button>
//             <button onClick={() => handleColorChange('bg-shareColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-shareColor  rounded-lg"></button>
//             <button onClick={() => handleColorChange('bg-btnColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-btnColor  rounded-lg"> </button>
//             <button onClick={() => handleColorChange('bg-bgColor')} className=" px-10 py-4 text-whiteColor border border-borderColor bg-bgColor  rounded-lg"></button>

//           </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default App;