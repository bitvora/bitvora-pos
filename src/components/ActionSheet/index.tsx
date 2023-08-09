import React, {ReactNode} from 'react';
import {Actionsheet, useDisclose, Center, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';

type Props = {
  content: ReactNode;
  trigger: ReactNode;
};

const ActionSheet = ({content, trigger}: Props) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <Center>
      <TouchableOpacity onPress={onOpen}>{trigger}</TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box
            w="100%"
            px={4}
            maxHeight={'lg'}
            overflowY="auto"
            justifyContent="center">
            {content}
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default ActionSheet;
