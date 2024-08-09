import { useRouter } from "next/router";

import OrderDetail from "@/app/components/Orders/detail";
import ThemeContainer from "@/app/theme/ThemeContainer";

export default function OrderDetailPage() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <ThemeContainer>
      {orderId && <OrderDetail orderId={orderId.toString()} />}
    </ThemeContainer>
  );
}
