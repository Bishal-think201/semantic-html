import { Box, Container } from "@mui/material";
import styles from "./style.module.css";

const Header = () => {
  return (
    <>
      <Box component={"header"} className={styles.header}>
        <Container maxWidth={false}>
          &lt;header&gt; The header tag defines content that should be
          considered the introductory information of a page or section
          &lt;/header&gt;
        </Container>
      </Box>
    </>
  );
};
export default Header;
