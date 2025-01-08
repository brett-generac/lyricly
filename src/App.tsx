import React, { useState, createContext, useEffect } from 'react';
import { Box, Hidden, ThemeProvider } from '@mui/material';

import { Home } from './screens/Home';
import { About } from './screens/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileDialog } from './components/MobileDialog';

import { theme } from './Theme';
import { DataType, Screen } from './Constants';
import type { ContextValue, DataPoint } from './Types';

const initialContextValue: ContextValue = {
  screen: '' as Screen,
  setScreen: () => {},
  selectedLyric: '',
  setSelectedLyric: () => {},
  selectedDataType: '' as DataType,
  setSelectedDataType: () => {},
  rhymes: [],
  setRhymes: () => {},
  synonyms: [],
  setSynonyms: () => {},
  relatedWords: [],
  setRelatedWords: () => {},
};

export const Context = createContext<ContextValue>(initialContextValue);

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.HOME);
  const [selectedLyric, setSelectedLyric] = useState<string>('');
  const [selectedDataType, setSelectedDataType] = useState<DataType>(DataType.RHYMES);
  const [rhymes, setRhymes] = useState<DataPoint[]>([]);
  const [synonyms, setSynonyms] = useState<DataPoint[]>([]);
  const [relatedWords, setRelatedWords] = useState<DataPoint[]>([]);

  const [hasDismissedDialog, setHasDismissedDialog] = useState<boolean>(false);

  const contextValue = {
    screen,
    setScreen,
    selectedLyric,
    setSelectedLyric,
    selectedDataType,
    setSelectedDataType,
    rhymes,
    setRhymes,
    synonyms,
    setSynonyms,
    relatedWords,
    setRelatedWords,
  };

  const isAboutScreen = screen === Screen.ABOUT;

  const handleDismiss = () => {
    localStorage.setItem('preferences', JSON.stringify({ dismissedDialog: true }));
    setHasDismissedDialog(true);
  };

  useEffect(() => {
    const json = localStorage.getItem('preferences');

    if (json) {
      const preferences = JSON.parse(json);

      if (preferences.dismissedDialog) {
        setHasDismissedDialog(true);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={contextValue}>
        <Box
          sx={{
            height: { md: '100vh' },
            minWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <Box sx={{ height: { md: '100%' }, px: { xs: '12px', sm: '12px', md: '24px' } }}>
            {(isAboutScreen && <About />) || <Home />}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Footer />
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <MobileDialog isOpen={!hasDismissedDialog} handleDismiss={handleDismiss} />
          </Box>
        </Box>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
