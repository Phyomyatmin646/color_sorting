export default function UserGuideline() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-10 mt-10 text-center">
        User Guideline
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE : TEXT */}
        <div className="bg-white dark:bg-gray-800 border border-blue-900 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-4">
            How to Use the System
          </h2>

          <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
            <li>Power on the system and ensure the controller is active.</li>
            <li>Place the object under the color sensor.</li>
            <li>The sensor detects the object color automatically.</li>
            <li>The robotic arm moves to the correct position.</li>
            <li>The object is sorted into the appropriate location.</li>
          </ol>
        </div>

        {/* RIGHT SIDE : IMAGE + VIDEO */}
        <div className="space-y-6">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-blue-900">
            <img
              src="v1.jpg"
              alt="User Guideline Illustration"
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>

          {/* Video */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-blue-900">
            <video
              src="v.mp4"
              controls
              className="w-full h-56 md:h-64 object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
