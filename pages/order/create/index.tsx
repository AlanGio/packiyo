import OrderCreate from "@/app/components/Orders/create";
import ThemeContainer from "@/app/theme/ThemeContainer";
import axios from "axios";

export default function OrderCreatePage() {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://staging1.internal1.packiyo.com/api/v1/users/me",
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <ThemeContainer>
      <OrderCreate />
    </ThemeContainer>
  );
}
