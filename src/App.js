import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <div className="App container mx-auto">
      <a className="font-weight text-2xl font my-5 cursor-pointer" href="http://bagusnurhuda.com">Bagus Nurhuda - bagusn05@gmail.com - Associate Software Engineer </a>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 mx-6">
      {[...Array(10)].map((x, i) =>
        <div className="max-w-sm rounded-xl shadow-lg container">
        <img className="w-full" src={require('./img/gambar1.jpg')} alt="Mountain" />
        <div className="px-4 pt-2 ">
          <div className='flex justify-start'>
            <div className="font-bold text-xl mb-2 ">Living English Pioneer (1-Month Free)</div>
          </div>          
          <div className='flex justify-start'>
              <p className="text-gray-700 text-base">
                Oleh Sekolah.mu
              </p>
            </div>
          
        </div>
        <div className='flex justify-start items-center px-4'>
          <div className='w-1/4 '>
            <img className="justify-center" src={require('./img/bintang.png')} />
          </div>
          <span className="text-gray-400 font-medium pl-1">4.87</span>
          <span className="text-gray-400 font-medium pl-1">(1051)</span>
        </div>
        <div className="px-4 pt-2 pb-2">
          <span className="inline-block text-sm font-semibold  mr-2 mb-2 flex flex-start text-lg">
            GRATIS
          </span>
        </div>
      </div>
      )}
      </div>
        
      
         
      
     
      

    </div>
  );
}

export default App;
