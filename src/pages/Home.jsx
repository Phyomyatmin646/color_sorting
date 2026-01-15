export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-6">
            Automatic Color Sorting <br /> Robotic Arm
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            A smart robotic system designed to detect object colors and sort them
            automatically using sensors, microcontrollers, and servo-driven
            robotic mechanisms.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="/structure"
              className="px-6 py-3 rounded bg-blue-800 hover:bg-blue-400 transition shadow-lg shadow-blue-900/50"
            >
              System Structure
            </a>
            <a
              href="/guideline"
              className="px-6 py-3 rounded border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition"
            >
              User Guideline
            </a>
          </div>
        </div>

        {/* Robotic Arm Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/robotic-arm.png"   
            alt="Robotic Arm"
            className="w-64 h-64 md:w-80 md:h-80 object-contain bg-blend-color"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Color Detection"
          text="Uses a color sensor to accurately identify object colors in real-time."
        />
        <FeatureCard
          title="Automatic Sorting"
          text="The robotic arm moves intelligently to place objects in correct positions."
        />
        <FeatureCard
          title="Embedded Control"
          text="Powered by microcontroller logic for precise and reliable operation."
        />
      </section>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="bg-gray-950 border border-blue-900 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-900/40 transition">
      <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

