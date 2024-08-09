import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/app/theme/theme";
import OrderCreate from "@/app/components/Orders/create";

export default function OrderCreatePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <OrderCreate />
    </ThemeProvider>
  );
}
