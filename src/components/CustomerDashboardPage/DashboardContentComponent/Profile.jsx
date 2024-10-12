import { useState } from "react";
import { FaHeart, FaShare } from "react-icons/fa";

const Profile = () => {
  const [koi] = useState({
    name: "NGÂN",
    breed: "TUYẾT",
    Email: "Truongtuyetngan@.com",
    SĐT: "09462374",
    age: "23 years",
    Điachi: "Long An, TP Hochiminh",
  });

  const [liked, setLiked] = useState(false);
  
  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    // Implement share functionality here
    alert("Sharing functionality to be implemented");
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Customer Profile
          </div>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {koi.name}
          </h1>
          <p className="mt-4 text-xl text-gray-500">{koi.breed}</p>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {koi.Email}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">SĐT</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {koi.SĐT}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Age</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {koi.age}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Địa chỉ</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {koi.Điachi}
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="text-gray-700">
              <p>Your custom message or functionality goes here!</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleLike}
                className={`${liked ? "text-red-500" : "text-gray-500"} hover:text-red-500 transition-colors duration-300`}
              >
                <FaHeart size={24} />
              </button>
              <button
                onClick={handleShare}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaShare size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
