// types
import type { AppProps } from "next/app";

// styles
import "../styles/globals.css";

//mui
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
