import React, { useState } from 'react';

// ============================================================================
// UniConnect MVP - University Project Marketplace & Club Aggregator
// Visual Style: Adobe Acrobat Web Home Aesthetic (Bento Box + Soft Gradients)
// ============================================================================

// Sample Data
const projectsData = [
  {
    id: 1,
    title: "AI Study Planner",
    description: "Building an intelligent study scheduler using ML to optimize learning patterns",
    skills: ["React", "Python", "TensorFlow"],
    lookingFor: 2,
    roles: ["Frontend Dev", "ML Engineer"],
    lead: "Sarah M.",
    contactMethod: "discord",
    contactLink: "https://discord.gg/example",
    avatar: "SM"
  },
  {
    id: 2,
    title: "Campus Carpool App",
    description: "Sustainable ride-sharing platform for La Trobe commuters",
    skills: ["Flutter", "Firebase", "Maps API"],
    lookingFor: 3,
    roles: ["Mobile Dev", "Backend", "UI Designer"],
    lead: "James K.",
    contactMethod: "whatsapp",
    contactLink: "https://wa.me/example",
    avatar: "JK"
  },
  {
    id: 3,
    title: "Mental Health Chatbot",
    description: "AI-powered wellness companion for university students",
    skills: ["Node.js", "OpenAI", "MongoDB"],
    lookingFor: 1,
    roles: ["Full Stack Dev"],
    lead: "Priya S.",
    contactMethod: "telegram",
    contactLink: "https://t.me/example",
    avatar: "PS"
  },
  {
    id: 4,
    title: "AR Campus Navigator",
    description: "Augmented reality wayfinding for new students on campus",
    skills: ["Unity", "ARKit", "C#"],
    lookingFor: 2,
    roles: ["AR Developer", "3D Artist"],
    lead: "Tom W.",
    contactMethod: "discord",
    contactLink: "https://discord.gg/example2",
    avatar: "TW"
  },
  {
    id: 5,
    title: "Hackathon 2025 Team",
    description: "Looking for teammates for upcoming Google Dev Fest",
    skills: ["Any", "Enthusiasm", "Problem Solving"],
    lookingFor: 4,
    roles: ["Anyone Welcome!"],
    lead: "Alex C.",
    contactMethod: "whatsapp",
    contactLink: "https://wa.me/example2",
    avatar: "AC"
  }
];

const clubsData = [
  {
    id: 1,
    name: "Robotics Society",
    description: "Building robots, breaking things, learning together",
    members: 127,
    category: "Tech",
    platform: "discord",
    link: "https://discord.gg/robotics",
    logo: "🤖",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 2,
    name: "Entrepreneurs Club",
    description: "From ideas to startups - weekly pitches & networking",
    members: 89,
    category: "Business",
    platform: "whatsapp",
    link: "https://chat.whatsapp.com/entrepreneurs",
    logo: "🚀",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 3,
    name: "Photography Society",
    description: "Capture campus life through your lens",
    members: 203,
    category: "Creative",
    platform: "telegram",
    link: "https://t.me/photosociety",
    logo: "📸",
    color: "from-pink-400 to-purple-500"
  },
  {
    id: 4,
    name: "Gaming Guild",
    description: "Casual & competitive gaming community",
    members: 312,
    category: "Social",
    platform: "discord",
    link: "https://discord.gg/gaming",
    logo: "🎮",
    color: "from-green-400 to-teal-500"
  },
  {
    id: 5,
    name: "Debate Society",
    description: "Sharpen your arguments, broaden perspectives",
    members: 67,
    category: "Academic",
    platform: "whatsapp",
    link: "https://chat.whatsapp.com/debate",
    logo: "🎯",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 6,
    name: "Environmental Action",
    description: "Making La Trobe greener, one project at a time",
    members: 145,
    category: "Activism",
    platform: "telegram",
    link: "https://t.me/greenlatrobe",
    logo: "🌱",
    color: "from-emerald-400 to-green-600"
  }
];

// ============================================================================
// Icon Components
// ============================================================================

const HomeIcon = ({ active }) => (
  <svg className={`w-6 h-6 ${active ? 'text-gray-900' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const SearchIcon = ({ active }) => (
  <svg className={`w-6 h-6 ${active ? 'text-gray-900' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon = ({ active }) => (
  <svg className={`w-6 h-6 ${active ? 'text-gray-900' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ============================================================================
// Skill Tag Component
// ============================================================================

const SkillTag = ({ skill }) => {
  const colors = {
    'React': 'bg-sky-100 text-sky-700',
    'Python': 'bg-emerald-100 text-emerald-700',
    'TensorFlow': 'bg-orange-100 text-orange-700',
    'Flutter': 'bg-blue-100 text-blue-700',
    'Firebase': 'bg-amber-100 text-amber-700',
    'Maps API': 'bg-red-100 text-red-700',
    'Node.js': 'bg-green-100 text-green-700',
    'OpenAI': 'bg-violet-100 text-violet-700',
    'MongoDB': 'bg-emerald-100 text-emerald-700',
    'Unity': 'bg-slate-100 text-slate-700',
    'ARKit': 'bg-pink-100 text-pink-700',
    'C#': 'bg-purple-100 text-purple-700',
    'Any': 'bg-gray-100 text-gray-600',
    'Enthusiasm': 'bg-rose-100 text-rose-600',
    'Problem Solving': 'bg-indigo-100 text-indigo-600',
  };
  
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${colors[skill] || 'bg-gray-100 text-gray-600'}`}>
      {skill}
    </span>
  );
};

// ============================================================================
// Project Card Component
// ============================================================================

const ProjectCard = ({ project, onApply }) => {
  const platformIcon = {
    whatsapp: <WhatsAppIcon />,
    discord: <DiscordIcon />,
    telegram: <TelegramIcon />
  };
  
  const platformColor = {
    whatsapp: 'bg-green-500 hover:bg-green-600',
    discord: 'bg-indigo-500 hover:bg-indigo-600',
    telegram: 'bg-sky-500 hover:bg-sky-600'
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center text-sm font-bold text-gray-700">
            {project.avatar}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base leading-tight">{project.title}</h3>
            <p className="text-xs text-gray-500">by {project.lead}</p>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {project.description}
      </p>
      
      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.skills.map((skill, idx) => (
          <SkillTag key={idx} skill={skill} />
        ))}
      </div>
      
      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-gray-50 rounded-xl">
        <UsersIcon />
        <span className="text-xs text-gray-600">
          Looking for <span className="font-semibold text-gray-800">{project.lookingFor}</span> • {project.roles.join(', ')}
        </span>
      </div>
      
      {/* Actions */}
      <div className="flex gap-2">
        <button 
          onClick={() => onApply(project)}
          className="flex-1 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          Apply
        </button>
        <a 
          href={project.contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-11 h-11 ${platformColor[project.contactMethod]} text-white rounded-xl transition-colors`}
        >
          {platformIcon[project.contactMethod]}
        </a>
      </div>
    </div>
  );
};

// ============================================================================
// Club Card Component
// ============================================================================

const ClubCard = ({ club }) => {
  const platformConfig = {
    whatsapp: { icon: <WhatsAppIcon />, color: 'bg-[#25D366] hover:bg-[#20BD5A]', label: 'Join WhatsApp' },
    discord: { icon: <DiscordIcon />, color: 'bg-[#5865F2] hover:bg-[#4752C4]', label: 'Join Discord' },
    telegram: { icon: <TelegramIcon />, color: 'bg-[#0088CC] hover:bg-[#0077B5]', label: 'Join Telegram' }
  };
  
  const config = platformConfig[club.platform];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
      {/* Header with gradient */}
      <div className={`h-20 bg-gradient-to-br ${club.color} relative`}>
        <div className="absolute -bottom-6 left-4">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl border-2 border-white">
            {club.logo}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-10 px-4 pb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-900 text-base">{club.name}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
            {club.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {club.description}
        </p>
        
        {/* Members count */}
        <div className="flex items-center gap-1.5 text-gray-500 mb-4">
          <UsersIcon />
          <span className="text-sm font-medium">{club.members} active members</span>
        </div>
        
        {/* CTA Button - The "Killer Feature" */}
        <a
          href={club.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3.5 ${config.color} text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md`}
        >
          {config.icon}
          <span>{config.label}</span>
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  );
};

// ============================================================================
// Create Modal Component
// ============================================================================

const CreateModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <CloseIcon />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">What are you posting?</h2>
          <p className="text-gray-500 mt-1">Choose a category to get started</p>
        </div>
        
        {/* Options */}
        <div className="px-6 pb-6 space-y-3">
          {/* Project Idea Option */}
          <button
            onClick={() => onSelect('project')}
            className="w-full flex items-center gap-4 p-5 bg-gradient-to-br from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100 rounded-2xl border-2 border-transparent hover:border-orange-200 transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:scale-105 transition-transform">
              <LightbulbIcon />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-gray-900 text-lg">Project Idea</h3>
              <p className="text-sm text-gray-500">Find teammates for your next build</p>
            </div>
            <ChevronRightIcon />
          </button>
          
          {/* Club Recruitment Option */}
          <button
            onClick={() => onSelect('club')}
            className="w-full flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl border-2 border-transparent hover:border-blue-200 transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
              <MegaphoneIcon />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-gray-900 text-lg">Club Recruitment</h3>
              <p className="text-sm text-gray-500">Attract new members to your community</p>
            </div>
            <ChevronRightIcon />
          </button>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Only verified @latrobe.edu.au users can post
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Tab Button Component
// ============================================================================

const TabButton = ({ active, onClick, children, gradient }) => (
  <button
    onClick={onClick}
    className={`
      flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-200
      ${active 
        ? `bg-gradient-to-r ${gradient} text-white shadow-lg` 
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
      }
    `}
  >
    {children}
  </button>
);

// ============================================================================
// Main App Component
// ============================================================================

export default function UniConnect() {
  const [activeTab, setActiveTab] = useState('collaborate');
  const [activeNav, setActiveNav] = useState('home');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleApply = (project) => {
    setNotification(`Application sent to ${project.lead} for "${project.title}"`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateSelect = (type) => {
    setShowCreateModal(false);
    setNotification(`Opening ${type === 'project' ? 'Project' : 'Club'} creation form...`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24 font-sans">
      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl text-sm font-medium">
            {notification}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F5F5F5]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">UniConnect</h1>
              <p className="text-xs text-gray-500 font-medium">La Trobe University</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30"
            >
              <PlusIcon />
              <span>Create</span>
            </button>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex gap-2 p-1.5 bg-gray-200/60 rounded-2xl">
            <TabButton 
              active={activeTab === 'collaborate'} 
              onClick={() => setActiveTab('collaborate')}
              gradient="from-orange-400 to-pink-500"
            >
              Collaborate
            </TabButton>
            <TabButton 
              active={activeTab === 'campus'} 
              onClick={() => setActiveTab('campus')}
              gradient="from-blue-500 to-indigo-600"
            >
              Campus Life
            </TabButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 pt-6">
        {activeTab === 'collaborate' ? (
          <>
            {/* Hero Section - Collaborate */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-300 via-pink-300 to-rose-300 p-6 mb-6 shadow-lg shadow-orange-200/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                  What will you create<br />this semester?
                </h2>
                <p className="text-gray-800/80 text-sm font-medium">
                  Find your perfect team • Ship something amazing
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-4">
              {projectsData.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onApply={handleApply}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Hero Section - Campus Life */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-500 p-6 mb-6 shadow-lg shadow-blue-300/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                  Find your<br />community
                </h2>
                <p className="text-white/80 text-sm font-medium">
                  One tap to join • Stay connected off-app
                </p>
              </div>
            </div>

            {/* Clubs Grid - 2 columns on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clubsData.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-around px-6 py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-200/50 pointer-events-auto">
            <button 
              onClick={() => setActiveNav('home')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeNav === 'home' ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <HomeIcon active={activeNav === 'home'} />
              <span className="text-xs font-semibold">Home</span>
            </button>
            <button 
              onClick={() => setActiveNav('search')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeNav === 'search' ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <SearchIcon active={activeNav === 'search'} />
              <span className="text-xs font-semibold">Search</span>
            </button>
            <button 
              onClick={() => setActiveNav('profile')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeNav === 'profile' ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <UserIcon active={activeNav === 'profile'} />
              <span className="text-xs font-semibold">Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Create Modal */}
      <CreateModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSelect={handleCreateSelect}
      />
    </div>
  );
}
