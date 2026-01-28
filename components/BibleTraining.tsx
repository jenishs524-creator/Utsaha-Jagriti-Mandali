
import React from 'react';
import { BookOpen, Users, CheckCircle, ArrowRight, Shield, Award, Zap, Star } from 'lucide-react';

interface BibleTrainingProps {
  onOpenAdmission: () => void;
}

const BibleTraining: React.FC<BibleTrainingProps> = ({ onOpenAdmission }) => {
  const features = [
    { 
      title: "Theological Foundations", 
      desc: "Systematic study of core Christian doctrines and biblical truth." 
    },
    { 
      title: "Servant Leadership", 
      desc: "Equipping believers for ministry and practical church leadership." 
    },
    { 
      title: "Biblical Hermeneutics", 
      desc: "Learning sound interpretation techniques for deep scripture study." 
    },
    { 
      title: "Gospel Discipleship", 
      desc: "Walking daily in the footsteps of Jesus with spiritual discipline." 
    }
  ];

  return (
    <div className="bg-white">
      {/* Bible School Header */}
      <div className="bg-church-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 bg-sky-500/20 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10 border border-sky-400/30">
            <Award className="text-sky-400" size={18} />
            <span>Divine Mandate for Excellence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-10 leading-tight">
            Utsaha Jagriti <span className="text-sky-400">Bible School</span>
          </h1>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3.5rem] max-w-3xl mx-auto">
             <Star className="text-yellow-400 w-10 h-10 mx-auto mb-6" />
             <p className="text-2xl md:text-3xl text-white font-serif font-bold italic mb-6">
                "Empowering Leaders, Igniting Spirits, Transforming Nations."
             </p>
             <p className="text-slate-300 text-lg font-light leading-relaxed">
                Equip yourself with the Sword of the Spirit through our rigorous, Spirit-filled academic programs designed for the 21st-century pioneer. Our curriculum is crafted not just for knowledge, but for spiritual authority.
             </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Training Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">1 Month Training</h4>
                <p className="text-green-600 font-black uppercase tracking-widest text-xs">Foundation Level</p>
             </div>
             <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">3 Month Training</h4>
                <p className="text-green-600 font-black uppercase tracking-widest text-xs">Intermediate Level</p>
             </div>
             <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 flex flex-col items-center text-center shadow-sm relative group">
                <div className="absolute -top-3 right-8 bg-nepal-red text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-bounce">
                  Currently Running
                </div>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <Zap size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">6 Month Training</h4>
                <p className="text-blue-600 font-black uppercase tracking-widest text-xs">Advanced Leadership</p>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
            <div className="lg:w-1/2 space-y-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-nepal-blue px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.3em] border border-blue-100 shadow-sm">
                 <Shield size={18} />
                 <span>Equipping The Saints</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-church-900 leading-tight tracking-tight">
                Transformation Through Biblical Education
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                 At Utsaha Jagriti Bible School, we believe education is the bedrock of strong faith. Our structured courses bridge the gap between ancient scripture and modern living.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <h4 className="font-black text-2xl text-nepal-blue">2+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Years of Teaching</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <h4 className="font-black text-2xl text-nepal-red">100+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Graduated Students</p>
                </div>
              </div>

              <button 
                onClick={onOpenAdmission}
                className="flex items-center space-x-4 bg-nepal-red text-white px-12 py-6 rounded-[2.5rem] font-black text-lg hover:bg-red-700 transition-all shadow-2xl hover:translate-x-3 active:scale-95 group"
              >
                <span>Enroll in Institute</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative">
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-nepal-blue/5 rounded-full blur-[100px]"></div>
               <div className="space-y-8 pt-20">
                  <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Study" />
                  <div className="bg-church-900 p-12 rounded-[4rem] text-white shadow-2xl">
                     <BookOpen className="text-sky-400 w-14 h-14 mb-8" />
                     <h4 className="font-bold text-3xl mb-4 font-serif">Deep Study</h4>
                     <p className="text-xs text-slate-400 leading-relaxed font-medium">Immersive scripture analysis for the dedicated student.</p>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl">
                     <Users className="text-nepal-red w-14 h-14 mb-8" />
                     <h4 className="font-bold text-3xl text-church-900 mb-4 font-serif">Community</h4>
                     <p className="text-xs text-slate-400 leading-relaxed font-medium">Learning together in a circle of mutual accountability.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop" className="rounded-[4rem] shadow-2xl" alt="Training" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
             {features.map((f, i) => {
               return (
                <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:border-nepal-blue transition-all group hover:bg-white hover:shadow-2xl flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-10 group-hover:bg-nepal-blue group-hover:text-white transition-all transform group-hover:rotate-6">
                      <CheckCircle size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-church-900 mb-6 font-serif">{f.title}</h4>
                   <p className="text-slate-500 leading-relaxed font-light">{f.desc}</p>
                </div>
              );
             })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleTraining;
