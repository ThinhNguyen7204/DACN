"use client";

import React, { useState } from "react";
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Header from "@/components/Header/app.header";
import Footer from "@/components/Footer/app.footer";
import "@/styles/globals.css"
import Topbar from "@/components/Dashboard/Topbar";
import Layout from "@/components/Dashboard/Layout";

const SIDEBAR_WIDTH = 260;
const MINI_SIDEBAR_WIDTH = 56;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <html lang="en">
      {/* <body style={{ margin: 0, padding: 0 }}> */}
      <body >
        <ThemeRegistry>
          <Layout children={children} />
        </ThemeRegistry>
      </body>
    </html>
  );
}