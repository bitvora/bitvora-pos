import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#374151',
    fontWeight: '700',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#374151',
    marginRight: 2,
  },
  spanSubHeaderText: {
    fontSize: 14,
    color: '#FF5A1F',
    marginRight: 2,
    fontWeight: '700',
  },
  moreSubHeaderText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 21,
  },

  footer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#000',
    height: 16,
    width: 16,
    marginRight: 5,
    borderRadius: 8,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  loginButtonContainer: {
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#F8F4F2',
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    borderRadius: 10,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#374151',
    fontWeight: '700',
    width: '80%',
    marginRight: 10,
  },
});

export default styles;
