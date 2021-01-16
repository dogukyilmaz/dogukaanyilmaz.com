import React from "react";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import styles from "../styles/Home.module.css";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Hello, friend." }) => (
  <div className={styles.container}>
    <Header title={title} />
    <header>
      <Navbar />
    </header>
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
