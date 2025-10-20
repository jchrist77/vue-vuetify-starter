<script setup lang="ts">
import { ref } from 'vue';

const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  // avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
  avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  role: 'Admin',
});

const menu = [
  { title: 'Profile', icon: 'mdi-account-outline', to: undefined },
  { title: 'Settings', icon: 'mdi-cog-outline', to: undefined, disabled: true },
  { title: 'Billing', icon: 'mdi-currency-usd', to: undefined, badge: 4 },
];

const secondaryMenu = [
  { title: 'FAQ', icon: 'mdi-help-circle-outline', to: undefined, disabled: true },
];

function logout() {
  // Handle logout logic
  console.log('User logged out');
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn tile icon v-bind="props">
        <v-avatar density="compact" :image="user.avatar" border />
      </v-btn>
    </template>

    <v-card min-width="220">
      <v-list density="compact" class="py-0" slim>
        <v-list-item class="py-2" to="/#user">
          <template #prepend>
            <v-badge dot color="success" location="bottom end" offset-x="3" offset-y="3" class="mr-2">
              <v-avatar :image="user.avatar" size="40" />
            </v-badge>
          </template>
          <v-list-item-title class="font-weight-bold">{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider />
        <v-list-item v-for="item in menu" :key="item.title" :to="item.to" color="primary"
          :disabled="item.disabled || false" exact>
          <template #prepend>
            <v-icon :icon="item.icon" class="mr-2" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <template v-if="item.badge" #append>
            <v-chip size="small" color="error">{{ item.badge }}</v-chip>
          </template>
        </v-list-item>
        <v-divider />
        <v-list-item v-for="item in secondaryMenu" :key="item.title" :to="item.to" color="primary"
          :disabled="item.disabled || false" exact>
          <template #prepend>
            <v-icon :icon="item.icon" class="mr-2" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider />
      <div class="pa-2">
        <v-btn block color="error" @click="logout">
          Logout <v-icon right dark icon="mdi-logout-variant" class="ml-2"></v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-menu>
</template>

<style scoped></style>
