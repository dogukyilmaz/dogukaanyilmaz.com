import Layout from "components/Layout";
import useLocale from "hooks/useLocale";

const About = () => {
  const { t } = useLocale();
  return (
    <Layout pageTitle="About">
      <h1>{t("aboutme")}</h1>
    </Layout>
  );
};

export default About;
