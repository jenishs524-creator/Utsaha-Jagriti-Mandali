
import React from 'react';
import { Camera, Quote, Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544427928-c49cdfebf494?q=80&w=1200&auto=format&fit=crop",
      caption: "Fellowship & Community"
    },
    {
      url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
      caption: "Worship in Truth"
    },
    {
      url: "https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?q=80&w=1200&auto=format&fit=crop",
      caption: "Our Growing Family"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-nepal-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Camera size={14} />
            <span>Church Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-church-900 mb-6">Glimpses of Church Life</h2>
          <div className="flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto">
             <div className="bg-nepal-blue/5 p-8 md:p-12 rounded-[3.5rem] border border-nepal-blue/10 shadow-inner">
                <Sparkles className="text-nepal-red w-10 h-10 mb-6 mx-auto animate-pulse" />
                <p className="text-2xl md:text-3xl text-church-900 italic font-serif font-bold leading-relaxed mb-6">
                  "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."
                </p>
                <div className="w-16 h-1 bg-nepal-red mx-auto rounded-full mb-4"></div>
                <p className="text-nepal-blue font-black text-sm uppercase tracking-[0.3em]">Isaiah 40:31</p>
             </div>
             <p className="text-slate-400 font-light max-w-lg">The Fire of Revival starts in the heart of the believer. God is doing a new thing in Nepal, and you are called to be part of His Glory.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 border border-slate-100 hover:-translate-y-2 transition-all duration-500"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-church-900/90 via-church-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-white font-serif font-bold text-2xl mb-2">{img.caption}</p>
                   <div className="w-12 h-1 bg-sky-400 rounded-full"></div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <button 
             onClick={() => window.location.hash = 'contact'}
             className="bg-slate-50 hover:bg-slate-100 text-slate-500 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 transition-all"
           >
             Share Your Photos With Us
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
