import React from 'react';
import { Box, palette } from '../../components';
interface ItemProps {}

const Item = () => {
  return (
    <Box padding='m' flexDirection='row'>
      <Box
        width={120}
        height={120}
        borderRadius='m'
        style={{ backgroundColor: palette.yellow }}></Box>
    </Box>
  );
};

export default Item;
