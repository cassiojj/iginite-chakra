import React, { useEffect, useState } from 'react';

import { Flex, Text } from '@chakra-ui/react';


import { api } from '../../services/api';

type showUserProps = {
    userId: string
} 

export default function ShowUser({ userId }: showUserProps) {

  const [info, setInfo] = useState();

  useEffect(() => {
    api.get(`user/${userId}`).then(response => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);

  // console.log(data);
  return (
    <Flex>


      <Text> Show User </Text>
      <Text> User </Text>
    </Flex>
  );
}
