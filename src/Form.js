/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Formstyle from './style/FormStyle';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
const dropdownData = [
  {label: 'Tipe Sekolah', value: ''},
  {label: 'Negeri', value: 'negeri'},
  {label: 'Swasta', value: 'swasta'},
];
const provinsiData = [
  {id: 1, nama: 'Jawa Timur', kota: ['Surabaya', 'Malang', 'Sidoarjo']},
  {id: 2, nama: 'Jawa Barat', kota: ['Bandung', 'Bogor', 'Depok']},
  {id: 3, nama: 'Jawa Tengah', kota: ['Yogyakarta', 'Semarang', 'Solo']},
  {
    id: 4,
    nama: 'DKI Jakarta',
    kota: ['Jakarta Barat', 'Jakarta Timur', 'Jakarta Selatan'],
  },
  {id: 5, nama: 'Bali', kota: ['Badung', 'Denpasar', 'Buleleng']},
];
export default function FormPendaftaran() {
  const [selectedValue, setSelectedValue] = useState('');
  const [formValues, setFormValues] = useState({
    namaSekolah: '',
    alamat: '',
    kodePos: '',
    noTelpon: '',
    email: '',
    facebook: '',
    jumlahSiswa: '',
  });
  const handleInputChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  };
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedKota, setSelectedKota] = useState('');
  const [kotaOptions, setKotaOptions] = useState([]);
  const handleProvinsiChange = provinsiId => {
    const selectedProvinsiData = provinsiData.find(
      provinsi => provinsi.id === provinsiId,
    );
    setKotaOptions(selectedProvinsiData.kota);
    setSelectedProvinsi(provinsiId);
    setSelectedKota('');
  };

  //   handle Submit
  const handleSubmit = () => {
    if (
      formValues.namaSekolah &&
      formValues.alamat &&
      formValues.kodePos &&
      formValues.jumlahSiswa &&
      selectedValue &&
      selectedProvinsi &&
      selectedKota
    ) {
      if (formValues.email.includes('@')) {
        axios
          .post('https://DaftarSekolah/api/Form', formValues)
          .then(response => {
            setSuccessModalVisible(true);
          })
          .catch(error => {
            setErrorModalVisible(true);
          });
      } else {
        // Tampilkan pesan error jika email tidak valid
        setErrorModalVisible(true);
      }
    } else {
      setErrorModalVisible(true);
    }
  };
  return (
    <>
      <ScrollView style={Formstyle.container}>
        <Text style={Formstyle.title}>Form Pendaftaran</Text>
        <View style={Formstyle.formContainer}>
          <Text
            style={[Formstyle.label, !selectedValue && Formstyle.errorLabel]}>
            Tipe Sekolah *
          </Text>

          <Picker
            style={Formstyle.Picker}
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            {dropdownData.map((item, index) => (
              <Picker.Item
                style={Formstyle.Picker}
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
          <Text
            style={[
              Formstyle.label,
              !formValues.namaSekolah && Formstyle.errorLabel,
            ]}>
            Nama Sekolah *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.namaSekolah}
            onChangeText={value => handleInputChange('namaSekolah', value)}
          />

          <Text
            style={[
              Formstyle.label,
              !formValues.alamat && Formstyle.errorLabel,
            ]}>
            Alamat *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.alamat}
            onChangeText={value => handleInputChange('alamat', value)}
          />

          <Text
            style={[
              Formstyle.label,
              !formValues.kodePos && Formstyle.errorLabel,
            ]}>
            Kode Pos *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.kodePos}
            onChangeText={value => handleInputChange('kodePos', value)}
            keyboardType="numeric"
          />
          <Text
            style={[
              Formstyle.label,
              !selectedProvinsi && Formstyle.errorLabel,
            ]}>
            Pilih Provinsi:
          </Text>
          <Picker
            style={Formstyle.Picker}
            selectedValue={selectedProvinsi}
            onValueChange={handleProvinsiChange}>
            <Picker.Item label="Pilih Provinsi" value="" />
            {provinsiData.map(provinsi => (
              <Picker.Item
                key={provinsi.id}
                label={provinsi.nama}
                value={provinsi.id}
              />
            ))}
          </Picker>
          <Text
            style={[Formstyle.label, !selectedKota && Formstyle.errorLabel]}>
            Pilih Kota/Kabupaten:
          </Text>
          <Picker
            style={Formstyle.Picker}
            selectedValue={selectedKota}
            onValueChange={itemValue => setSelectedKota(itemValue)}
            enabled={selectedProvinsi !== ''}>
            <Picker.Item label="Pilih Kota/Kabupaten" value="" />
            {kotaOptions.map((kota, index) => (
              <Picker.Item key={index} label={kota} value={kota} />
            ))}
          </Picker>
          <Text
            style={[
              Formstyle.label,
              !formValues.noTelpon && Formstyle.errorLabel,
            ]}>
            No Telpon Sekolah *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.noTelpon}
            onChangeText={value => handleInputChange('noTelpon', value)}
            keyboardType="phone-pad"
          />
          <Text
            style={[
              Formstyle.label,
              !formValues.email && Formstyle.errorLabel,
            ]}>
            Email Sekolah *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.email}
            onChangeText={value => handleInputChange('email', value)}
            keyboardType="email-address"
          />
          <Text
            style={[
              Formstyle.label,
              !formValues.facebook && Formstyle.errorLabel,
            ]}>
            Facebook
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.facebook}
            onChangeText={value => handleInputChange('facebook', value)}
          />
          <Text
            style={[
              Formstyle.label,
              !formValues.jumlahSiswa && Formstyle.errorLabel,
            ]}>
            Jumlah Siswa *
          </Text>
          <TextInput
            style={Formstyle.input}
            value={formValues.jumlahSiswa}
            onChangeText={value => handleInputChange('jumlahSiswa', value)}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleSubmit} style={Formstyle.submit}>
            <Text style={{fontSize: 18, fontWeight: '900'}}>Submit</Text>
          </TouchableOpacity>
          <Modal visible={successModalVisible} transparent={true}>
            <View style={Formstyle.modalContainer}>
              <View style={Formstyle.modalContent}>
                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 18}}>
                  Data berhasil dikirim!
                </Text>
                <Button
                  title="Close"
                  onPress={() => setSuccessModalVisible(false)}
                />
              </View>
            </View>
          </Modal>

          <Modal visible={errorModalVisible} transparent={true}>
            <View style={Formstyle.modalContainer}>
              <View style={Formstyle.modalContent}>
                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 18}}>
                  Silakan isi semua Form dan Email harus benar
                </Text>
                <TouchableOpacity
                  style={Formstyle.buttonModal}
                  onPress={() => setErrorModalVisible(false)}>
                  <Text style={{color: 'black', textAlign: 'center'}}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </>
  );
}
