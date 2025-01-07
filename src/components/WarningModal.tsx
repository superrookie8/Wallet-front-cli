import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ThemedView} from './ThemedView';
import {ThemedText} from './ThemedText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface WarningModalProps {
  visible: boolean;
  onClose: () => void;
}

export function WarningModal({visible, onClose}: WarningModalProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    navigation.navigate('Account');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <ThemedView style={styles.modalContent}>
          <Icon
            name="warning"
            size={40}
            color="#FFB800"
            style={styles.warningIcon}
          />
          <ThemedText style={styles.modalTitle}>
            Save this phrase and
          </ThemedText>
          <ThemedText style={styles.modalTitle}>never share it</ThemedText>
          <ThemedText style={styles.modalTitle}>with anyone</ThemedText>

          <TouchableOpacity style={styles.modalButton} onPress={handleContinue}>
            <ThemedText style={styles.modalButtonText}>Continue</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  warningIcon: {
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
