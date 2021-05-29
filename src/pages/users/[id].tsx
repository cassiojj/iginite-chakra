import { Flex, Text } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { useQuery } from 'react-query'

type UserProps = {
  id: number;
  name: string;
}

export default function User({ id }: UserProps) {

  const { data } = useQuery('user', async () => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await response.json()

    return data;
  })

  return (
    <Flex direction="column">
      <Text>
        ID: {data.user.id}
      </Text>
      <Text>
        Name: {data.user.name}
      </Text>
    </Flex>
    )
  }
  
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  return {
    props: {
      id,
    }
  }
}

