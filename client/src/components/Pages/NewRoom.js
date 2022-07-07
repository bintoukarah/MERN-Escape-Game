
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function hello() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
hello
      </main>
    </ThemeProvider>
  );
}
