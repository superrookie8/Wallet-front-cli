import React from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';

export default function AccountScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Account Info Section */}
      <View style={styles.accountSection}>
        <ThemedText style={styles.accountName}>Account1</ThemedText>
        <ThemedText style={styles.balance}>$0.00</ThemedText>
        <ThemedText style={styles.change}>($0.00 + 0.00%)</ThemedText>

        <View style={styles.actionButtons}>
          <Pressable
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

      {/* List Section */}
      <ScrollView style={styles.listContainer}>
        {/* Token Section */}
        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Tokens</ThemedText>
        </View>
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

        {/* NFT Section */}
        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>NFTs</ThemedText>
        </View>
        <View style={styles.emptySection}>
          <ThemedText style={styles.emptyText}>No NFTs yet</ThemedText>
        </View>

        {/* History Section */}
        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>History</ThemedText>
        </View>
        <View style={styles.emptySection}>
          <ThemedText style={styles.emptyText}>
            No transaction history
          </ThemedText>
        </View>
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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  accountName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  change: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
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
  listContainer: {
    flex: 1,
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: '#f5f5f5',
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
});
