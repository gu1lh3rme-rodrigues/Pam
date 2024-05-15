import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import slider from 'react-native-community/slider';
import { RadioButton, Switch, TextInput } from 'react-native-paper';

export default function App() {

  const [nome, setnome] = useState ('');
  const [email, setemail ]= useState ('');
  const [passagem, setpassagem] = useState ('');
  const [passaporte, setpassaporte] = useState ('');
  const [documento, setdocumento] = useState ('RG');
  const [valor, setvalor] = useState (1000);
  const [pais, setpais] = useState ('0');
  const [linha, setlinha] = useState ('0');

//Puxar td certo


  const paises =[
    {paisnome: 'França', valor: 1},
    {paisnome: 'México', valor: 2},
    {paisnome: 'Espanha', valor: 3},
    {paisnome: 'Turquia', valor: 4},
    {paisnome: 'Itália', valor: 5},
    {paisnome: 'Estados Unidos', valor: 6},
    {paisnome: 'Grécia', valor: 7},
    {paisnome: 'Áustria', valor: 8},
    {paisnome: 'Alemanha', valor: 9},
    {paisnome: 'Emirados Árabes', valor: 10}

  ]

  const linhas = [ 
    {linhaNome: 'Gol', valor: 1},
    {linhaNome: 'Azul', valor: 2},
    {linhaNome: 'Latam', valor: 3},
    {linhaNome: 'AirFrance', valor: 4},
    {linhaNome: 'Tam', valor: 5}
  ]

  function dadosfinal(){
    if(nome == '' || email == '' || documento == '' || passaporte == '')
      {alert('Preencha todos os dados corretamente !!!')
      }
    else {
      alert ('Cadastro de Voo: \n \n'+
        'Nome: ' + nome + '\n' +
        'Email: '+ email+ '\n' +
        'Passagem: '+ passagem+ '\n' +
        'Passaporte: '+ passaporte+ '\n' +
        'Documento: '+ documento+ '\n' +
        'Valor: '+ valor.toFixed(2) + '\n' +
        'País de Viagem: '+ pais[paises].paisnome+ '\n' +
        'Linha: '+ linha[linhas].linhaNome+ '\n' 
    )
    }
  }

  let modeloItens = pais.map((v,k)=>{
    return<Picker.Item key={k} value={k} label={v.paisnome}></Picker.Item>
  }
  )

  let modelolinha = linha.map((a,b)=>{
    return<Picker.Item key={a} value={a} label={a.linhanome}></Picker.Item>
  }
  )
  return (
    <View style={styles.container}>
      <Text style={styles.over}>Aeroporto Etec</Text>
      <Text style={styles.over}>Cadastro da passagem</Text>
      <View style={styles.area}>
      {/* Nome */}
      <Text style={styles.texto}>Digite o seu nome:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={nome=> setnome(nome)}
      placeholder='Digite o seu nome aqui.'
      >
      </TextInput>
      {/* email */}
      <Text style={styles.texto}>Digite o seu email:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={email=> setemail(email)}
      placeholder='Digite o seu email aqui.'
      >
      </TextInput>

      {/* Passagem */}
      <Text style={styles.texto}>Digite o código da sua passagem:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={passagem=> setpassagem(passagem)}
      placeholder='Digite a passagem aqui.'
      >
      </TextInput>

      {/* Passaporte */}

      <Text style={styles.texto}>Digite o nome do passaporte utilizado:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={passaporte=> setpassaporte(passaporte)}
      placeholder='Digite aqui.'
      >
      </TextInput>

      {/* Documento */}
      <Text style={styles.texto}>Digite qual documento foi usado:</Text>
      <TextInput 
      style={styles.input}
      onChangeText={documento=> setdocumento(documento)}
      placeholder='Digite o documento.'
      >
      </TextInput>

      {/* Preço */}<View style={styles.valor}>
      <Text style={styles.slider}>Valor da passagem:</Text>
      <Text style={styles.slidertexto}>R$ {valor.toFixed(4)}:</Text>
      </View>

        {/* País */}
        <View
        style={styles.pais}>
          <Text style={styles.texto}>Selecione o país de destino</Text>
          <Picker
          style={styles.pickerpais}
          selectedValue={pais}
          onValueChange={(itemValue, itemIndex) => setpais(itemValue)}
          >
            {modeloItens}
          </Picker>
        </View>

        {/* linha */}
         <View
        style={styles.linha}>
          <Text style={styles.texto}>Selecione a linha comercial</Text>
          <Picker
          style={styles.pickerlinhas}
          selectedValue={pais}
          onValueChange={(itemValue, itemIndex) => setlinha(itemValue)}
          >
            {modeloItens}
          </Picker>
        </View>

        {/* botão */}
        <TouchableOpacity
        style={styles.botao}
        onPress={dadosfinal}
        >
          <Text style={styles.botaotexto}>Enviar Formulário</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
