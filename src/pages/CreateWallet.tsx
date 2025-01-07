import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import {TextInput, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';

export default function CreateWalletScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const getPasswordStrength = (pass: string) => {
    if (pass.length < 8) return 'Weak';
    if (pass.length < 12) return 'Average';
    return 'Strong';
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <ThemedText style={styles.heading}>Password</ThemedText>
          <ThemedText style={styles.subheading}>
            It is used to unlock the wallet.
          </ThemedText>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.labelContainer}>
            <ThemedText style={styles.inputLabel}>Password</ThemedText>
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.visibilityButton}>
              <ThemedText style={styles.visibilityText}>
                {isPasswordVisible ? 'Hide' : 'Show'}
              </ThemedText>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#666"
          />

          <ThemedText style={styles.strengthText}>
            Password strength: {getPasswordStrength(password)}
          </ThemedText>

          <ThemedText style={styles.inputLabel}>Confirm Password</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="#666"
          />

          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              isChecked={isAgreed}
              onPress={isChecked => setIsAgreed(isChecked)}
              fillColor="#007AFF"
              textStyle={styles.checkboxLabel}
              text="I agree to the terms of service"
            />
          </View>

          <TouchableOpacity
            style={[
              styles.createButton,
              (!isAgreed || !password || !confirmPassword) &&
                styles.disabledButton,
            ]}
            disabled={!isAgreed || !password || !confirmPassword}>
            <ThemedText style={styles.buttonText}>
              Create a new Wallet
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
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
  checkboxLabel: {
    fontSize: 16,
    color: '#007AFF',
  },
  visibilityButton: {
    padding: 4,
  },
  visibilityText: {
    color: '#007AFF',
    fontSize: 14,
  },
  strengthText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  createButton: {
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
