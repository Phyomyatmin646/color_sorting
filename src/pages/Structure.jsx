export default function Structure() {
  return (
    <div className=" text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 text-center mb-10">
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
        className="py-12 md:py-16 text-blue-900 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-9b0b3c1e1d38?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 bg-white/70 dark:bg-gray-900/70 py-8 rounded-lg">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 text-center mb-10">
            Problem Statement
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-1 hover:translate-x-1">
            <p className="text-gray-800 dark:text-gray-200 text-justify text-sm md:text-base leading-relaxed">
              In many industrial settings, manual sorting of colored objects is
              time-consuming and prone to errors. This project aims to automate
              the sorting process using a robotic arm equipped with a color
              sensor, enhancing efficiency and accuracy in material handling
              tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Small Nuclear Reactor Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-400 text-center mb-12">
            Small Nuclear Reactor for Agriculture
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-1 hover:translate-x-1">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">
                Our Thinking
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                By choosing Small Nuclear Reactors, we aim to provide reliable,
                clean energy that supports irrigation, food processing, and
                sustainable farming. This solution balances modern technology
                with local needs, ensuring safety, efficiency, and long-term
                community benefits.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-1 hover:translate-x-1">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">
                Benefits for Agriculture
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span> Reliable power
                  for irrigation systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span> Energy for food
                  processing facilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span> Power for
                  agricultural research centers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span> Support for cold
                  storage facilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span> Clean energy for
                  sustainable farming
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900 transition-all duration-300 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-1 hover:translate-x-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                To revolutionize agriculture in Chin State through clean nuclear
                energy, enhancing food security, supporting local farmers, and
                promoting sustainable development in the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
