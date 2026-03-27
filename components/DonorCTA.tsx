"use client";

export default function DonorCTA() {
  return (
    <div className="w-full bg-lf-foundation px-5 md:px-6 py-12 md:py-16 pb-[max(3rem,env(safe-area-inset-bottom,0px))]">
      <div className="max-w-md mx-auto text-center">
        <p className="text-white font-roboto font-bold text-xl md:text-3xl leading-tight">
          LifeFlight flew 3,200+ missions last year.
        </p>
        <p className="text-white/80 font-roboto text-base md:text-lg mt-3 md:mt-4">
          Every mission powered by people like you.
        </p>
        <p className="text-white font-roboto font-bold text-lg md:text-xl mt-5 md:mt-6">
          Become a community protector.
        </p>

        <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-10">
          <a
            href="https://www.lifeflight.org.au/foundation/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-lf-black font-mulish font-bold text-base py-4 px-6 text-center active:bg-white/80 hover:bg-white/90 transition-colors duration-300 ease-in-out"
          >
            Donate Now
          </a>
          <a
            href="https://www.lifeflight.org.au"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border-2 border-lf-navy text-white font-mulish font-bold text-base py-4 px-6 text-center active:bg-lf-navy/30 hover:bg-lf-navy/20 transition-colors duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>

        <p className="text-white/40 font-mulish text-[10px] md:text-xs mt-8 md:mt-10">
          LifeFlight Foundation ABN 30 084 976 849 · lifeflight.org.au
        </p>
      </div>
    </div>
  );
}
