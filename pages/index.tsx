import React, { useEffect } from "react";
import Layout from "components/Layout";
import useTranslation from "hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout title="Welcome">
      <h1>{t("hello")}</h1>
    </Layout>
  );
}
