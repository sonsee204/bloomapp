// Navigation Stack Types
export type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
  Posts: undefined;
  Messages: undefined;
};

export type ScreenName = keyof RootStackParamList;

export interface NavigationState {
  currentScreen: ScreenName;
  previousScreen?: ScreenName;
}
