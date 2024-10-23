import React, { useState } from 'react';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import TaskList from './components/TaskList';
import Events from './components/Events';
import PersonalProgress from './components/PersonalProgress';
import ProfileAccordion from './components/ProfileAccordion';
import Footer from './components/Footer';
import Boards from './components/Boards';

// Sample posts data
const posts = [
  { author: 'Yael Adamson-Brown', date: '18th Feb 2023', title: 'Harvesting Event', content: 'Working at the Harvesting session on 18th Feb.' },
  { author: 'John Doe', date: '17th Feb 2023', title: 'New Project', content: 'Working on a new project.' }
];

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ECD4EA', color: '#693B69' }}>
      {/* Fixed Header */}
      <Header className="sticky top-0 z-50" style={{ backgroundColor: '#511F52', color: '#FFFFFF' }} />

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6">
        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="p-4 bg-muted-purple rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <TaskList />
          </div>
          <div className="p-4 bg-muted-purple rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <Boards />
          </div>
        </div>

        {/* Center Section: NewsFeed */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="p-4 bg-light-purple rounded-lg text-dark-purple transition-transform transform hover:scale-105 hover:shadow-lg">
            <NewsFeed posts={posts} />
          </div>
          <div className="p-4 bg-muted-purple rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <ProfileAccordion />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="p-4 bg-muted-purple rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <Events />
          </div>
          <div className="p-4 bg-muted-purple rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <PersonalProgress />
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer className="sticky bottom-0" style={{ backgroundColor: '#511F52', color: '#FFFFFF' }} />
    </div>
  );
};

export default App;
