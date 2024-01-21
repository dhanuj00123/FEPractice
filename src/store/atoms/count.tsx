import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", //unique key to identify
  default: 0, // initial state
});
