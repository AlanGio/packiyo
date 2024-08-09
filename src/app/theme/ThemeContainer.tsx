import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/app/theme/theme";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ThemeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 12 }}>
        {children}
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
