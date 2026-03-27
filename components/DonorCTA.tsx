"use client";

export default function DonorCTA() {
  return (
    <div className="w-full bg-lf-foundation px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <p className="text-white font-roboto font-bold text-2xl md:text-3xl leading-tight">
          LifeFlight flew 3,200+ missions last year.
        </p>
        <p className="text-white/80 font-roboto text-lg mt-4">
          Not one was funded by the government.
        </p>
        <p className="text-white font-roboto font-bold text-xl mt-6">
          Become a community protector.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="https://www.lifeflight.org.au/foundation/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-lf-black font-mulish font-bold text-base py-4 px-6 text-center hover:bg-white/90 transition-colors duration-300 ease-in-out"
          >
            Donate Now
          </a>
          <a
            href="https://www.lifeflight.org.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-lf-navy text-white font-mulish font-bold text-base py-4 px-6 text-center hover:bg-lf-navy/20 transition-colors duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>

        <p className="text-white/40 font-mulish text-xs mt-10">
          LifeFlight Foundation ABN 30 084 976 849 · lifeflight.org.au
        </p>
      </div>
    </div>
  );
}
