'use client'
import { createContext } from "react";
import { ThemeContextInterface } from "./types/props/themeContext";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);