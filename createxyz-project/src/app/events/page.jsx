"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
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
                {["HOME", "ABOUT US", "EVENTS", "PROJECTS"].map((item) => (
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
                <button
                  className="px-4 py-2 rounded-md font-sans"
                  style={{ backgroundColor: "#AED9E0", color: "white" }}
                >
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Upcoming Events Header */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">📅 Upcoming Events</h1>
            <p className="text-lg mb-12">
              Explore our upcoming{" "}
              <strong>conferences, workshops, and seminars</strong> designed to
              inspire innovation and collaboration in geoscience and remote
              sensing.
            </p>

            {/* Featured Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Full Satellite Sensing Workshop */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">
                  🌐 Full Satellite Sensing Workshop
                </h3>
                <p className="font-bold mb-2">
                  Location: Boston University, USA
                </p>
                <p className="mb-2">Date: 12th–14th June 2025</p>
                <p className="mb-4">
                  Details: Hands-on training and demos on satellite remote
                  sensing technologies.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>

              {/* International Conference */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">
                  🌍 International Conference on Satellite Image Data 2025
                </h3>
                <p className="mb-2">Date: 18th–20th July 2025</p>
                <p className="mb-4">
                  Details: A global stage for the discussion of satellite
                  imaging, processing, and analysis techniques in the age of AI.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>

              {/* Emerging Frontiers */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">
                  🌱 Emerging Frontiers in Renewable Sensing Technologies
                </h3>
                <p className="mb-2">Date: 25th–27th August 2025</p>
                <p className="mb-4">
                  Details: Workshop focusing on remote sensing applications for
                  renewable energy and sustainability.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Upcoming Conferences */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              🗓 Featured Upcoming Conferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* GNSS+R 2025 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">GNSS+R 2025</h3>
                <p className="mb-2">Date: 2nd–4th April 2025</p>
                <p className="mb-4">Themes:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>GNSS Reflectometry</li>
                  <li>Ocean and Land Monitoring</li>
                  <li>New Algorithms</li>
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>

              {/* Hackathon */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Global Earth Data Science Hackathon 2025
                </h3>
                <p className="mb-2">Date: September 2025</p>
                <p className="mb-4">
                  A 48-hour global virtual hackathon aimed at solving Earth
                  science problems using satellite data, AI, and cloud
                  platforms.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>

              {/* OCSI */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">OCSI</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Online Collaborative Space for Innovation</li>
                  <li>Open for all IEEE members</li>
                  <li>Managed by IEEE GRSS</li>
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Archive */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">📂 Past Events Archive</h2>
            <p className="mb-8">
              Looking for a past event? <strong>Visit our archive</strong> to
              see how we've been fostering collaboration, innovation, and
              learning across the globe.
            </p>

            <h3 className="text-2xl font-bold mb-6">🧠 What We Host:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">
                  Workshops, Technical Courses & Guest Lectures
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">Hackathons & Ideathons</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">
                  Panel Discussions and Brainstorming Sessions
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">Outreach & Academic Programs</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-bold">Career and Networking Sessions</p>
              </div>
            </div>
            <p className="mt-8 text-lg">
              If you're a student or professional, there's always something to
              engage and inspire you in the world of geoscience!
            </p>
          </div>
        </section>

        {/* Stay Connected Section */}
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

        {/* Footer */}
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