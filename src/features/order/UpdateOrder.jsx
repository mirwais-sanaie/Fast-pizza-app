/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from "react-router-dom";
import Button from "./../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fether = useFetcher();
  return (
    <fether.Form method="PATCH">
      <Button type={"primary"}>Make Priority</Button>
    </fether.Form>
  );
}

export default UpdateOrder;
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log("update");
  return null;
}
