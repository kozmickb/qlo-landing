import React from 'react';

export default function DemoCTA() {
  return (
    <section className="bg-zinc-950 px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Stay in the loop</h2>
      <p className="text-zinc-400 mb-6">Register interest to be notified when Qlo launches in your area.</p>
      <form name="early-access" method="POST" data-netlify="true" className="flex flex-col sm:flex-row gap-4 justify-center">
        <input type="hidden" name="form-name" value="early-access" />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="px-4 py-3 rounded-md w-full max-w-sm text-black"
        />
        <button type="submit" className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition">
          Notify Me
        </button>
      </form>
    </section>
  );
}
