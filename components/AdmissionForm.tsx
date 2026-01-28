
import React, { useState } from 'react';
import { X, Send, CheckCircle, BookOpen, User, Phone, Mail, Award, Loader2 } from 'lucide-react';
import { Language } from '../App';

interface AdmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({ isOpen, onClose, language }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '1-month',
    background: '',
    testimony: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock submission
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-church-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-400 hover:text-church-900 p-2 bg-slate-50 rounded-full transition-all hover:rotate-90"
        >
          <X size={24} />
        </button>

        <div className="p-10 md:p-16">
          {status === 'success' ? (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-green-100">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Application Submitted</h2>
              <p className="text-slate-500 mb-10 max-w-sm">Grace to you. Our training committee will review your application and contact you within 3-5 days.</p>
              <button 
                onClick={onClose}
                className="bg-nepal-blue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-church-800 transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-nepal-blue/10 p-4 rounded-2xl text-nepal-blue">
                  <Award size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-slate-900">Training Admission</h2>
                  <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Utsaha Jagriti Bible School</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-nepal-blue/20 focus:ring-4 focus:ring-nepal-blue/5 transition-all" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input name="phone" required type="tel" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-nepal-blue/20 focus:ring-4 focus:ring-nepal-blue/5 transition-all" placeholder="98XXXXXXXX" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address (Optional)</label>
                   <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl pl-14 pr-6 py-4 outline-none focus:border-nepal-blue/20 focus:ring-4 focus:ring-nepal-blue/5 transition-all" placeholder="email@example.com" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Desired Course</label>
                   <div className="relative">
                      <BookOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <select name="course" value={formData.course} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl pl-14 pr-6 py-4 outline-none appearance-none focus:border-nepal-blue/20 focus:ring-4 focus:ring-nepal-blue/5 transition-all">
                        <option value="1-month">1 Month Foundational</option>
                        <option value="3-month">3 Month Intermediate</option>
                        <option value="6-month">6 Month Advanced (Currently Running)</option>
                      </select>
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Brief Testimony</label>
                  <textarea name="testimony" required value={formData.testimony} onChange={handleChange} rows={4} className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl px-6 py-4 outline-none focus:border-nepal-blue/20 focus:ring-4 focus:ring-nepal-blue/5 transition-all resize-none" placeholder="Briefly share your walk with Christ..." />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-nepal-blue text-white py-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-church-800 transition-all shadow-xl shadow-nepal-blue/20 active:scale-95 disabled:bg-slate-300"
                >
                  {status === 'submitting' ? <Loader2 className="animate-spin" size={24} /> : (
                    <>
                      <span>Submit Application</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
