import React from 'react';
import { Text, View } from 'react-native';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    limpiar,
    positivoNegativo,
    borrar,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    numero,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc color="#9b9b9b" texto="C" action={limpiar} />
        <BotonCalc color="#9b9b9b" texto="+/-" action={positivoNegativo} />
        <BotonCalc color="#9b9b9b" texto="del" action={borrar} />
        <BotonCalc color="#ff9427" texto="/" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc color="#ff9427" texto="X" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc color="#ff9427" texto="-" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc color="#ff9427" texto="+" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" action={armarNumero} ancho />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" action={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
