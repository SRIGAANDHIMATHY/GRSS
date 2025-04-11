"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    membershipType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
        <section
          className="py-20 px-4 text-center"
          style={{ backgroundColor: "#f0f9ff" }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">🌐 Join the GRSS</h1>
            <p className="text-lg mb-8">
              Become a part of our global community and gain access to a wealth
              of resources, networking opportunities, and professional
              development in geoscience and remote sensing.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              ✍️ Membership Sign-Up
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Enter your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    📩 Enter your Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    📋 Choose Membership Type
                  </label>
                  <select
                    value={formData.membershipType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        membershipType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a type...</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="researcher">Researcher</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white rounded-md text-lg font-medium transition-colors"
                style={{ backgroundColor: "#2ECC71" }}
              >
                🔵 Join Now
              </button>
            </form>
          </div>
        </section>

        <section
          className="py-16 px-4 text-center"
          style={{ backgroundColor: "#f0f9ff" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              💡 Empowering the Future of Geoscience and Remote Sensing
            </h2>
            <p className="text-lg">
              Serving the global community by advancing{" "}
              <strong>geoscience and remote sensing technologies</strong> for
              the benefit of humanity.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              ✅ Membership Benefits
            </h2>
            <div className="space-y-4">
              {[
                "Access to exclusive publications and research materials",
                "Discounted registration fees for conferences and workshops",
                "Opportunities to connect with industry experts and peers",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-green-500 mr-3">✔️</span>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
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