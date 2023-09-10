"use client";
import React, { createContext, useContext, useState } from "react";

type FontFamilies = {
  [key: string]: string;
};

interface FontContextType {
  fontFamilies: FontFamilies;
  setFontFamilies: React.Dispatch<React.SetStateAction<FontFamilies>>;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider = ({ children }) => {
  const [fontFamilies, setFontFamilies] = useState<FontFamilies>({
    ct: "Campton, sans-serif",
    cf: "Integral CF Regular, sans-serif",
    tt: "TT Interfaces, sans-serif",
    gt: "Gotham, sans-serif",
  });

  return (
    <FontContext.Provider value={{ fontFamilies, setFontFamilies }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFonts = (): FontFamilies => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFonts must be used within a FontProvider");
  }
  return context.fontFamilies;
};
