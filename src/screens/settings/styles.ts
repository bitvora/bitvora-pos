import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdc0c6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  iconContainer: {
    backgroundColor: '#ffece3',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  storeNameView: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeName: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 10,
  },
  label: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop: 1,
    fontSize: 16,
  },
  valueSection: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
  },
  value: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 5,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  more: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
    width: '70%',
    marginLeft: '15%',
    textAlign: 'center',
  },
  moreText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkText: {
    color: '#FF5A1F',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default styles;
