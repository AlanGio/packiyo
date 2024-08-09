import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/app/theme/theme";
import OrderDetail from "@/app/components/Orders/detail";
import { useRouter } from "next/router";

export default function OrderDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {id && <OrderDetail orderId={id.toString()} />}
    </ThemeProvider>
  );
}
