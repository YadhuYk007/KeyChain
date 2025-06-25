import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -1,
    color: '#3590ae',
  },
  logout: {
    color: 'red',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontWeight: '600',
  },
  saperator: {
    width: '100%',
    height: 0.3,
    backgroundColor: 'grey',
    marginVertical: 12,
  },
  card: {
    paddingHorizontal: 16,
    backgroundColor: '#3590ae',
    margin: 16,
    borderRadius: 8,
    paddingVertical: 40,
  },
  avatarView: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  avatarText: { fontSize: 35, fontWeight: '900', color: '#3590ae' },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  email: { textAlign: 'center', color: 'white', fontWeight: '400' },
});

export default styles;
