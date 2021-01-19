import Layout from "components/Layout";
import useTranslation from "hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout title="About">
      <h1>{t("aboutme")}</h1>
    </Layout>
  );
};

export default About;
