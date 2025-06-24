import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 16,
    paddingTop: 40,
  },
  title: { flex: 0.2, alignItems: 'center', justifyContent: 'center' },
  titleText: {
    fontSize: 38,
    fontWeight: '700',
    letterSpacing: -1,
    color: '#3590ae',
  },
  inputView: { flex: 0.7, justifyContent: 'center' },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 18,
    padding: 12,
    marginVertical: 10,
    color: 'black',
    minHeight: 50,
    borderColor: '#F0EEE9',
    borderWidth: 1,
  },
  passwordInput: {
    fontSize: 18,
    padding: 12,
    color: 'black',
    flex: 0.85,
  },
  button: { backgroundColor: '#3590ae', borderRadius: 8, marginTop: 25 },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 14,
    textAlign: 'center',
  },
  signupView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText1: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  signupText2: { color: '#3590ae', fontSize: 16, fontWeight: '700' },
});

export default styles;
