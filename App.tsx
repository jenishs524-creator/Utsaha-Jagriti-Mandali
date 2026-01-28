
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AICompanion from './components/AICompanion';
import BibleTraining from './components/BibleTraining';
import Branches from './components/Branches';
import BranchDetail from './components/BranchDetail';
import AdminDashboard from './components/AdminDashboard';
import FloatingAI from './components/FloatingAI';
import AdmissionForm from './components/AdmissionForm';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './components/Gallery';

export type Language = 'en';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface AIChatLog {
  sessionId: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [aiLogs, setAiLogs] = useState<AIChatLog[]>([]);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash.startsWith('branch/')) {
        setSelectedBranchId(hash.split('/')[1]);
        setCurrentPage('branch-detail');
      } else {
        setCurrentPage(hash);
        setSelectedBranchId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSendMessage = (msg: Omit<ContactMessage, 'id' | 'date'>) => {
    const newMessage: ContactMessage = {
      ...msg,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleString(),
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const handleLogAIChat = (log: Omit<AIChatLog, 'timestamp'>) => {
    const newLog: AIChatLog = {
      ...log,
      timestamp: new Date().toLocaleTimeString(),
    };
    setAiLogs(prev => [...prev, newLog]);
  };

  const churchName = "Utsaha Jagriti Mandali";
  const location = "Gokarneshwor Banquet Opposite, Kathmandu, Nepal";
  const estDate = "BS 2072/01/10 (AD 2015/04/23)";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-nepal-blue selection:text-white">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={navigateTo} 
        churchName={churchName}
        location={location}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} churchName={churchName} location={location} estDate={estDate} />
            <div className="bg-white py-12">
               <Services location={location} estDate={estDate} />
            </div>
            <About estDate={estDate} location={location} />
            <Gallery />
            <Branches isMain={true} />
            <Contact location={location} estDate={estDate} onSendMessage={handleSendMessage} />
          </>
        )}
        
        {currentPage === 'about' && (
          <div className="animate-fade-in">
             <div className="bg-church-900 py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[120px]"></div>
                <h1 className="text-5xl md:text-7xl text-white font-serif font-bold relative z-10 tracking-tight">
                  Our Journey & Calling
                </h1>
                <p className="text-sky-300 mt-4 font-bold tracking-widest uppercase text-sm">Founded: {estDate}</p>
             </div>
             <About estDate={estDate} location={location} />
          </div>
        )}

        {currentPage === 'branches' && (
          <div className="animate-fade-in">
             <div className="bg-church-900 py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/10 blur-[120px]"></div>
                <h1 className="text-5xl md:text-7xl text-white font-serif font-bold relative z-10 tracking-tight">
                  Kingdom Reach
                </h1>
                <p className="text-slate-300 mt-4 max-w-2xl mx-auto italic">"Go into all the world and preach the gospel to all creation." — Mark 16:15</p>
             </div>
             <Branches />
          </div>
        )}

        {currentPage === 'branch-detail' && selectedBranchId && (
          <BranchDetail branchId={selectedBranchId} />
        )}

        {currentPage === 'ministries' && (
          <div className="animate-fade-in">
              <div className="bg-church-900 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-serif font-bold tracking-tight">
                   Ministries
                </h1>
             </div>
             <Services location={location} estDate={estDate} />
          </div>
        )}

        {currentPage === 'bible-training' && (
          <div className="animate-fade-in">
             <BibleTraining onOpenAdmission={() => setIsAdmissionOpen(true)} />
          </div>
        )}

        {currentPage === 'companion' && (
          <div className="animate-fade-in">
             <div className="bg-indigo-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-serif font-bold tracking-tight">Scripture AI Companion</h1>
             </div>
             <AICompanion />
          </div>
        )}

        {currentPage === 'contact' && (
           <div className="animate-fade-in">
              <Contact location={location} estDate={estDate} onSendMessage={handleSendMessage} />
           </div>
        )}

        {currentPage === 'admin-portal' && (
          <AdminDashboard messages={messages} aiLogs={aiLogs} language="en" />
        )}
      </main>

      <footer className="bg-church-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-7xl auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">⛪</div>
              <span className="font-serif font-bold text-white text-xl">{churchName}</span>
            </div>
            <p className="text-xs tracking-widest uppercase opacity-60">{location}</p>
            <p className="text-[10px] opacity-30">&copy; {new Date().getFullYear()} {churchName} • Since {estDate}</p>
          </div>
        </div>
      </footer>

      <FloatingAI onMessageLogged={handleLogAIChat} />
      <WhatsAppButton phoneNumber="9809495879" />
      
      {isAdmissionOpen && (
        <AdmissionForm isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} language="en" />
      )}
    </div>
  );
};

export default App;
