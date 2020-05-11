
import React, { Suspense } from 'react';
// import {Helmet} from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { useLocalStorage, useEffectOnce } from 'react-use';
import ScrollToTop from './utils/ScrollToTop';


import Routes from './routes';


function App() {


  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [isThemeSet] = useLocalStorage('isThemeSet', false);

  useEffectOnce(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !isThemeSet
    ) {
      setDarkMode(true);
    } else if (
      window.matchMedia &&
      !window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !isThemeSet
    ) {
      setDarkMode(false);
    }
  });

  React.useEffect(() => {
    if (darkMode) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      {/* <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet> */}

      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="lazy"></div>}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
