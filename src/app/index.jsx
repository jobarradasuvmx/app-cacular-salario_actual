import { Checkbox, Host, Picker } from "@expo/ui";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  const [diaslaborados, setDiasLaborados] = useState(0);
  const [salariopordia, setSalarioporDia] = useState(0);
  const [tipoempleado, setTipoEmpleado] = useState(0);
  const [resultado, SetResultado] = useState(0);
  const [aceptado, setAceptado] = useState(false);

  function calcularSalario() {
    let dias = 0,
      salariod = 0,
      tipoE = 0,
      resultado = 0;
    dias = parseInt(diaslaborados);
    salariod = parseInt(salariopordia);
    tipoE = parseInt(tipoempleado);
    resultado = dias * salariod;
    if (tipoE == 1) resultado = resultado + 200;
    if (tipoE == 2) resultado = resultado + 400;
    if (tipoE == 3) resultado = resultado + 600;
    if (aceptado) resultado -= resultado * 0.1;

    SetResultado(resultado);
  }
  return (
    <View style={styles.container}>
      <Text>Mi Esquina Favorita</Text>
      <TextInput
        placeholder="Ingrese los dias"
        value={diaslaborados}
        onChangeText={setDiasLaborados}
      />
      <TextInput
        placeholder="Ingrese el salario por dia"
        value={salariopordia}
        onChangeText={setSalarioporDia}
      />

      <Host matchContents>
        <Picker selectedValue={tipoempleado} onValueChange={setTipoEmpleado}>
          <Picker.Item key={1} label={"Tipo 1"} value={1} />
          <Picker.Item key={2} label={"Tipo 2"} value={2} />
          <Picker.Item key={3} label={"Tipo 3"} value={3} />
        </Picker>
      </Host>

      <Host matchContents>
        <Checkbox
          label="Descontar 10% para caja de ahorro"
          value={aceptado}
          onValueChange={setAceptado}
        />
      </Host>
      <Button title="Salario Total" onPress={calcularSalario} />
      <Text>Resultado Salario{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
