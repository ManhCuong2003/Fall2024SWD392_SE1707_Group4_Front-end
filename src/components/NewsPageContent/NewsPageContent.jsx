import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaHeart, FaShareAlt } from "react-icons/fa";

const NewsPageContent = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");

  const articlesPerPage = 6;
  const categories = ["All", "New Arrivals", "Events", "Tips"];

  useEffect(() => {
    // Simulating API call to fetch articles
    const fetchedArticles = [
      {
        id: 1,
        title: "New Koi Varieties Arrive at Our Shop",
        excerpt: "Discover the latest and most beautiful Koi fish varieties that have just arrived at our shop.",
        image: "https://i.pinimg.com/236x/27/b4/99/27b4994916fff954f624923815d0cd87.jpg",
        date: "2023-05-15",
        category: "New Arrivals"
      },
      {
        id: 2,
        title: "Annual Koi Show: Join Us This Weekend",
        excerpt: "Don't miss our annual Koi show featuring prize-winning fish and expert talks on Koi care.",
        image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9",
        date: "2023-05-20",
        category: "Events"
      },
      {
        id: 3,
        title: "5 Essential Tips for Koi Pond Maintenance",
        excerpt: "Learn the top 5 tips from our experts on how to maintain a healthy and beautiful Koi pond.",
        image: "https://images.unsplash.com/photo-1526657782461-9fe13402a841",
        date: "2023-05-25",
        category: "Tips"
      },
      {
        id: 4,
        title: "Introducing Our New Koi Food Line",
        excerpt: "Check out our new premium Koi food line, designed to enhance color and promote health.",
        image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf",
        date: "2023-05-30",
        category: "New Arrivals"
      },
      {
        id: 5,
        title: "Koi Breeding Workshop Next Month",
        excerpt: "Join our expert-led workshop on Koi breeding techniques and genetic selection.",
        image: "https://i.pinimg.com/236x/27/b4/99/27b4994916fff954f624923815d0cd87.jpg",
        date: "2023-06-05",
        category: "Events"
      },
      {
        id: 6,
        title: "Understanding Koi Fish Behavior",
        excerpt: "Dive into the fascinating world of Koi behavior and learn how to interpret their actions.",
        image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d",
        date: "2023-06-10",
        category: "Tips"
      },
      {
        id: 7,
        title: "Rare Koi Varieties: A Collector's Guide",
        excerpt: "Explore the rarest and most sought-after Koi varieties in this comprehensive guide.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        date: "2023-06-15",
        category: "Tips"
      },
      {
        id: 8,
        title: "Summer Koi Care: Keeping Your Fish Healthy in Hot Weather",
        excerpt: "Learn essential tips for maintaining your Koi's health during the hot summer months.",
        image: "https://i.pinimg.com/236x/27/b4/99/27b4994916fff954f624923815d0cd87.jpg",
        date: "2023-06-20",
        category: "Tips"
      }
    ];
    setArticles(fetchedArticles);
    setFilteredArticles(fetchedArticles);
  }, []);

  useEffect(() => {
    const results = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || article.category === selectedCategory)
    );
    setFilteredArticles(results);
    setCurrentPage(1);
    setError(results.length === 0 ? "No articles found matching your criteria." : "");
  }, [searchTerm, selectedCategory, articles]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container_newsPage mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Tin tức</h1>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm bài báo..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search articles"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-8">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:text-red-600"
                    aria-label="Like article"
                  >
                    <FaHeart />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-600"
                    aria-label="Share article"
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Đọc thêm
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 disabled:opacity-50"
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {Math.ceil(filteredArticles.length / articlesPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredArticles.length / articlesPerPage)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 disabled:opacity-50"
          aria-label="Next page"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NewsPageContent;