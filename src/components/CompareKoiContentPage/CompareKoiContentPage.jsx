import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaExchangeAlt, FaCheckCircle } from "react-icons/fa";

const CompareKoiContentPage = () => {
  const [selectedKoi, setSelectedKoi] = useState([]);
  const [error, setError] = useState("");

  const koi = [
    {
      id: 1,
      name: "Golden Butterfly",
      image: "https://i.pinimg.com/236x/f6/d1/b1/f6d1b19d36959167d440df36652c86dd.jpg",
      size: "30 cm",
      color: "Gold and White",
      pattern: "Butterfly",
      type: "Kohaku"
    },
    {
      id: 2,
      name: "Red Emperor",
      image: "https://i.pinimg.com/236x/f6/d1/b1/f6d1b19d36959167d440df36652c86dd.jpg",
      size: "35 cm",
      color: "Red and White",
      pattern: "Step",
      type: "Sanke"
    },
    {
      id: 3,
      name: "Black Pearl",
      image: "https://i.pinimg.com/236x/f6/d1/b1/f6d1b19d36959167d440df36652c86dd.jpg",
      size: "28 cm",
      color: "Black and Orange",
      pattern: "Doitsu",
      type: "Utsuri"
    }
  ];

  const handleKoiSelection = (koiId) => {
    if (selectedKoi.includes(koiId)) {
      setSelectedKoi(selectedKoi.filter((id) => id !== koiId));
    } else if (selectedKoi.length < 2) {
      setSelectedKoi([...selectedKoi, koiId]);
    } else {
      setError("You can only compare two koi at a time.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const DraggableKoiCard = ({ koi, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "KOI",
      item: { id: koi.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "KOI",
      hover: (item, monitor) => {
        if (item.index !== index) {
          const newSelectedKoi = [...selectedKoi];
          const dragIndex = newSelectedKoi.indexOf(item.id);
          const hoverIndex = newSelectedKoi.indexOf(koi.id);
          newSelectedKoi[dragIndex] = koi.id;
          newSelectedKoi[hoverIndex] = item.id;
          setSelectedKoi(newSelectedKoi);
        }
      },
    });

    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`bg-white rounded-lg shadow-md p-4 mb-4 transition-all ${isDragging ? "opacity-50" : "opacity-100"} ${selectedKoi.includes(koi.id) ? "border-4 border-blue-500" : ""}`}
        onClick={() => handleKoiSelection(koi.id)}
        role="button"
        tabIndex="0"
        aria-pressed={selectedKoi.includes(koi.id)}
        onKeyPress={(e) => e.key === "Enter" && handleKoiSelection(koi.id)}
      >
        <img src={koi.image} alt={koi.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-bold mb-2">{koi.name}</h3>
        <p><strong>Kích cỡ:</strong> {koi.size}</p>
        <p><strong>Màu sắc:</strong> {koi.color}</p>
        <p><strong>Mẫu:</strong> {koi.pattern}</p>
        <p><strong>Kiểu:</strong> {koi.type}</p>
        {selectedKoi.includes(koi.id) && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
            <FaCheckCircle size={20} />
          </div>
        )}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container_CompareKoi mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">So sánh Koi</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            <h2 className="text-2xl font-semibold mb-4">Chọn cá Koi</h2>
            {koi.map((k, index) => (
              <DraggableKoiCard key={k.id} koi={k} index={index} />
            ))}
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">So sánh</h2>
            <div className="flex flex-col md:flex-row justify-between">
              {selectedKoi.map((id) => {
                const selectedKoiData = koi.find((k) => k.id === id);
                return (
                  <div key={id} className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:mr-2">
                    <img src={selectedKoiData.image} alt={selectedKoiData.name} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">{selectedKoiData.name}</h3>
                    <p><strong>Kích cỡ:</strong> {selectedKoiData.size}</p>
                    <p><strong>Màu sắc:</strong> {selectedKoiData.color}</p>
                    <p><strong>Mẫu:</strong> {selectedKoiData.pattern}</p>
                    <p><strong>Kiểu:</strong> {selectedKoiData.type}</p>
                    <textarea
                      className="w-full mt-4 p-2 border rounded"
                      placeholder="Additional notes..."
                      rows="3"
                      aria-label={`Additional notes for ${selectedKoiData.name}`}
                    ></textarea>
                  </div>
                );
              })}
              {selectedKoi.length === 1 && (
                <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-gray-500">Chọn cá Koi còn lại</p>
                </div>
              )}
              {selectedKoi.length === 0 && (
                <div className="w-full bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-gray-500">Chọn 2 cá Koi để so sánh</p>
                </div>
              )}
            </div>
            {selectedKoi.length === 2 && (
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center w-full"
                onClick={() => console.log("Comparison submitted")}
              >
                <FaExchangeAlt className="mr-2" />
                Xác nhận so sánh
              </button>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default CompareKoiContentPage;