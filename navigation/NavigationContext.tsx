import React, { createContext, useState, useCallback, useContext } from 'react';
import { RootStackParamList, ScreenName, NavigationState } from './NavigationTypes';

interface NavigationContextType {
  state: NavigationState;
  navigate: (screen: ScreenName) => void;
  goBack: () => void;
  reset: () => void;
  goNext: () => void;
  goPrevious: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: React.ReactNode;
}

const screenOrder: ScreenName[] = ['Profile', 'Home', 'Posts', 'Messages'];

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [state, setState] = useState<NavigationState>({
    currentScreen: 'Profile',
  });

  const navigate = useCallback((screen: ScreenName) => {
    setState((prevState) => ({
      previousScreen: prevState.currentScreen,
      currentScreen: screen,
    }));
  }, []);

  const goBack = useCallback(() => {
    if (state.previousScreen) {
      setState((prevState) => ({
        currentScreen: prevState.previousScreen || 'Profile',
        previousScreen: undefined,
      }));
    }
  }, [state.previousScreen]);

  const reset = useCallback(() => {
    setState({
      currentScreen: 'Profile',
    });
  }, []);

  const goNext = useCallback(() => {
    const currentIndex = screenOrder.indexOf(state.currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      navigate(screenOrder[currentIndex + 1]);
    }
  }, [state.currentScreen, navigate]);

  const goPrevious = useCallback(() => {
    const currentIndex = screenOrder.indexOf(state.currentScreen);
    if (currentIndex > 0) {
      navigate(screenOrder[currentIndex - 1]);
    }
  }, [state.currentScreen, navigate]);

  return (
    <NavigationContext.Provider value={{ state, navigate, goBack, reset, goNext, goPrevious }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
