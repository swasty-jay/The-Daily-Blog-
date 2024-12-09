import React from "react";
import { Link } from "react-router-dom";
import Technology from ".././assets/images/Technology.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-white text-black px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Breaking News Section --> */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Breaking News</h2>
            <div className="relative">
              <img
                src={Technology}
                alt={Technology}
                className="w-full rounded-md"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded uppercase">
                  Breaking
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <Link to="/technology">
                  <span className="bg-orange-500 bg-opacity-75 text-xs font-bold px-3 py-1 rounded uppercase">
                    Technology
                  </span>
                </Link>
                <h3 className="mt-2 text-2xl font-bold">
                  Congue Quisque Egestas Diam Arcu Euismod
                </h3>
                <p className="text-sm text-gray-400 mt-1">Nov 14, 2023</p>
              </div>
            </div>
          </div>

          {/* <!-- Popular Now Section --> */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Popular Now</h2>
            <div className="space-y-6">
              {/* <!-- Popular Item --> */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Popular News"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded uppercase">
                    Travel
                  </span>
                  <h3 className="font-bold mt-1">
                    Pellentesque Elitget Bravida Cum Sociis Natoque
                  </h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              {/* <!-- Repeat for more popular items --> */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Popular News"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded uppercase">
                    Science
                  </span>
                  <h3 className="font-bold mt-1">
                    Turpis Egestas Sed Tempus Urna Pharetra
                  </h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Popular News"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded uppercase">
                    <Link>Football</Link>
                  </span>
                  <h3 className="font-bold mt-1">
                    Turpis Egestas Sed Tempus Urna Pharetra
                  </h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Popular News"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <span className="bg-orange-500 text-xs font-bold px-2 py-1 rounded uppercase">
                    Economy
                  </span>
                  <h3 className="font-bold mt-1">
                    Minulla Posuere Sollicitudin Aliquam Ultrices Sagittis
                  </h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
