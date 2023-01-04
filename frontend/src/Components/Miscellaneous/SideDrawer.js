import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        w='100% '
        p='5px 10px 5px 10px'
        borderWidth='5px'
        display='flex'
      >
        <Tooltip label='Search Users to chat' hasArrow placement='bottom-end'>
          <Button variant='ghost'>
            <Text d={{ base: 'none', md: 'flex' }} px='4'>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize='2xl' fontFamily='Poppins'>
          Foxxy Talk
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize='2xl' m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu></Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
