import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, Language, Theme, GeneratedHeadshot, ResumeData } from '../types';

interface AppState {
  user: User | null;
  language: Language;
  theme: Theme;
  isAuthenticated: boolean;
  generatedHeadshots: GeneratedHeadshot[];
  savedResumes: ResumeData[];
  isLoading: boolean;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_HEADSHOT'; payload: GeneratedHeadshot }
  | { type: 'ADD_RESUME'; payload: ResumeData }
  | { type: 'UPDATE_USER_USAGE'; payload: Partial<User['usage']> };

const initialState: AppState = {
  user: null,
  language: 'en',
  theme: 'light',
  isAuthenticated: false,
  generatedHeadshots: [],
  savedResumes: [],
  isLoading: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'ADD_HEADSHOT':
      return {
        ...state,
        generatedHeadshots: [...state.generatedHeadshots, action.payload],
      };
    case 'ADD_RESUME':
      return {
        ...state,
        savedResumes: [...state.savedResumes, action.payload],
      };
    case 'UPDATE_USER_USAGE':
      return {
        ...state,
        user: state.user
          ? {
              ...state.user,
              usage: { ...state.user.usage, ...action.payload },
            }
          : null,
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Load saved data from localStorage
    const savedUser = localStorage.getItem('profiai_user');
    const savedLanguage = localStorage.getItem('profiai_language') as Language;
    const savedTheme = localStorage.getItem('profiai_theme') as Theme;

    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    }
    if (savedLanguage) {
      dispatch({ type: 'SET_LANGUAGE', payload: savedLanguage });
    }
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme });
    }
  }, []);

  useEffect(() => {
    // Save to localStorage when state changes
    if (state.user) {
      localStorage.setItem('profiai_user', JSON.stringify(state.user));
    }
    localStorage.setItem('profiai_language', state.language);
    localStorage.setItem('profiai_theme', state.theme);
  }, [state.user, state.language, state.theme]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}