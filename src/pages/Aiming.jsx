export default function Aiming() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-16">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center mt-10">
        Project Aiming
      </h1>

      <div className="bg-gray-650 border border-blue-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
        <ul className="list-disc ml-6 space-y-4 text-gray-550 text-lg leading-relaxed">
          <li className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-105">
            Design an automatic color sorting robotic system.
          </li>
          <li className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-105">
            Improve accuracy using color sensors.
          </li>
          <li className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-105">
            Apply robotics in industrial automation.
          </li>
          <li className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-105">
            Integrate hardware and software effectively.
          </li>
        </ul>
      </div>

      {/* Services / What I Provide Section */}
      <div className="space-y-12" id="service">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mt-3 text-blue-400">
            What I Provide For You
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <i className="fa-regular fa-code text-blue-400 text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold text-blue-600">
                Automation
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Replace repetitive sorting with fast, reliable robotics.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <i className="fa-light fa-palette text-green-400 text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold text-green-600">
                Zero Errors
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Eliminate human mistakes in categorization, specifically for
              university library systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <i className="fa-light fa-print text-yellow-400 text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold text-yellow-600">
                Automated Sorting System
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Connect Computer Vision (software) with Mechanical Motion
              (hardware)
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <i className="fa-regular fa-handshake text-purple-400 text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold text-purple-600">
                System Efficiency & Reliability
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Focusing on system stability, precision, and reliability to
              support continuous operation in industrial and warehouse
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
