import React from 'react';

export default function EarlyAccess() {
  return (
    <section id="early-access" className="bg-zinc-950 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Register Interest</h2>
        <p className="text-zinc-400 mb-8">
          Be among the first to get early access to Qlo. Stay informed and shape the future of smarter footfall.
        </p>

        <form
          name="early-access"
          method="POST"
          data-netlify="true"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Required hidden input for Netlify Forms */}
          <input type="hidden" name="form-name" value="early-access" />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
