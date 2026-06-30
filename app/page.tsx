import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-5xl">

        <Image
          src="/images/phoenix-logo.png"
          alt="TradePhoenix AI"
          width={450}
          height={450}
          className="mx-auto mb-10"
        />

        <h2 className="text-3xl md:text-5xl font-bold text-orange-400">
          
        </h2>

        <p className="text-gray-300 text-xl mt-6 leading-9">
          AI Powered Trading Platform built for Traders,
          Investors and Professionals.
          Analyze markets, identify opportunities,
          manage risk and make smarter trading decisions.
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition">
            Get Started
          </button>

          <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition">
            Watch Demo
          </button>

        </div>

      </div>

    </main>
  );
}