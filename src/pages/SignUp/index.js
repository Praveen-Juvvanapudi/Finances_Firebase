//React
import React, { useState } from "react";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Components
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";

//Styles
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Link,
  LinkText,
} from "./styles";

export default function SignIn() {
  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigation
  const navigation = useNavigation();

  //Functions
  function navigateToSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled={true}
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            onChangeText={(t) => setName(t)}
            value={name}
          />

          <Input
            placeholder="Email"
            onChangeText={(t) => setEmail(t)}
            value={email}
          />

          <Input
            placeholder="Senha"
            onChangeText={(t) => setPassword(t)}
            value={password}
          />
        </AreaInput>

        <SubmitButton text="Cadastrar" onPress={() => {}} />

        <Link onPress={navigateToSignIn}>
          <LinkText>Já possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}