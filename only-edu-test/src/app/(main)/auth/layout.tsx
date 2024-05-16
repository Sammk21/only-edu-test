// import { getCustomer } from "@lib/data";
import React from "react";
import AccountLayout from "../../../modules/account/templates/account-layout";

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode;
  login?: React.ReactNode;
}) {
  // const customer = await getCustomer().catch(() => null)

  const customer = false;

  return (
    <AccountLayout customer={customer}>
      {customer ? dashboard : login}
    </AccountLayout>
  );
}
