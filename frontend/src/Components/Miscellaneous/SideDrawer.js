import { Box, Button, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box>
        <Tooltip label='Search Users t chat' hasArrow placement='bottom-end'>
          <Button variant='ghost'></Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
