import { create } from "zustand";

interface UIStore {
  sidebarOpen: boolean;
  mobileSidebarOpen: boolean;
  loading: boolean;

  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  setMobileSidebarOpen: (open: boolean) => void;
  toggleMobileSidebar: () => void;

  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  mobileSidebarOpen: false,
  loading: false,

  setSidebarOpen: (open) =>
    set({
      sidebarOpen: open,
    }),

  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  setMobileSidebarOpen: (open) =>
    set({
      mobileSidebarOpen: open,
    }),

  toggleMobileSidebar: () =>
    set((state) => ({
      mobileSidebarOpen: !state.mobileSidebarOpen,
    })),

  setLoading: (loading) =>
    set({
      loading,
    }),
}));