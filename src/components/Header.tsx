import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import {
  Heading,
  HStack,
  IconButton,
  StyledProps,
  useTheme,
} from "native-base";

type Props = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const { colors } = useTheme();

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <HStack
      w="full"
      justifyContent="center"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={6}
      {...rest}
    >
      <IconButton
        zIndex={2}
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-10}
      >
        {title}
      </Heading>
    </HStack>
  );
}
