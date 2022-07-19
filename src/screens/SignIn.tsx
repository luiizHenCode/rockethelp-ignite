import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Eye, Key } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../assets/logo_primary.svg";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const SignIn = () => {
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" bg="gray.600" px={8}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        keyboardType="email-address"
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="ENTRAR" w="full" />
    </VStack>
  );
};
