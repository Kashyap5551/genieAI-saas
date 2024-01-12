"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a499847f-82c7-4a5f-8c51-b714624a3cb7");
  }, []);

  return null;
};
