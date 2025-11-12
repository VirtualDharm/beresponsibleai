import React from 'react';
import ChatHeader from './ChatHeader';
import WelcomeScreen from './WelcomeScreen';
import ChatView from './ChatView';
import AccountSettings from './AccountSettings';

// The component is simplified, it just passes props down
const MainContent = ({ activeView, activeChatId, onNewChat }) => {
    
  const renderContent = () => {
    if (activeView === 'settings') {
      return <AccountSettings />;
    }
    
    if (activeChatId) {
      return <ChatView chatId={activeChatId} />;
    }
    
    // Pass onNewChat to WelcomeScreen
    return <WelcomeScreen onNewChat={onNewChat} />;
  };

  return (
    <div className="flex flex-1 flex-col bg-[#000000]">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;