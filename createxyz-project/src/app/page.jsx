"use client";
import React, { useState } from "react";

function MainComponent() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribeStatus("Subscribed successfully!");
    setEmail("");
  };

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
                {["HOME", "ABOUT US", "EVENTS", "_\projects","JOIN-US"].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      (window.location.href = `${item
                        .toLowerCase()
                        .replace(" ", "-")}`)
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

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://ucarecdn.com/2a7efda3-8609-4bd5-8520-376b6d279314/-/format/auto/)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#022B3A",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-[36px] font-bold text-white mb-4">
            Empowering the Future of Geoscience and Remote Sensing
          </h1>
          <p className="text-[16px] text-[#D3D3D3] mb-8">
            Serving the global community...
          </p>
          <button
            className="px-5 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: "#2ECC71" }}
          >
            Join Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://ucarecdn.com/aa36585f-2856-4f98-9587-6c14ff68724c/-/format/auto/"
              alt="Satellite orbiting Earth"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-[24px] font-bold text-black mb-6">
              About GRSS
            </h2>
            <p className="text-[16px] text-black">
              The Geoscience and Remote Sensing Society (GRSS) is dedicated to
              the advancement of science and technology in geoscience, remote
              sensing, and related fields through educational, scientific,
              literary, and professional endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[20px] font-bold text-black mb-12">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://ucarecdn.com/90dec87b-8cfd-4768-b381-cdb4bf9f71ce/-/format/auto/",
                alt: "Wind turbines in a green field",
                title: "Green Energy Symposium",
                description:
                  "Explore the latest developments in renewable energy monitoring through remote sensing technologies.",
              },
              {
                img: "https://ucarecdn.com/9a5b4b2d-ccf4-4957-81aa-165cbff76765/-/format/auto/",
                alt: "Holographic technology display on laptop",
                title: "AI in Geoscience Workshop",
                description:
                  "Learn how artificial intelligence is revolutionizing geospatial data analysis and interpretation.",
              },
              {
                img: "https://ucarecdn.com/48360653-4a4d-40cb-9849-250981578040/-/format/auto/",
                alt: "Digital technology visualization on laptop",
                title: "Satellite Data Summit",
                description:
                  "Join experts in discussing advanced satellite imaging techniques and their applications.",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.img}
                  alt={event.alt}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 relative">
                  <div
                    className="absolute -top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-[12px]"
                    style={{ backgroundColor: "#2ECC71" }}
                  >
                    SEP {i + 8}
                  </div>
                  <h3 className="text-[16px] font-bold text-black mt-4 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[20px] font-bold text-black mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/project-1.jpg",
                title: "Climate Change Monitoring",
                description:
                  "Using advanced satellite data to track global climate patterns and environmental changes over time.",
              },
              {
                img: "/project-2.jpg",
                title: "Urban Development Analysis",
                description:
                  "Mapping and analyzing urban growth patterns using remote sensing technology for sustainable city planning.",
              },
              {
                img: "/project-3.jpg",
                title: "Ocean Health Assessment",
                description:
                  "Monitoring ocean temperatures and ecosystems through satellite imagery to protect marine biodiversity.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[16px] font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-16 px-4" style={{ backgroundColor: "#355C7D" }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[14px] text-white">
            We foster innovation in geospatial technology and remote sensing by
            organizing technical talks, workshops, and collaborative research.
            Our goal is to empower the next generation of Earth scientists.
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-4" style={{ backgroundColor: "#AED9E0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[16px] font-cursive">
              Stay tuned for our next big event…
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
  );
}

export default MainComponent;