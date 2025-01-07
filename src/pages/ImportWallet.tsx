import {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import {WarningModal} from '../components/WarningModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import * as bip39 from 'bip39';

export default function ImportWalletScreen() {
  const [seedPhrases, setSeedPhrases] = useState(Array(12).fill(''));
  const [isHidden, setIsHidden] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    const mnemonic = bip39.generateMnemonic();
    const phrases = mnemonic.split(' ');
    setSeedPhrases(phrases);
  }, []);

  // const handlePhraseChange = (text: string, index: number) => {
  //   const newPhrases = [...seedPhrases];
  //   newPhrases[index] = text;
  //   setSeedPhrases(newPhrases);
  // };

  const handleCopyToClipboard = async () => {
    try {
      Clipboard.setString(seedPhrases.join(' '));
      // 여기에 복사 성공 알림을 추가할 수 있습니다
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <ThemedText style={styles.heading}>Copy your Secret</ThemedText>
          <ThemedText style={styles.heading}>Recovery Phrase</ThemedText>
          <ThemedText style={styles.subheading}>
            Write down these words in the correct order
          </ThemedText>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.gridContainer}>
            {seedPhrases.map((phrase, index) => (
              <View key={index} style={styles.phraseContainer}>
                <ThemedText style={styles.wordNumber}>{index + 1}</ThemedText>
                <ThemedText
                  style={[styles.word, isHidden && styles.hiddenWord]}>
                  {isHidden ? '••••••' : phrase}
                </ThemedText>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.hideButton}
            onPress={() => setIsHidden(!isHidden)}>
            <Icon
              name={isHidden ? 'visibility-off' : 'visibility'}
              size={20}
              color="#007AFF"
              style={styles.eyeIcon}
            />
            <ThemedText style={styles.hideButtonText}>
              {isHidden ? 'Show' : 'Hide'} seed phrase
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyButton}
            onPress={handleCopyToClipboard}>
            <ThemedText style={styles.copyIcon}>📋</ThemedText>
            <ThemedText style={styles.copyButtonText}>
              Copy to clipboard
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.continueButton,
              !seedPhrases.every(phrase => phrase.length > 0) &&
                styles.disabledButton,
            ]}
            onPress={() => setIsModalVisible(true)}
            disabled={!seedPhrases.every(phrase => phrase.length > 0)}>
            <ThemedText style={styles.continueButtonText}>Continue</ThemedText>
          </TouchableOpacity>
        </View>
        <WarningModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  formContainer: {
    width: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  phraseContainer: {
    width: '31%',
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
  },
  word: {
    fontSize: 16,
    textAlign: 'center',
  },
  hiddenWord: {
    letterSpacing: 2,
  },
  wordNumber: {
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  hideButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  copyButtonText: {
    color: '#007AFF',
    fontSize: 16,
    marginLeft: 8,
  },
  copyIcon: {
    fontSize: 20,
  },
  eyeIcon: {
    marginRight: 4,
  },
});
