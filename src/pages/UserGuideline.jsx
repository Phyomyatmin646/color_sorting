export default function UserGuideline() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl text-blue-400 mb-4 mt-10">User Guideline</h1>
      <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
        <p className="text-gray-550 leading-relaxed">
          <ol className="list-decimal ml-6 text-gray-550 leading-relaxed space-y-2">
            <li>Power on the system.</li>
            <li>Place object under the sensor.</li>
            <li>The robotic arm sorts automatically.</li>
          </ol>
        </p>
      </div>
    </div>
  );
}
