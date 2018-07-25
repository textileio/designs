import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderColor: '#E1E1E1',
    borderBottomWidth: 1
  },
  title: {
    fontFamily: "BentonSans",
    fontSize: 14,
    color: "#9b9b9b"
  },
  closeIcon: {
    paddingBottom: 16,
    width: 13,
    height: 13
  },
  listContainer: {
    paddingBottom: 22
  },
  photoElement: {
    marginTop: 10,
    marginBottom: 0
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  itemBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 71,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#D8D8D8'
  },
  itemBoxPlus: {
    width: 17.2,
    height: 17.1,
  },
  itemText: {
    fontFamily: 'BentonSans',
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#2625ff'
  }
})