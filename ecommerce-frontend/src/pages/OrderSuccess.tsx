import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router";

function OrderSuccess() {
  const [searchParams] = useSearchParams();
  let esewaToken = searchParams.get("data");

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/api/orders/order-verify",
        {
          esewaToken,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
      .then((res) => {})
      .catch((err) => {});
  }, []);

  return <div>OrderSuccess</div>;
}

export default OrderSuccess;
