import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker({moedas, onChange}) {
  return (
    <RNPickerSelect
      items={moedas}
      onValueChange={valor => onChange(valor)}
      style={{
        inputAndroid: {
          fontSize: 20,
          color: '#000',
        },
      }}
    />
  );
}
