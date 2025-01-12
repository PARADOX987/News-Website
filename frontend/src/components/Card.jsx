import React from 'react';

const Card = ({ data }) => {
  if (!data) {
    return <p className="text-center text-gray-600">Loading news...</p>;
  }

  if (data.length === 0) {
    return <p className="text-center text-gray-600">No news available for the search term.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data.map((curritem, index) => (
        curritem.urlToImage ? ( 
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={curritem.urlToImage}
              alt={curritem.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2
                className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
                onClick={() => window.open(curritem.url, '_blank')}
              >
                {curritem.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{curritem.description}</p>
              <button
                onClick={() => window.open(curritem.url, '_blank')}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </button>
            </div>
          </div>
        ) : null 
      ))}
    </div>
  );
};

export default Card;
