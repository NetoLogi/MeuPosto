import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import backgroundImage from '@assets/background.png';

import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SingUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const handleSingIn = () => {
    navigator.navigate('signIn');
  };

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1}}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} >
        <Image
          w="$full"
          h={624}
          source={backgroundImage}
          defaultSource={backgroundImage}
          position="absolute" 
          alt="Posto em funcionamento"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$gray100" fontSize="$sm">
              Abasteça conosco.
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input 
              placeholder="E-mail" 
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Nome"/>

            <Input 
              placeholder="Senha"
              secureTextEntry
            />

            <Button  title="Criar conta"/>
          </Center>

            <Button 
              title="Voltar para o login" 
              variant="outline" 
              mt="$12"
              onPress={handleSingIn}
            />
        </VStack>
      </VStack>
    </ScrollView>
  )
}