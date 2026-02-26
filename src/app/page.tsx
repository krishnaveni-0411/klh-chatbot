import Chatbot from './components/Chatbot';

export default function Website() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-blue-700 text-white px-10 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">KLH Hyderabad</h1>
        <div className="space-x-6 text-sm hidden md:block">
          <span className="hover:underline cursor-pointer">Admissions</span>
          <span className="hover:underline cursor-pointer">Academics</span>
          <span className="hover:underline cursor-pointer">Placements</span>
          <span className="hover:underline cursor-pointer">Campus Life</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-white py-24 text-center shadow-sm">
        <h2 className="text-4xl font-bold text-blue-700">
          Welcome to KLH Hyderabad Campus
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Empowering students through innovation, research and excellence in education.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Explore Programs
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            About KLH Hyderabad
          </h3>
          <p className="text-gray-600 leading-relaxed">
            KLH Hyderabad campus offers industry-focused engineering programs
            in emerging technologies such as Artificial Intelligence, Machine Learning,
            Data Science, Electronics and Communication Engineering, and more.
            The campus is equipped with modern laboratories, digital classrooms,
            and strong placement support.
          </p>
        </div>
      </section>

      {/* PLACEMENTS SECTION */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Placements
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Top companies from IT, core engineering and product-based sectors
            visit the campus every year. Students receive strong training support
            through the Training & Placement Cell, mock interviews and internship guidance.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} KLH Hyderabad Campus. All Rights Reserved.
      </footer>

      {/* EMBEDDED CHATBOT */}
      <Chatbot />

    </div>
  );
}