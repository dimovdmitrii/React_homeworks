import React from "react";

function OrderStatus({ orderId, status }) {
  return (
    <p>
      Заказ #{orderId}: {status}
    </p>
  );
}

export default OrderStatus;
