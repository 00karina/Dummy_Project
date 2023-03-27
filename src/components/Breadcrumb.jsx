import React from "react";
import { Breadcrumbs, Container } from "@mui/material";
import Link from "@mui/material/Link";

export default function Breadcrumb() {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: "14px" }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Products
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          aria-current="page"
        >
          Tum Yum Chicken Keto Bone Broth
        </Link>
      </Breadcrumbs>
    </Container>
  );
}
