import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';
import {Image} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function AccountScreen() {
  const walletAddress = '0x1234...5678';
  const [activeTab, setActiveTab] = useState('Token');

  const handleCopyAddress = () => {
    Clipboard.setString(walletAddress);
  };

  return (
    <ThemedView style={styles.container}>
      {/* 1. Account Section */}
      <View style={styles.accountSection}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/eggverse_logo_black.png')} // 로고 이미지 경로
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <ThemedText style={styles.accountName}>Account1</ThemedText>
        {/* Balance Section */}
        <View style={styles.balanceWrapper}>
          <ThemedText style={styles.balance}>$0.00</ThemedText>
          <ThemedText style={styles.change}>($0.00 + 0.00%)</ThemedText>
          <ThemedText style={styles.addressText} numberOfLines={1}>
            {walletAddress}
          </ThemedText>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Pressable
            onPress={handleCopyAddress}
            style={styles.actionButton}
            android_ripple={{color: 'rgba(0, 0, 0, 0.1)'}}>
            <Icon name="content-copy" size={24} color="#007AFF" />
            <ThemedText style={styles.actionButtonText}>Copy</ThemedText>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: 'rgba(0, 0, 0, 0.1)'}}>
            <Icon name="send" size={24} color="#007AFF" />
            <ThemedText style={styles.actionButtonText}>Send</ThemedText>
          </Pressable>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Token', 'NFT', 'History'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <ThemedText
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.contentContainer}>
        {activeTab === 'Token' && (
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.itemInfo}>
              <Icon name="toll" size={32} color="#8247E5" />
              <View style={styles.itemDetails}>
                <ThemedText style={styles.itemName}>Polygon</ThemedText>
                <ThemedText style={styles.itemAmount}>0 POL</ThemedText>
              </View>
            </View>
            <View style={styles.itemValues}>
              <ThemedText style={styles.itemValue}>$0.00</ThemedText>
              <ThemedText style={styles.itemSubValue}>$0.00</ThemedText>
            </View>
          </TouchableOpacity>
        )}
        {activeTab === 'NFT' && (
          <View style={styles.emptySection}>
            <ThemedText style={styles.emptyText}>No NFTs yet</ThemedText>
          </View>
        )}
        {activeTab === 'History' && (
          <View style={styles.emptySection}>
            <ThemedText style={styles.emptyText}>
              No transaction history
            </ThemedText>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accountSection: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 40,
  },
  accountName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balanceWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
    paddingTop: 10,
  },
  change: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    maxWidth: '60%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionButtonText: {
    marginTop: 4,
    color: '#007AFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDetails: {
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemAmount: {
    fontSize: 14,
    color: '#666',
  },
  itemValues: {
    alignItems: 'flex-end',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubValue: {
    fontSize: 14,
    color: '#666',
  },
  emptySection: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 14,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
});
