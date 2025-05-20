import { Link } from "wouter";

const DHero = () => {
  return (
    <section className="hero-gradient lotus-pattern pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Charity is the Essence of Spirituality</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">Support our mission with your generous contribution and help us spread spiritual knowledge and compassion.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#donate-section" className="btn-primary px-8 py-3 rounded-full text-center text-white font-medium">
                Donate Now
              </a>
              <a href="#about-section" className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full text-center text-white font-medium hover:bg-white/20 transition-all">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* A serene image showcasing a spiritual offering ceremony with candles and flowers */}
            <img 
              src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Spiritual offering ceremony" 
              className="rounded-2xl shadow-2xl border-4 border-white/30 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DHero;
