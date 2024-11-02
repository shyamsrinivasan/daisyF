<script setup lang="ts">
import { Notivue, Notification } from 'notivue';
import { materialTheme, pastelTheme } from 'notivue';
</script>

<template>  
  <Notivue v-slot="item">
    <Notification :item="item"
      :theme="pastelTheme" />
  </Notivue>
  <RouterView />
</template>


