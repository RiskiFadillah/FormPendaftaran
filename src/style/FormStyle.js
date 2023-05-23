/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const Formstyle = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    textAlign: 'center',
    color: '#0095E8',
    fontSize: 20,
    fontWeight: 900,
    paddingTop: 15,
  },
  text: {color: 'gray'},
  formContainer: {
    display: 'flex',
    justifyContent: 'center',

    color: 'gray',
    padding: 8,
    marginTop: 20,
  },
  Picker: {
    width: '100%',
    color: 'white',
    backgroundColor: '#0095E8',
    marginTop: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#0095E8',
  },
  errorLabel: {
    color: 'red',
  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: 'white',
    backgroundColor: '#0095E8',
  },
  submit: {
    backgroundColor: '#009EF6',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    marginLeft: 80,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 8,
  },
  buttonModal: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 8,
    borderRadius: 5,
  },
});

export default Formstyle;
