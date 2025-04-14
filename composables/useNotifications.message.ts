export type NotificationKey = "test"

type NotificationMessages = {
  [key in NotificationKey]: {
    success?: string
    error?: string
  }
}

export const useNotificationsMessages = () => {
  const { t } = useI18n()

  const notificationMessages: NotificationMessages = {
    test: {
      success: t("success"),
      error: t("error"),
    },
  }

  return {
    notificationMessages,
  }
}
