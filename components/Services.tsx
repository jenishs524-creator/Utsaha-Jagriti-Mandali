
import React from 'react';
import { Clock, Users, BookOpen, Heart, MapPin, Music, Shield, MessageSquare, Sparkles } from 'lucide-react';

interface ServicesProps {
  location: string;
  estDate: string;
}

const serviceTimes = [
  { 
    day: "Saturdays", 
    isMerged: true,
    events: [
      { name: "Main Worship Service", time: "10:00 AM - 12:00 PM" },
      { name: "Youth & Fellowship", time: "1:00 PM - 2:00 PM" }
    ],
    desc: "Our primary day of congregational worship and youth engagement in Gwarku." 
  },
  { 
    day: "Wednesdays", 
    name: "Prayer & Bible Study", 
    time: "12:00 PM - 1:00 PM", 
    desc: "A mid-day hour dedicated to deep scripture study and collective intercession." 
  },
  { 
    day: "Fridays", 
    name: "Fasting Prayer", 
    time: "12:00 PM - 1:00 PM", 
    desc: "Seeking the Lord's face through fasting and intensive intercessory prayer." 
  }
];

const ministries = [
  {
    title: "Children's Ministry", 
    desc: "Nurturing the spiritual growth of children through engaging Bible lessons.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Youth Fire", 
    desc: "Empowering the next generation to live boldly for Christ in a changing world.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Worship & Arts", 
    desc: "Leading the congregation into the presence of God through music and praise.",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Intercessory Prayer", 
    desc: "Standing in the gap for our city, nation, and church through constant prayer.",
    imageUrl: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Women's Fellowship", 
    desc: "A place for sisters to grow in prayer, wisdom, and mutual support.",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Outreach & Mission", 
    desc: "Extending Christ's love to Lalitpur through active service and evangelism.",
    imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop"
  }
];

const Services: React.FC<ServicesProps> = ({ location }) => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-church-900 mb-6 tracking-tight">
                Weekly Gatherings
              </h2>
              <div className="flex items-start text-nepal-blue bg-blue-100/50 p-6 rounded-3xl border border-blue-200">
                <MapPin className="w-8 h-8 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">
                    Church Location
                  </p>
                  <p className="text-slate-700">{location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTimes.map((service, idx) => {
              return (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-8 border-nepal-red hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                  <div className="flex items-center mb-6 text-nepal-blue">
                    <Clock className="w-6 h-6 mr-2" />
                    <span className="font-bold text-sm uppercase tracking-widest">{service.day}</span>
                  </div>
                  
                  {service.isMerged ? (
                    <div className="space-y-6 mb-6">
                      {service.events?.map((ev, eIdx) => (
                        <div key={eIdx} className="border-l-4 border-blue-50 pl-4 py-1">
                          <h3 className="text-lg font-bold text-slate-800">{ev.name}</h3>
                          <p className="text-nepal-blue font-black">{ev.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
                      <p className="text-nepal-blue text-lg font-black mb-6">{service.time}</p>
                    </>
                  )}
                  
                  <p className="text-slate-500 leading-relaxed font-light text-sm flex-grow">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              <span>Living the Gospel</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-church-900 mb-6">
               Our Spiritual Focus
            </h2>
            <div className="w-20 h-1 bg-nepal-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ministries.map((ministry, idx) => {
               return (
                <div key={idx} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100">
                  <div className="h-64 overflow-hidden relative bg-slate-200">
                     <img src={ministry.imageUrl} alt={ministry.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-90" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{ministry.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light">{ministry.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
