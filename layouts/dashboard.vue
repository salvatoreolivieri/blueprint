<template>
  <SidebarProvider>
    <AppSidebar variant="inset" />

    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b">
        <div class="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" class="mr-2 h-4" />

          <!-- <Breadcrumb
            v-if="
              route.params.resource && typeof route.params.resource === 'string'
            "
          >
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <NuxtLink :to="`/${activeTenant.id}`">Resources</NuxtLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage
                  >{{ capitalize(route.params.resource) }}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> -->
        </div>
      </header>

      <NuxtPage />

      <FeedbackButton />
    </SidebarInset>
  </SidebarProvider>
</template>
