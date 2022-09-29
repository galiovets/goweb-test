import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
