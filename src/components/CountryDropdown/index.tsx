import React from 'react'; //  {ReactElement, useRef, useState}
import {
  // FlatList,
  StyleSheet,
  Text,
  // TouchableOpacity,
  // Modal,
  View,
  Image,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../lib/constants';

interface Props {
  label: string;

  onSelect: (item: any) => void;
}

const CountryDropdown = ({label, onSelect}: Props) => {
  // const DropdownButton: any = useRef();
  // const [visible, setVisible] = useState(false);
  // const [selected, setSelected] = useState<any>(null);
  // const [dropdownTop, setDropdownTop] = useState(0);

  // const data = [
  //   {label: 'One', value: '1'},
  //   {label: 'Two', value: '2'},
  //   {label: 'Three', value: '3'},
  //   {label: 'Four', value: '4'},
  //   {label: 'Five', value: '5'},
  // ];

  // const toggleDropdown = (): void => {
  //   visible ? setVisible(false) : openDropdown();
  // };

  // const openDropdown = (): void => {
  //   DropdownButton.current.measure(
  //     (_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
  //       setDropdownTop(py + h);
  //     },
  //   );
  //   setVisible(true);
  // };

  // const onItemPress = (item: any): void => {
  //   setSelected(item);
  //   onSelect(item);
  //   setVisible(false);
  // };

  // const renderItem = ({item}: any): ReactElement<any, any> => (
  //   <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
  //     <Text>{item.label}</Text>
  //   </TouchableOpacity>
  // );

  // const renderDropdown = (): ReactElement<any, any> => {
  //   return (
  //     <Modal visible={visible} transparent animationType="none">
  //       <TouchableOpacity
  //         style={styles.overlay}
  //         onPress={() => setVisible(false)}
  //       >
  //         <View style={[styles.dropdown, {top: dropdownTop}]}>
  //           <FlatList
  //             data={data}
  //             renderItem={renderItem}
  //             keyExtractor={(item, index) => index.toString()}
  //           />
  //         </View>
  //       </TouchableOpacity>
  //     </Modal>
  //   );
  // };

  // return (
  //   <TouchableOpacity
  //     ref={DropdownButton}
  //     style={styles.button}
  //     onPress={toggleDropdown}>
  //     {renderDropdown()}
  //     <Text style={styles.buttonText}>
  //       {(selected && selected?.label) || label}
  //     </Text>
  //     <AntDesignIcon name="down" color="#ffffff" style={styles.icon} />
  //   </TouchableOpacity>
  // );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/usa.png')}
        style={{width: 15, height: 15}}
      />
      <Text style={styles.text}>USD</Text>
      <AntDesignIcon name="down" color={COLORS.DARK} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  text: {
    color: COLORS.DARK,
    marginLeft: 10,
    fontWeight: '600',
    marginRight: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop: 1,
    fontSize: 16,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default CountryDropdown;
