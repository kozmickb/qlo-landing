<form
  name="early-access"
  method="POST"
  data-netlify="true"
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>
  {/* Netlify hidden input for form handling */}
  <input type="hidden" name="form-name" value="early-access" />

  <input
    type="email"
    name="email"
    required
    placeholder="Your email address"
    className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

  <button
    type="submit"
    className="bg-gradient-to-r from-[#FF3F8D] via-[#D764D4] to-[#AD5CFF] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
  >
    Register Interest
  </button>
</form>
