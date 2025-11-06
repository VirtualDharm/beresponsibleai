import React from 'react';
import ChatHeader from './ChatHeader';
import WelcomeScreen from './WelcomeScreen';
// In a real app, you would have state here to switch between WelcomeScreen and ChatView
// const [activeChat, setActiveChat] = useState(null);

const MainContent = () => {
  return (
    <div className="flex flex-1 flex-col">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-6">
        {/* Conditionally render WelcomeScreen or ChatView here */}
        <WelcomeScreen />
      </div>
    </div>
  );
};

export default MainContent;
