import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import {IconButton} from 'react-native-paper';
// import Clipboard from '@react-native-clipboard/clipboard';

export default function ImportWalletScreen() {
  const [seedPhrases, setSeedPhrases] = useState(Array(12).fill(''));
  const [isHidden, setIsHidden] = useState(false);

  const handlePhraseChange = (text: string, index: number) => {
    const newPhrases = [...seedPhrases];
    newPhrases[index] = text;
    setSeedPhrases(newPhrases);
  };

  //   const handleCopyToClipboard = async () => {
  //     try {
  //       Clipboard.setString(seedPhrases.join(' '));
  //       // 여기에 복사 성공 알림을 추가할 수 있습니다
  //     } catch (error) {
  //       console.error('Failed to copy:', error);
  //     }
  //   };

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
              <View key={index} style={styles.inputContainer}>
                <ThemedText style={styles.wordNumber}>{index + 1}</ThemedText>
                <TextInput
                  style={styles.input}
                  value={phrase}
                  onChangeText={text => handlePhraseChange(text, index)}
                  placeholder={`Word ${index + 1}`}
                  placeholderTextColor="#666"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={isHidden}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.hideButton}
            onPress={() => setIsHidden(!isHidden)}>
            <ThemedText style={styles.hideButtonText}>
              {isHidden ? 'Show' : 'Hide'} seed phrase
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyButton}
            // onPress={handleCopyToClipboard}
          >
            <IconButton
              icon="content-copy"
              size={24}
              iconColor="#007AFF"
              onPress={() => console.log('Icon pressed')}
            />
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
            disabled={!seedPhrases.every(phrase => phrase.length > 0)}>
            <ThemedText style={styles.continueButtonText}>
              Import Wallet
            </ThemedText>
          </TouchableOpacity>
        </View>
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
  inputContainer: {
    width: '31%',
    marginBottom: 12,
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
});
