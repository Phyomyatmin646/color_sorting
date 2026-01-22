export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 mt-10">
        About This Project
      </h1>

      <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
        <p className="text-gray-550 leading-relaxed">
          Technological University, the library handles thousands of specialized
          books daily. Manual sorting is: Time-Consuming: Students and staff
          spend hours returning books to the correct sections. Prone to Error:
          Misplaced books (e.g., an Electrical Engineering book in the Civil
          section) make it impossible for other students to find resources.
          Inefficient: Manual labor could be better spent on research and
          assisting students rather than physical sorting.
        </p>
      </div>

      <section>
        <h1 className="tech-title text-4xl mt-10 text-center md:text-left">
          Our Team Members
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
          <div
            className="tech-card w-48 md:w-64 lg:w-72 h-72 flex items-end justify-center"
            data-info={"Dr Nga\nSupervisor"}
          >
            <img
              src="/Dr.jpg"
              className="w-32 md:w-48 lg:w-56 object-contain"
            />
          </div>
        </div>

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
              src="/thida.jpg"
              className="w-32 md:w-48 lg:w-36 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
