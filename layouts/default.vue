<template>
  <div>
    <NuxtLoadingIndicator
      :height="2"
      :duration="2000"
      :throttle="0"
      color="#68A3A8"
    />

    <NuxtPage />

    <Toaster close-button />
  </div>
</template>
