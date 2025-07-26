<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core';

// Reuse `form` section
const [UseTemplate, GridForm] = createReusableTemplate();
const isDesktop = useMediaQuery('(min-width: 768px)');

const isOpen = ref(false);
</script>

<template>
  <UseTemplate>
    <form class="grid items-start gap-4 px-4 md:px-0">
      <div class="grid gap-2">
        <Label html-for="email">Email</Label>
        <Input
          id="email"
          type="text"
          default-value="shadcn@example.com"
        />
      </div>

      <div class="grid gap-2">
        <Label html-for="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here."
        />
      </div>
      <Button type="submit"> Submit </Button>
    </form>
  </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <FeedbackButton />
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Send us a Message</DialogTitle>
        <DialogDescription>
          We appreciate any feedback or bug reports on the product.
          Feedback that the team finds useful will be rewarded with
          freebies and discounts or even cashbacks on your order!
        </DialogDescription>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <FeedbackButton />
    </DrawerTrigger>

    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>Send us a Message </DrawerTitle>
        <DrawerDescription>
          We appreciate any feedback or bug reports on the product.
          Feedback that the team finds useful will be rewarded with
          freebies and discounts or even cashbacks on your order!
        </DrawerDescription>
      </DrawerHeader>
      <GridForm />
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline"> Cancel </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
