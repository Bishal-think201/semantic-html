import * as React from "react";
import { Box } from "@mui/material";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import Aside from "@/component/aside/Aside";
import Navigation from "@/component/navigation/Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Navigation />
      <Aside />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </>
  );
}
