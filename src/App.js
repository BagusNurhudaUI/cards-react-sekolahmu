import logo from './logo.svg';
import './App.css';

function App() {
  const app = 10
  return (
    <div className="App container mx-auto">
      <h1 className="font-weight text-2xl font my-5">Bagus Nurhuda - bagusn05@gmail.com - Associate Software Engineer </h1>
      <div className="grid grid-cols-5 gap-4 mx-6">
      {[...Array(10)].map((x, i) =>
        <div className="max-w-sm rounded-xl shadow-lg container">
        <img className="w-full" src={require('./img/gambar1.jpg')} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Living English Pioneer (1-Month Free)</div>
          <p className="text-gray-700 text-base">
            Oleh Sekolah.mu
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
      )}
      </div>
        
      
         
      
     
      

    </div>
  );
}

export default App;
