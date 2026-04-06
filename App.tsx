import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// Type definitions
interface FeatureItemProps {
  icon: string;
  label: string;
  badge?: boolean;
}

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

interface TabBarItemProps {
  icon: string;
  label: string;
  active: boolean;
  onPress: () => void;
}

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

// Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({ icon, label, badge }) => (
  <TouchableOpacity style={styles.featureItem}>
    <View style={styles.featureIconContainer}>
      <Text style={styles.featureIcon}>{icon}</Text>
      {badge && <View style={styles.featureBadge} />}
    </View>
    <Text style={styles.featureLabel}>{label}</Text>
  </TouchableOpacity>
);

// Tab Bar Item Component
const TabBarItem: React.FC<TabBarItemProps> = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabItem} onPress={onPress}>
    <Text style={[styles.tabIcon, active && styles.tabIconActive]}>{icon}</Text>
    <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Profile Screen Component
function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const features = [
    { id: 1, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 2, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 3, icon: '👥', label: 'Nhóm', badge: false, color: '#4169E1' },
    { id: 4, icon: '📢', label: 'Tuyên giao lưu', badge: false, color: '#FF4444' },
    { id: 5, icon: '📍', label: 'Tìm sản', badge: false, color: '#22C55E' },
    { id: 6, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 7, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 8, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
  ];

  const upcomingItems = [
    { id: 1, title: 'Sản Cẩu T2', location: 'Sản ngoài', time: '15:30' },
    { id: 2, title: 'Sản Cẩu T2', location: 'Sản trong', time: '15:30' },
    { id: 3, title: 'Sản Cẩu T2', location: 'Sản ngoài', time: '15:30' },
  ];

  return (
    <View style={styles.container}>
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
          <FlatList
            horizontal
            scrollEnabled={false}
            data={upcomingItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemCard}>
                <View style={styles.itemImage}>
                  <Text style={styles.itemEmoji}>🎨</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemLocation}>📍 {item.location}</Text>
                <Text style={styles.itemTime}>⏰ Giờ tổ: {item.time}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TabBarItem icon="🏠" label="Trang chủ" active={false} onPress={() => onNavigate('home')} />
        <TabBarItem icon="📋" label="Bài viết" active={false} onPress={() => onNavigate('posts')} />
        <TouchableOpacity style={styles.centerButton}>
          <Text style={styles.centerButtonText}>+</Text>
        </TouchableOpacity>
        <TabBarItem icon="💬" label="Tin nhắn" active={false} onPress={() => onNavigate('messages')} />
        <TabBarItem icon="👤" label="Có nhận" active={true} onPress={() => onNavigate('profile')} />
      </View>
    </View>
  );
}

// Home Screen Component
function HomeScreen({ onNavigate }: HomeScreenProps) {
  const categories = [
    { id: 1, icon: '🎁', label: '???' },
    { id: 2, icon: '🎁', label: '???' },
    { id: 3, icon: '👥', label: 'Nhóm' },
    { id: 4, icon: '📢', label: 'Tuyên giao lưu' },
  ];

  const features = [
    { id: 1, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 2, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 3, icon: '👥', label: 'Nhóm', badge: false, color: '#4169E1' },
    { id: 4, icon: '📢', label: 'Tuyên giao lưu', badge: false, color: '#FF4444' },
    { id: 5, icon: '📍', label: 'Tìm sản', badge: false, color: '#22C55E' },
    { id: 6, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 7, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
    { id: 8, icon: '🎁', label: '???', badge: true, color: '#FFA500' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Categories */}
        <View style={styles.topCategoriesContainer}>
          <FlatList
            horizontal
            scrollEnabled={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.topCategory}>
                <View style={styles.topCategoryIcon}>{item.icon}</View>
                <Text style={styles.topCategoryLabel}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Feature Grid */}
        <View style={styles.section}>
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

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TabBarItem icon="🏠" label="Trang chủ" active={true} onPress={() => onNavigate('home')} />
        <TabBarItem icon="📋" label="Bài viết" active={false} onPress={() => onNavigate('posts')} />
        <TouchableOpacity style={styles.centerButton}>
          <Text style={styles.centerButtonText}>+</Text>
        </TouchableOpacity>
        <TabBarItem icon="💬" label="Tin nhắn" active={false} onPress={() => onNavigate('messages')} />
        <TabBarItem icon="👤" label="Có nhận" active={false} onPress={() => onNavigate('profile')} />
      </View>
    </View>
  );
}

// Main App Component
export default function App() {
  const [activeScreen, setActiveScreen] = useState('profile');

  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      {activeScreen === 'profile' ? (
        <ProfileScreen onNavigate={setActiveScreen} />
      ) : (
        <HomeScreen onNavigate={setActiveScreen} />
      )}
    </View>
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
    paddingTop: 45,
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
    opacity: 0.8,
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
  },
  slotBadge: {
    fontSize: 12,
    color: '#00BFA5',
    fontWeight: '600',
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
    fontSize: 32,
    backgroundColor: '#FFA500',
    borderRadius: 12,
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 50,
  },
  featureBadge: {
    position: 'absolute',
    top: 0,
    right: 2,
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

  // Top Categories
  topCategoriesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  topCategory: {
    alignItems: 'center',
    marginHorizontal: 8,
    minWidth: 70,
  },
  topCategoryIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  topCategoryLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  // Item Card
  itemCard: {
    width: width * 0.32,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 10,
    marginRight: 8,
    marginLeft: 8,
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
    paddingVertical: 8,
    alignItems: 'flex-end',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#999',
  },
  tabLabelActive: {
    color: '#FF6B6B',
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8A56FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  centerButtonText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
