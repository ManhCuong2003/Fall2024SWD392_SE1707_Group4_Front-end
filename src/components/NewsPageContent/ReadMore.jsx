import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("general");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && document.activeElement.tagName === "A") {
        event.preventDefault();
        document.activeElement.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const sections = [
    { id: "general", title: "General Information" },
    { id: "history", title: "History" },
    { id: "significance", title: "Significance" },
    { id: "colors", title: "Colors and Variations" },
    { id: "care", title: "Care Tips" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-4xl font-bold mb-2">The World of Koi Fish</h1>
          <p className="text-xl">Discover the beauty and serenity of these magnificent creatures</p>
        </header>

        <nav className="bg-blue-500 p-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section.id);
                    scrollToSection(section.id);
                  }}
                  className={`text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-3 py-2 transition duration-300 ${
                    activeSection === section.id ? "bg-blue-700" : ""
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="p-6">
          <section id="general" className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">General Information</h2>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7"
                alt="Colorful Koi fish"
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 transition duration-300 transform hover:scale-105"
              />
              <p className="text-gray-700 leading-relaxed">
                Koi fish, also known as Nishikigoi, are colorful varieties of the Amur carp. These ornamental fish are renowned for their vibrant colors, patterns, and longevity. Koi can grow to impressive sizes and are often kept in outdoor ponds or water gardens, adding a touch of elegance and tranquility to any landscape.
              </p>
            </div>
          </section>

          <section id="history" className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">History</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The history of Koi fish dates back to ancient China, where they were originally farmed for food. However, it was in Japan during the 1820s that the breeding of Koi for their aesthetic qualities began. Through selective breeding, Japanese farmers developed the vibrant colors and patterns we associate with Koi today.
            </p>
          </section>

          <section id="significance" className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Significance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Koi fish hold great cultural significance in Japanese and Chinese cultures. They are often associated with good fortune, success, and perseverance. In Japanese culture, Koi are admired for their strength and determination, as symbolized by the legend of the Koi climbing the waterfall at Dragon Gate.
            </p>
          </section>

          <section id="colors" className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Colors and Variations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Koi come in a wide array of colors and patterns, each with its own name and classification. Some popular varieties include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Kohaku: White body with red markings</li>
              <li>Taisho Sanshoku: White body with red and black markings</li>
              <li>Showa Sanshoku: Black body with red and white markings</li>
              <li>Bekko: Solid-colored body with black spots</li>
              <li>Utsuri: Black body with white, red, or yellow markings</li>
            </ul>
          </section>

          <section id="care" className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Care Tips</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Proper care is essential for maintaining healthy and vibrant Koi fish. Here are some key care tips:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Provide a spacious pond with proper filtration and aeration</li>
              <li>Maintain water quality through regular testing and water changes</li>
              <li>Feed a balanced diet of high-quality Koi food</li>
              <li>Monitor for signs of illness and seek veterinary care when needed</li>
              <li>Protect from predators with netting or other deterrents</li>
            </ul>
          </section>

          <div className="mt-8">
            <button
              onClick={toggleExpanded}
              className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 transition duration-300"
            >
              {expanded ? "Read Less" : "Read More"}
              {expanded ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
          </div>

          {expanded && (
            <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-inner transition-all duration-500 ease-in-out">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Additional Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Koi fish are not only beautiful to look at but also have impressive lifespans. With proper care, they can live for several decades, with some specimens reportedly living over 100 years. This longevity, combined with their graceful movements and stunning appearance, makes Koi a popular choice for pond enthusiasts and collectors worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Keeping Koi can be a rewarding hobby that combines elements of art, science, and meditation. The process of selecting, raising, and caring for these living jewels can provide a sense of peace and connection to nature. Many Koi keepers find joy in watching their fish grow and develop over the years, forming a bond with these intelligent and responsive creatures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you a seasoned Koi enthusiast or just beginning to explore the world of these magnificent fish, there always something new to learn and appreciate about Koi. Their beauty, symbolism, and the tranquil environments they inhabit continue to captivate people around the world, making Koi fish a true living art form.
              </p>
            </div>
          )}
        </main>

        <footer className="bg-blue-600 text-white p-6 mt-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} The World of Koi Fish. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ReadMore;
