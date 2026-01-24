import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
        {/* Text */}

        <div className="flex-1 text-center md:text-left">
          <h1 className="tech-title text-5xl md:text-6xl font-extrabold text-blue-400 mb-6">
            Intelligence Color Sorting <br /> Robotic Arm
          </h1>
          <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
            <p className="text-gray-550 leading-relaxed">
              This project is developed as a university-level robotic system
              focusing on automation and embedded technologies. It demonstrates
              how sensors, microcontrollers, and mechanical systems can be
              integrated to solve real-world industrial problems such as object
              sorting.
            </p>
          </div>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/structure"
              className="px-6 py-3 rounded bg-blue-800 hover:bg-blue-400 transition shadow-lg shadow-blue-900/50"
            >
              System Structure
            </Link>
            <Link
              to="/hardware"
              className="px-6 py-3 rounded border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition"
            >
              Hardware & Software
            </Link>
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
    <div className="bg-gray-650 border border-blue-900 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-900/40 transition">
      <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-550 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
