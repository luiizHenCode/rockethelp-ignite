import { HStack, Icon, VStack, Text } from "native-base";
import { Hourglass } from "phosphor-react-native";

import { Header } from "../components/Header";

export function Details() {
  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação" pt={12} />
      <HStack w="full">
        <Hourglass size={24} color="gray.200" />
        <Text color="gray.200" ml={4}>
          Em andamento
        </Text>
      </HStack>
    </VStack>
  );
}
