<script setup lang="ts">
const { addNotificationSuccess } = useNotifications()
</script>

<template>
  <div>
    <Button
      variant="outline"
      @click="
        addNotificationSuccess({
          key: 'test',
          description: 'description',
        })
      "
    >
      Test notifications
    </Button>
  </div>
</template>
