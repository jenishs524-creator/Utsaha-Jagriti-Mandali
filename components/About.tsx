
import React from 'react';
import { Calendar, MapPin, Info, GraduationCap, Globe, ShieldCheck, HeartHandshake, Eye, Sparkles, Star, History } from 'lucide-react';

interface AboutProps {
  estDate?: string;
  location?: string;
}

const About: React.FC<AboutProps> = ({ 
  estDate = "AD 2015/04/23 (BS 2072/01/10)", 
  location = "Kathmandu, Nepal" 
}) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MISSION & IMPACT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
             <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>Our Foundation</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-church-900 leading-tight">
               Built on Eternal Promises
             </h2>
             <p className="text-xl text-slate-600 leading-relaxed font-light">
               Our church stands as a testament to the unwavering grace of God. We are a people called out of darkness to radiate the light of Christ in every corner of Nepal.
             </p>
             <div className="bg-nepal-red/5 border-l-4 border-nepal-red p-8 rounded-r-3xl shadow-sm">
                <p className="text-xl text-church-900 italic font-bold leading-relaxed mb-4">
                  "And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast."
                </p>
                <p className="text-sm font-black text-nepal-red uppercase tracking-widest">— 1 Peter 5:10</p>
             </div>
             
             {/* History Box */}
             <div className="bg-church-900 text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                   <History size={80} />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center space-x-2 mb-4 text-sky-400">
                      <Star size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">A Legacy of Faith</span>
                   </div>
                   <h4 className="text-xl font-bold mb-2">History of Grace</h4>
                   <p className="text-slate-400 text-sm mb-4">Our journey began with a divine spark in 2015.</p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                         <span className="text-[10px] uppercase text-slate-500 block mb-1">BS Date</span>
                         <span className="font-bold text-sky-300">2072/01/10</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                         <span className="text-[10px] uppercase text-slate-500 block mb-1">AD Date</span>
                         <span className="font-bold text-nepal-red">2015/04/23</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-church-50 rounded-full blur-[100px] -z-10"></div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col items-center text-center">
                  <Globe className="text-nepal-blue w-12 h-12 mb-4" />
                  <h4 className="font-bold text-church-900">Reach Out</h4>
                  <p className="text-xs text-slate-400 mt-2">Spreading the Light</p>
               </div>
               <div className="bg-church-900 p-8 rounded-[3rem] text-white shadow-2xl flex flex-col items-center text-center translate-y-8">
                  <HeartHandshake className="text-sky-400 w-12 h-12 mb-4" />
                  <h4 className="font-bold">Family</h4>
                  <p className="text-xs text-slate-400 mt-2">Stronger Together</p>
               </div>
            </div>
          </div>
        </div>

        {/* OUR VISION SECTION */}
        <div className="mb-32 bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Eye size={200} />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
             <div className="inline-flex items-center space-x-2 bg-nepal-blue text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                <Star size={14} className="text-yellow-400" />
                <span>Our Divine Vision</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-serif font-bold text-church-900 mb-8 leading-tight">
               Igniting Hearts, Transforming Communities
             </h3>
             <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">
               Our vision is to see a thriving, Spirit-filled community where every person is equipped to fulfill their God-given destiny. We envision a church that transcends boundaries, bringing healing, restoration, and the hope of the Gospel to the unreached.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <Sparkles className="text-nepal-red w-8 h-8 mx-auto mb-4" />
                   <h5 className="font-bold text-church-900 mb-1">Spirit Lead</h5>
                   <p className="text-[10px] text-slate-400 uppercase">Divine Direction</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <Globe className="text-nepal-blue w-8 h-8 mx-auto mb-4" />
                   <h5 className="font-bold text-church-900 mb-1">Global Impact</h5>
                   <p className="text-[10px] text-slate-400 uppercase">Beyond Borders</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <HeartHandshake className="text-green-500 w-8 h-8 mx-auto mb-4" />
                   <h5 className="font-bold text-church-900 mb-1">True Disciples</h5>
                   <p className="text-[10px] text-slate-400 uppercase">Faithful Walk</p>
                </div>
             </div>
          </div>
        </div>

        {/* CHURCH PROFILE SUMMARY */}
        <div id="church-details">
          <div className="bg-church-900 text-white rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-10">
                  <Info className="text-sky-400 w-10 h-10" />
                  <h3 className="text-3xl font-serif font-bold uppercase tracking-wider">
                    Our Presence
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="bg-white/10 p-4 rounded-2xl">
                        <MapPin className="text-sky-300 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-sky-400 uppercase tracking-widest">Address</h4>
                        <p className="text-white text-md">{location}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-5">
                      <div className="bg-white/10 p-4 rounded-2xl">
                        <Calendar className="text-sky-300 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-sky-400 uppercase tracking-widest">Mission</h4>
                        <p className="text-white text-xl font-bold">{estDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="bg-white/10 p-4 rounded-2xl">
                        <GraduationCap className="text-sky-300 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-sky-400 uppercase tracking-widest">Teachings</h4>
                        <p className="text-white text-md font-medium">
                          Gospel Centered
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-5">
                      <div className="bg-white/10 p-4 rounded-2xl">
                        <Globe className="text-sky-300 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-sky-400 uppercase tracking-widest">Impact</h4>
                        <p className="text-white text-md">Community Focused</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-full min-h-[400px] relative bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <ShieldCheck className="w-64 h-64 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-church-900 via-transparent to-transparent lg:block hidden"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
