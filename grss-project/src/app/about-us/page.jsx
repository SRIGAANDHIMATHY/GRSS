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

      {/* Main Content with padding for fixed nav */}
      <div className="pt-16">
        {/* About GRSS Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">About GRSS</h1>
            <p className="text-lg mb-12">
              The{" "}
              <strong>IEEE Geoscience and Remote Sensing Society (GRSS)</strong>{" "}
              is a technical society within the IEEE, dedicated to the
              advancement of geoscience and remote sensing technologies.
            </p>
          </div>
        </section>

        {/* Groups & Initiatives */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-12">Groups & Initiatives</h2>

            {/* IDEA Program */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-4">IDEA Program</h3>
              <p className="text-lg mb-4">
                <strong>Our Mission:</strong>
              </p>
              <p className="mb-6">
                The <strong>IDEA Program</strong> shall Inspire, Develop,
                Empower, and Advance GRSS members from all backgrounds, in
                support of a diverse and inclusive geoscience and remote sensing
                community.
              </p>
              <p className="mb-8">
                This initiative is an essential element of the Geoscience and
                Remote Sensing Society (GRSS). We aim to build a culture of
                inclusion where every member feels welcomed, valued, and
                empowered, so we can all drive excellence for the benefit of our
                members and our global community.
              </p>
            </div>

            {/* Student Grand Challenge */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-4">
                IEEE GRSS Student Grand Challenge
              </h3>
              <p className="mb-4">
                The{" "}
                <strong>
                  IEEE Geoscience and Remote Sensing Society (GRSS)
                </strong>{" "}
                is proud to host the 5th IEEE GRSS Student Grand Challenge!
              </p>
              <p className="mb-8">
                This global student competition is designed to encourage
                students to explore and innovate in geoscience and remote
                sensing fields. Participants work on interdisciplinary problems
                that incorporate techniques in geoscience, remote sensing,
                signal/image processing, artificial intelligence, climate
                monitoring, UAVs, atmospheric balloons, and more.
              </p>
            </div>

            {/* Young Professionals */}
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-4">
                Young Professionals (YP) in Geoscience and Remote Sensing
              </h3>
              <p className="mb-4">
                <strong>IEEE Young Professionals</strong> is a group of IEEE
                members and students who have graduated from their first
                professional degree within the past 15 years.
              </p>
              <p className="mb-4">
                It is a vibrant community of engineers, scientists, and
                technical professionals who are committed to leveraging IEEE
                membership for career growth and networking.
              </p>
              <p className="mb-4">
                The Young Professionals group within GRSS offers tailored
                events, mentorship opportunities, and resources to help young
                engineers become recognized professional and technical leaders.
              </p>
              <p>The group is highly diverse in what it has to offer.</p>
            </div>
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