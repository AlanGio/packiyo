import { useRouter } from "next/router";

import OrderDetail from "@/app/components/Orders/detail";
import ThemeContainer from "@/app/theme/ThemeContainer";
import { OrderDetailProps } from "@/app/components/Orders/order.detail.props";
import { useEffect, useState } from "react";
import { serviceCall } from "@/app/utils/services";
import { CircularProgress } from "@mui/material";

export default function OrderDetailPage() {
  const router = useRouter();
  const { orderId } = router.query;

  const [orderData, setOrderData] = useState<OrderDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    serviceCall(`/orders/${orderId}`, (response) => {
      console.log(response, "response");
      if (response instanceof Error) {
        setOrderData(null);
      } else {
        setOrderData(response);
      }
      setLoading(false);
    });
  }, [orderId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <ThemeContainer>
      {orderId && <OrderDetail orderData={orderData} />}
    </ThemeContainer>
  );
}
