import { motion } from "framer-motion";
import { FaHome, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function NotAuthorized() {
    const naviagte = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center"
    >
      <FaLock className="text-6xl text-red-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4" aria-label="403 - Access Denied">
        403 - Not Authorized
      </h1>
      <p className="text-gray-600 mb-8" aria-label="Explanation for access denial">
      Sorry, you do not have permission to access this resource.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        aria-label="Go back to homepage"
        onClick={() => naviagte("/")}
      >
        <FaHome className="mr-2"  />
        Go to Homepage
      </motion.button>
    </motion.div>
    <div className="absolute inset-0 bg-opacity-50 bg-gray-200 -z-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
  </div>
  )
}

export default NotAuthorized