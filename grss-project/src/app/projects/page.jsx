"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50" style={{ backgroundColor: "#2ECC71" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://ucarecdn.com/58e62e73-2f69-4abf-8dc9-04d2a5cd3da0/-/format/auto/"
                alt="GRSS Logo"
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {["HOME", "ABOUT US", "EVENTS", "PROJECTS","JOIN-US"].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      (window.location.href =
                        item === "HOME"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`)
                    }
                    className="px-4 py-2 rounded-md font-sans"
                    style={{ backgroundColor: "#022B3A", color: "white" }}
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Projects & Publications</h1>
            <p className="text-lg mb-12">
              Discover our groundbreaking research initiatives and scientific
              publications in geoscience and remote sensing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Earth Observation Initiative
                </h2>
                <ul className="space-y-6">
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/c7755ce7-98cb-4912-9fc3-087f501d9371/-/format/auto/"
                        alt="Earth view from space showing city lights"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🛰️</span>
                      <p>
                        Satellite-based monitoring of global environmental
                        changes
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/09df4ddd-2150-4386-bacc-98393ff56623/-/format/auto/"
                        alt="International Space Station monitoring Earth"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🌍</span>
                      <p>
                        Climate change impact assessment and prediction models
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/03be67a5-653d-4d8d-b7c1-712d6ee88517/-/format/auto/"
                        alt="Sustainable Development Goals around Earth"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">📊</span>
                      <p>Big data analytics for environmental monitoring</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Remote Sensing Technologies
                </h2>
                <ul className="space-y-6">
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/e923c4e2-9ea5-4fa9-8096-2d7554b5e2ca/-/format/auto/"
                        alt="IEEE Geoscience and Remote Sensing Letters Cover"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">📡</span>
                      <p>Advanced sensor development and calibration</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/adcf2247-b710-439c-8a84-3f5eee228d78/-/format/auto/"
                        alt="IEEE Geoscience and Remote Sensing Magazine Cover"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🤖</span>
                      <p>
                        AI and machine learning applications in remote sensing
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3">
                      <img
                        src="https://ucarecdn.com/dab7fcf9-0618-49c0-8636-bc9b45fa7ebc/-/format/auto/"
                        alt="IEEE Transactions on Geoscience and Remote Sensing Cover"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3">🎯</span>
                      <p>Precision agriculture and urban planning solutions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-6">
                Sustainable Development Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-3">Climate Action</h3>
                  <p>
                    Monitoring and analyzing climate patterns for informed
                    decision-making
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-3">Life Below Water</h3>
                  <p>
                    Ocean monitoring and marine ecosystem preservation
                    initiatives
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-3">Life on Land</h3>
                  <p>
                    Forest conservation and biodiversity monitoring programs
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    IEEE Transactions on Geoscience and Remote Sensing
                  </h3>
                  <p className="mb-4">
                    Our flagship journal publishing cutting-edge research in the
                    field.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800">
                    View Latest Issue →
                  </button>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">GRSS Magazine</h3>
                  <p className="mb-4">
                    Quarterly magazine featuring industry trends and technical
                    articles.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800">
                    Browse Articles →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#AED9E0" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[16px] font-cursive">
                Stay tuned for our next big event…
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-gray-200"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: "#022B3A" }}
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4" style={{ backgroundColor: "#2ECC71" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-gray-300">
                <img
                  src="https://ucarecdn.com/03d78d09-3495-48b3-988c-68670bd49b67/-/format/auto/"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <img
                  src="https://ucarecdn.com/a21ee86e-b56f-4fd1-b0bb-5e3112327b5f/-/format/auto/"
                  alt="X"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <img
                  src="https://ucarecdn.com/c957657a-7344-43ef-92e3-b44dd9466a7e/-/format/auto/"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <p className="text-white text-sm">@copyright 2025 GRSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainComponent;