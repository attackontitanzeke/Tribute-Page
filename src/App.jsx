import React from 'react';
import { Crown, Sword, Medal, Ship, Mountain, Flag } from 'lucide-react';
import nap1 from './assets/nap-1.jpg';
import nap2 from './assets/nap-2.jpg';

function TimelineEvent({ year, title, description, icon: Icon }) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <span className="text-sm font-serif italic text-gray-600">{year}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#c9c1b3]">
      {/* Hero Section */}
      <header className="h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${nap1})`,
            filter: 'brightness(0.3)',
          }}
        />
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-serif mb-6  whitespace-nowrap">Napoléon Bonaparte</h1>
          <p className="text-xl md:text-2xl font-light italic">1769 - 1821</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl leading-relaxed mb-8">
            Napoléon Bonaparte, one of history's most influential figures, rose from humble beginnings
            to become Emperor of France and one of the greatest military commanders in history.
            His actions shaped European politics and warfare for decades to come.
          </p>
          
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img 
              src={nap2}
              alt="French Architecture"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-4xl font-serif mb-12 text-center">Key Moments in History</h2>
          
          <div className="space-y-12">
            <TimelineEvent
              year="1769"
              title="Birth in Corsica"
              description="Born in Ajaccio, Corsica, to Carlo and Letizia Bonaparte"
              icon={Crown}
            />
            
            <TimelineEvent
              year="1785"
              title="Graduates Military Academy"
              description="Graduates from École Militaire in Paris as a Second Lieutenant"
              icon={Sword}
            />
            
            <TimelineEvent
              year="1796"
              title="Italian Campaign"
              description="Leads successful military campaign in Italy, establishing himself as a brilliant military commander"
              icon={Flag}
            />
            
            <TimelineEvent
              year="1799"
              title="Coup of 18 Brumaire"
              description="Seizes power in France through a coup d'état, becoming First Consul"
              icon={Medal}
            />
            
            <TimelineEvent
              year="1804"
              title="Coronation as Emperor"
              description="Crowned Emperor of the French at Notre-Dame Cathedral in Paris"
              icon={Crown}
            />
            
            <TimelineEvent
              year="1812"
              title="Russian Campaign"
              description="Leads disastrous invasion of Russia, marking the beginning of his decline"
              icon={Mountain}
            />
            
            <TimelineEvent
              year="1815"
              title="Battle of Waterloo"
              description="Final defeat at Waterloo, leading to his exile on Saint Helena"
              icon={Ship}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif italic">
            "Impossible is a word to be found only in the dictionary of fools."
          </p>
          <p className="mt-4 text-sm">- Napoléon Bonaparte</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
