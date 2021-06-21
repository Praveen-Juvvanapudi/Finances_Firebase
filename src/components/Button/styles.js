//styled-components
import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 45px;

  margin-top: 10px;

  background-color: ${(props) =>
    props.color === "#00b94a" ? "#00b94a" : "#c62c36"};
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #242424;
`;
