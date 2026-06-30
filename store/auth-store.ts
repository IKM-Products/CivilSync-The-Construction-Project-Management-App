import { create } from "zustand";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
  image?: string | null;
}

interface AuthStore {
  user: AuthUser | null;
  isAuthenticated: boolean;

  setUser: (user: AuthUser | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));