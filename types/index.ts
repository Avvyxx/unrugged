import { Dispatch, SetStateAction } from "react";

export interface Modal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
