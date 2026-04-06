/**
 * Bloom App - Ao Trinh
 * Vietnamese Fishing Application
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// Type definitions
interface FeatureItemProps {
  icon: string;
  label: string;
  badge?: boolean;
}

interface ItemCardProps {
  title: string;
  location: string;
  time: string;
}

// Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({ icon, label, badge }) => (
  <TouchableOpacity style={styles.featureItem}>
    <View style={styles.featureIconContainer}>
      <View style={styles.featureIcon}>
        <Text style={styles.featureIconText}>{icon}</Text>
      </View>
      {badge && <View style={styles.featureBadge} />}
    </View>
    <Text style={styles.featureLabel}>{label}</Text>
  </TouchableOpacity>
);

// Item Card Component
const ItemCard: React.FC<ItemCardProps> = ({ title, location, time }) => (
  <TouchableOpacity style={styles.itemCard}>
    <View style={styles.itemImage}>
      <Text style={styles.itemEmoji}>🎨</Text>
    </View>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemLocation}>📍 {location}</Text>
    <Text style={styles.itemTime}>⏰ Giờ tổ: {time}</Text>
  </TouchableOpacity>
);

// Main App Component
export default function App() {
  const features = [
    { id: 1, icon: '🎁', label: '???', badge: true },
    { id: 2, icon: '🎁', label: '???', badge: true },
    { id: 3, icon: '👥', label: 'Nhóm', badge: false },
    { id: 4, icon: '📢', label: 'Tuyên giao lưu', badge: false },
    { id: 5, icon: '📍', label: 'Tìm sản', badge: false },
    { id: 6, icon: '🎁', label: '???', badge: true },
    { id: 7, icon: '🎁', label: '???', badge: true },
    { id: 8, icon: '🎁', label: '???', badge: true },
  ];

  const upcomingItems: ItemCardProps[] = [
    { title: 'Sản Cẩu T2', location: 'Sản ngoài', time: '15:30' },
    { title: 'Sản Cẩu T2', location: 'Sản trong', time: '15:30' },
    { title: 'Sản Cẩu T2', location: 'Sản ngoài', time: '15:30' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.profileHeader}>
          <View style={styles.headerTop}>
            <View style={styles.userSection}>
              <View style={styles.userAvatar}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
              <View>
                <Text style={styles.greeting}>Xin chào! 👋</Text>
                <Text style={styles.userName}>Khách</Text>
              </View>
            </View>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerIcon}>🔍</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerIcon}>🔔</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Banner */}
          <View style={styles.bannerContainer}>
            <View style={styles.banner}>
              <View style={styles.bannerIcon}>
                <Text style={styles.rocketIcon}>🚀</Text>
              </View>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>Khám phá Ao Trình</Text>
                <Text style={styles.bannerDesc}>
                  Đăng nhập để đặt sản, tham gia giải đấu và nhiều hơn nữa
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonIcon}>👉</Text>
              <Text style={styles.loginButtonText}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Khám phá</Text>
          <View style={styles.featureGrid}>
            {features.map((item) => (
              <FeatureItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
              />
            ))}
          </View>
        </View>

        {/* Upcoming Items */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Đặt ngay</Text>
            <Text style={styles.slotBadge}>● 4 slot</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {upcomingItems.map((item, index) => (
              <ItemCard key={index} {...item} />
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>📋</Text>
          <Text style={styles.tabLabel}>Bài viết</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton}>
          <Text style={styles.centerButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={styles.tabLabel}>Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Cá nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  // Profile Header
  profileHeader: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatarIcon: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    padding: 8,
  },
  headerIcon: {
    fontSize: 20,
  },

  // Banner
  bannerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  banner: {
    backgroundColor: '#8A56FF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bannerIcon: {
    marginRight: 12,
  },
  rocketIcon: {
    fontSize: 36,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  bannerDesc: {
    fontSize: 12,
    color: '#E0E0F0',
    lineHeight: 16,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  loginButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8A56FF',
  },

  // Section
  section: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  slotBadge: {
    fontSize: 12,
    color: '#00BFA5',
    fontWeight: '600',
    marginRight: 16,
  },

  // Feature Grid
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  featureItem: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: 12,
  },
  featureIconContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureIconText: {
    fontSize: 28,
  },
  featureBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  featureLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  // Item Card
  itemCard: {
    width: 110,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
    marginLeft: 16,
  },
  itemImage: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemEmoji: {
    fontSize: 40,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  itemLocation: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  itemTime: {
    fontSize: 10,
    color: '#00BFA5',
    fontWeight: '600',
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 12,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666',
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8A56FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  centerButtonText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
