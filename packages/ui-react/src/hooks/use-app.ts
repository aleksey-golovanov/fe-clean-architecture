import { App } from "@fe-clean-architecture/composer";
import { useContext } from "react";
import { AppContext } from "../app-context";

export const useApp = (): App => useContext(AppContext).app;
