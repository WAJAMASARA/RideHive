import { create } from "zustand";

const useClickStore = create((set) => ({
  clickCount: 0,
  increment: () => set((state: { clickCount: number; }) => ({ clickCount: state.clickCount + 1 })),
}));

export default useClickStore;

