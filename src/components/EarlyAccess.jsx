import React from 'react';

export default function EarlyAccess() {
  return (
    <section id="early-access" className="bg-zinc-950 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Get Early Access</h2>
        <p className="text-zinc-400 mb-8">Be among the first to experience Qlo. Enter your email and we'll be in touch.</p>
        
        <form
          name="early-access"
          method="POST"
          data-netlify="true"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input type="hidden" name="form-name" value="early-access" />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
          >
            Notify Me
          </button>
        </form>

        {/* Instagram DM button */}
        <a
          href="https://www.instagram.com/direct/t/qlo.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition"
        >
          Message Us on Instagram
        </a>
      </div>
    </section>
  );
}
