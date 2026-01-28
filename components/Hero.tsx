
import React from 'react';
import { ArrowRight, MapPin, Heart, Quote, Sparkles, Info, Calendar } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  churchName: string;
  location: string;
  estDate: string;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, churchName, location, estDate }) => {
  return (
    <div className="relative bg-church-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
          alt="Church Sanctuary"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-church-900 via-church-900/60 to-transparent"></div>
      </div>

      {/* Aesthetic Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-nepal-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-nepal-red/10 rounded-full blur-[150px]"></div>
      </div>

      {/* POWERFUL VERSE IN RIGHT CORNER */}
      <div className="absolute top-10 right-10 z-20 hidden lg:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[3rem] max-w-xs shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-all duration-500">
          <div className="flex items-center space-x-2 mb-4">
             <Sparkles className="text-sky-400 w-5 h-5" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">Word of Strength</span>
          </div>
          <Quote className="text-white/10 w-12 h-12 absolute top-4 right-4" />
          <p className="text-xl font-serif italic text-white leading-tight mb-4 relative z-10">
            "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
          </p>
          <div className="w-12 h-1 bg-nepal-red mb-3 rounded-full"></div>
          <p className="text-xs font-black text-sky-300 uppercase tracking-widest">
            Joshua 1:9
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Jaimashi! Welcome to {churchName}
              </span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-nepal-red/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-nepal-red/30">
               <Calendar className="text-nepal-red w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Founded {estDate}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-[1.1] text-white">
            Worshiping in Truth & Spirit
          </h1>

          <p className="text-xl md:text-2xl text-slate-100 mb-12 font-light leading-relaxed max-w-3xl border-l-4 border-nepal-red pl-6 italic">
            You are not here by chance; you are here by divine appointment. Step into a sanctuary where the broken find rest, the weary find strength, and every heart encounters the life-transforming power of Jesus Christ.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center bg-nepal-red hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-red-900/40"
            >
              Join Our Community
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button
               onClick={() => onNavigate('about')}
               className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all group"
            >
              <Info className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              About Us
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-white/10">
            <div className="flex items-start space-x-4">
              <MapPin className="h-7 w-7 text-sky-400 mt-1" />
              <div>
                <p className="font-bold text-white text-lg tracking-tight">Location</p>
                <p className="text-slate-300 text-sm leading-snug">{location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Heart className="h-7 w-7 text-nepal-red mt-1" />
              <div>
                <p className="font-bold text-white text-lg tracking-tight">Our Core Values</p>
                <p className="text-slate-300 text-sm">Faith, Family, and Gospel-Centered Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
