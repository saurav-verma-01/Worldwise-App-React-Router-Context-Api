import styles from "./sideBarFooter.module.css";

const SideBarFooter = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </footer>
  );
};

export default SideBarFooter;
