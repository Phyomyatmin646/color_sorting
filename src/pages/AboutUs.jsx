export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">
        About This Project
      </h1>

      <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
        <p className="text-gray-550 leading-relaxed">
          This project is developed as a university-level robotic system
          focusing on automation and embedded technologies. It demonstrates how
          sensors, microcontrollers, and mechanical systems can be integrated to
          solve real-world industrial problems such as object sorting.
        </p>
      </div>

      <section>
        <h1 className="tech-title text-4xl mt-10 text-center md:text-left">
          Our Team Members
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Su Mon Thwe\nLeader"}
          >
            <img
              src="/SMT2.jpg"
              className="w-32 md:w-48 lg:w-60 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Phyo Myat Min\nTeam Member"}
          >
            <img
              src="/PMM2.jpg"
              className="w-32 md:w-48 lg:w-85 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Hnin Mon Kyaw\nTeam Member"}
          >
            <img
              src="/HMK.png"
              className="w-32 md:w-48 lg:w-45 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Phoo Ei Shwe Sin \nTeam Member"}
          >
            <img
              src="/PE.png"
              className="w-32 md:w-48 lg:w-42 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Thwel Hmue Eain\nTeam Member"}
          >
            <img
              src="/THE.jpg"
              className="w-32 md:w-48 lg:w-42 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Thandar Htet Aung\nTeam Member"}
          >
            <img
              src="/TDHA.jpg"
              className="w-32 md:w-48 lg:w-56 object-contain"
            />
          </div>

          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Thida Aye Min\nTeam Member"}
          >
            <img
              src="/robotic-arm.png"
              className="w-32 md:w-48 lg:w-56 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
