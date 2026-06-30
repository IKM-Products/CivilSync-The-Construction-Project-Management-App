import { create } from "zustand";

export type NotificationType =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: Date;
}

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    notification: Omit<Notification, "id" | "read" | "createdAt">
  ) => void;

  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useNotificationStore =
  create<NotificationStore>((set) => ({
    notifications: [],

    addNotification: (notification) =>
      set((state) => ({
        notifications: [
          {
            id: crypto.randomUUID(),
            read: false,
            createdAt: new Date(),
            ...notification,
          },
          ...state.notifications,
        ],
      })),

    markAsRead: (id) =>
      set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification.id === id
            ? { ...notification, read: true }
            : notification
        ),
      })),

    markAllAsRead: () =>
      set((state) => ({
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      })),

    removeNotification: (id) =>
      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification.id !== id
        ),
      })),

    clearNotifications: () =>
      set({
        notifications: [],
      }),
  }));