import { ChatState } from '../context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/Miscellaneous/SideDrawer';
import MyChats from '../Components/MyChats';
import ChatBox from '../Components/ChatBox';

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box d='flex' justifyContent='space-between'>
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
