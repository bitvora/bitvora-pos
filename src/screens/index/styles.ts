import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 35,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
  },
  footer: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
  },
  linkContainer: {
    marginLeft: 5,
  },
  linkText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '800',
    marginBottom: 10,
  },
});

export default styles;
