import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Pressable, Image, useWindowDimensions} from 'react-native';
import {AccountSelectModal} from '../components/AccountSelectModal';
export default function SendScreen() {
  const [selectedAccount, setSelectedAccount] = useState('Account 1');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const {height: windowHeight} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const accounts = ['Account1', 'Account2', 'Account3']; // 여기서 계정 목록 관리

  const handleSend = () => {
    // TODO: 실제 전송 로직 구현
    console.log('Sending', amount, 'to', address);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Amount Input Section */}
      <View style={styles.accountSection}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/eggverse_logo_black.png')} // 로고 이미지 경로
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.formContent, {height: windowHeight * 0.5}]}>
          <View style={styles.section}>
            <ThemedText style={styles.label}>From Account</ThemedText>
            <Pressable
              style={styles.accountSelector}
              onPress={() => {
                setModalVisible(true);
              }}>
              <ThemedText>{selectedAccount}</ThemedText>
              <Icon name="arrow-drop-down" size={24} color="#007AFF" />
            </Pressable>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.label}>Amount</ThemedText>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                keyboardType="decimal-pad"
                placeholderTextColor="#666"
              />
              <ThemedText style={styles.currency}>POL</ThemedText>
            </View>
            <ThemedText style={styles.balance}>Balance: 0.00 POL</ThemedText>
          </View>

          {/* Address Input Section */}
          <View style={styles.section}>
            <ThemedText style={styles.label}>To Address</ThemedText>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter wallet address"
                placeholderTextColor="#666"
              />
              <Pressable
                style={styles.scanButton}
                android_ripple={{color: 'rgba(0, 0, 0, 0.1)'}}>
                <Icon name="qr-code-scanner" size={24} color="#007AFF" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Send Button */}
        <Pressable
          style={[
            styles.sendButton,
            (!amount || !address) && styles.disabledButton,
          ]}
          android_ripple={{color: 'rgba(0, 0, 0, 0.1)'}}
          onPress={handleSend}
          disabled={!amount || !address}>
          <ThemedText style={styles.sendButtonText}>Send</ThemedText>
        </Pressable>
      </View>

      <AccountSelectModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setSelectedAccount}
        selectedAccount={selectedAccount}
        accounts={accounts}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  accountSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  accountSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 40,
  },
  logo: {
    width: 100,
    height: 40,
  },
  formContent: {
    marginTop: 20,

    justifyContent: 'center',
  },
  section: {
    marginBottom: 24,
    marginTop: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#000',
  },
  currency: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  balance: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  scanButton: {
    padding: 8,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
