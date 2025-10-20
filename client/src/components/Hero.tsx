import { Button } from "./ui/button";

export default function Hero() {
  return (
        <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Hero image */}
        <img
          src="/src/assets/landing (1).svg"
          alt="Dashboard preview"
          className="mx-auto w-full max-w-5xl rounded-md shadow-md"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-black mt-12">
          Practice in <span className="tracking-widest">EVERYTHING</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-lg md:text-xl mt-3">
          online platform to invest in stocks, derivatives, ETF’s, F&O and more
        </p>
        <div className="mt-5">
        <Button>Sign Up for free</Button>
        </div>
      </div>
    </section>
      
  )
}
