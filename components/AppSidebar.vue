<script setup lang="ts">
import {
  Calendar,
  GalleryVerticalEnd,
  Home,
  PersonStanding,
  Workflow,
  ChartColumnIncreasing,
} from 'lucide-vue-next';

import type { SidebarProps } from '@/components/ui/sidebar';

const props = defineProps<SidebarProps>();

// This is sample data.
const data = {
  user: {
    name: 'Salvatore Olivieri',
    email: 'salvatore@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Pazienti',
      url: '/dashboard/pazienti',
      icon: PersonStanding,
    },
    {
      title: 'Sedute',
      url: '/dashboard/calendar',
      icon: Calendar,
    },
    {
      title: 'Statistiche',
      url: '/dashboard/statistiche',
      icon: ChartColumnIncreasing,
    },

    {
      title: 'Actions',
      url: '/dashboard/settings',
      icon: Workflow,
      items: [
        {
          title: 'Nuovo Paziente',
          url: '#',
        },
        {
          title: 'Nuova seduta',
          url: '#',
        },
      ],
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <div>
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <GalleryVerticalEnd class="size-4" />
              </div>

              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-semibold">[LOGO]</span>
              </div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem
            v-for="item in data.navMain"
            :key="item.title"
          >
            <SidebarMenuButton
              :tooltip="item.title"
              :is-active="item?.isActive"
            >
              <component :is="item.icon" v-if="item.icon" />
              <span class="font-medium">{{ item.title }}</span>
            </SidebarMenuButton>

            <SidebarMenuSub v-if="item.items?.length">
              <SidebarMenuSubItem
                v-for="childItem in item.items"
                :key="childItem.title"
              >
                <SidebarMenuSubButton
                  as-child
                  :is-active="childItem.isActive"
                >
                  <NuxtLink :to="childItem.url">{{
                    childItem.title
                  }}</NuxtLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
  </Sidebar>
</template>
