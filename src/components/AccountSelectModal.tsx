import React, {useRef, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Animated,
} from 'react-native';
import {ThemedText} from './ThemedText';
import Icon from 'react-native-vector-icons/MaterialIcons';

type AccountSelectModalProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (account: string) => void;
  selectedAccount: string;
  accounts: string[];
};

export function AccountSelectModal({
  visible,
  onClose,
  onSelect,
  selectedAccount,
  accounts,
}: AccountSelectModalProps) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // 모달이 열릴 때
      fadeAnim.setValue(0);
      slideAnim.setValue(0);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // 모달이 닫힐 때
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}>
      <Animated.View style={[styles.modalOverlay, {opacity: fadeAnim}]}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.modalHeader}>
            <ThemedText style={styles.modalTitle}>Select Account</ThemedText>
            <Pressable onPress={onClose}>
              <Icon name="close" size={24} color="#666" />
            </Pressable>
          </View>
          <ScrollView>
            {accounts.map(account => (
              <Pressable
                key={account}
                style={[
                  styles.accountItem,
                  account === selectedAccount && styles.selectedAccount,
                ]}
                onPress={() => {
                  onSelect(account);
                  onClose();
                }}>
                <ThemedText style={styles.accountName}>{account}</ThemedText>
                {account === selectedAccount && (
                  <Icon name="check" size={24} color="#007AFF" />
                )}
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  selectedAccount: {
    backgroundColor: '#F5F5F5',
  },
  accountName: {
    fontSize: 16,
  },
});
