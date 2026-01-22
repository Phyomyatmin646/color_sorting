import { useState } from "react";

export default function Structure() {
  const images = ["c.jpg", "code.jpg"];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 text-center mb-10 mt-10">
          System Structure
        </h1>

        <div className="bg-white dark:bg-gray-800 border border-blue-900 rounded-xl p-6 shadow-md">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            The system consists of a color sensor, microcontroller, servo
            motors, power supply, and a robotic arm mechanism working together.
          </p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section
        className="py-12 md:py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-9b0b3c1e1d38?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 bg-white/70 dark:bg-gray-900/70 py-8 rounded-lg">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 mb-10">
            Problem Statement
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 mb-10">
            <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-sm md:text-base text-left">
              <li>
                Technological University library handles thousands of
                specialized books daily. Manual sorting is:
              </li>
              <li>
                • <b>Time-Consuming</b>: Students and staff spend hours
                returning books.
              </li>
              <li>
                • <b>Prone to Error</b>: Misplaced books make resources
                difficult to find.
              </li>
              <li>
                • <b>Inefficient</b>: Manual labor could be used for research
                instead.
              </li>
            </ul>
          </div>

          {/* Image Slider */}
          <div className="relative w-full max-w-3xl mx-auto">
            <img
              src={images[index]}
              alt="Problem Illustration"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg transition-all duration-500"
            />

            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-900/70 text-white px-3 py-2 rounded-full hover:bg-blue-900"
            >
              ◀
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-900/70 text-white px-3 py-2 rounded-full hover:bg-blue-900"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 text-center mb-12">
            Our Solution
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-900 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-400">
                Our Thinking
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Robots should see and react, not just follow fixed paths. Smart,
                low-cost, and adaptive logic is our focus.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-900 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-400">
                Benefits
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Faster sorting, reduced human error, and improved operational
                efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-900 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-400">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Automate sorting, eliminate errors, and bridge software with
                robotics hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
