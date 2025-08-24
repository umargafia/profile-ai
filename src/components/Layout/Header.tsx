import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  GlobeAltIcon,
  SunIcon,
  MoonIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { BrainIcon } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { useTranslation } from '../../hooks/useTranslation';
import { Language } from '../../types';

export default function Header() {
  const { state, dispatch } = useApp();
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('features'), href: '/features' },
    { name: t('pricing'), href: '/pricing' },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const handleLanguageChange = (language: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  const handleThemeToggle = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    localStorage.removeItem('profiai_user');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BrainIcon className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                ProfiAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-sm">
                  {languages.find(l => l.code === state.language)?.flag}
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  {languages.map((language) => (
                    <Menu.Item key={language.code}>
                      {({ active }) => (
                        <button
                          onClick={() => handleLanguageChange(language.code)}
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } ${
                            state.language === language.code ? 'text-teal-600 dark:text-teal-400' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center px-4 py-2 text-sm`}
                        >
                          <span className="mr-3">{language.flag}</span>
                          {language.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {state.theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </button>

            {/* User Menu */}
            {state.isAuthenticated ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <UserCircleIcon className="h-6 w-6" />
                  <span className="text-sm font-medium">{state.user?.name}</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } group flex w-full items-center px-4 py-2 text-sm text-gray-900 dark:text-gray-100`}
                        >
                          <UserCircleIcon className="mr-3 h-5 w-5" />
                          {t('profile')}
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } group flex w-full items-center px-4 py-2 text-sm text-gray-900 dark:text-gray-100`}
                        >
                          {t('logout')}
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/signup"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('signup')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}