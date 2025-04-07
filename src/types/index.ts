import { type TLoading } from "./shared.types";

const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };
  

export { TLoading, isString };