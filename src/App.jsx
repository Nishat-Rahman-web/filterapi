import { useState } from 'react';
import './App.css';
import products from './productData';

function App() {
  const [data, setData] = useState(products);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleButton = (category) => {
    const filteredData = category === 'all' ? products : products.filter(item => item.category.toLowerCase() === category.toLowerCase());
    setData(filteredData);
    setActiveCategory(category); // Update active category state
  };

  return (
    <>
      <nav className="nav">
        <header className="header py-8 px-10 flex justify-between items-center mb-10 mt-10">
          <h1 className="text-3xl font-bold font-kanit text-white">Collection</h1>
          <div className=" font-kanit flex gap-3">
            <button onClick={() => handleButton('all')} className={`btn ${activeCategory === 'all' ? 'active' : ''}`}>All</button>
            <button onClick={() => handleButton('bus')} className={`btn ${activeCategory === 'bus' ? 'active' : ''}`}>Bus</button>
            <button onClick={() => handleButton('truck')} className={`btn ${activeCategory === 'truck' ? 'active' : ''}`}>Truck</button>
            <button onClick={() => handleButton('bike')} className={`btn ${activeCategory === 'bike' ? 'active' : ''}`}>Bike</button>
          </div>
        </header>
        <div className="container">
          <main className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5 bg-gray-100 rounded-lg shadow-lg">
            {data.map(item => (
              <div key={item.id} className={`card bg-white rounded-lg shadow-md overflow-hidden transform transition-transform ${activeCategory !== 'all' ? 'animate-card' : ''}`}>
                <div className="image relative">
                  {item.discount_price && (
                    <div className="badge absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-md">
                      <p className="text-sm font-bold">Sale</p>
                    </div>
                  )}
                  <img className="w-full h-56 object-cover" src={item.car_image} alt={item.car_name} />
                </div>
                <div className="info p-5">
                  <h2 className="text-xl font-bold font-kanit text-gray-700">{item.car_name}</h2>
                  <p className="text-lg font-kanit text-orange-500">${item.discount_price || item.car_price}</p>
                  {item.discount_price && <p className="line-through text-gray-500">${item.car_price}</p>}
                </div>
              </div>
            ))}
          </main>
        </div>
      </nav>
    </>
  );
}

export default App;
