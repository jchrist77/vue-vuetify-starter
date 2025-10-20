<script setup lang="ts">
import { ref, computed } from 'vue';

interface Notification {
  id: number;
  avatar?: string;
  initials?: string;
  icon?: string;
  title: string;
  subtitle: string;
  date: Date;
  unread?: boolean;
}

const notifications = ref<Notification[]>([
  { id: 1, avatar: 'https://randomuser.me/api/portraits/women/85.jpg', title: 'Congratulation Flora! 🎉', subtitle: 'Won the monthly best seller badge', date: new Date(), unread: true },
  { id: 2, initials: 'TH', title: 'New user registered.', subtitle: '5 hours ago', date: new Date(Date.now() - 1000 * 60 * 60 * 5), unread: true },
  { id: 3, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', title: 'New message received 👋', subtitle: 'You have 10 unread messages', date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), unread: false },
  { id: 4, icon: 'mdi-paypal', title: 'PayPal', subtitle: 'Received Payment', date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), unread: true },
]);

const unreadCount = computed(() => notifications.value.filter(n => n.unread).length);

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDate(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const notificationDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (notificationDate.getTime() === today.getTime()) {
    return 'Today';
  }
  if (notificationDate.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  }
  return date.toLocaleDateString([], { day: '2-digit', month: 'short' });
}


const groupedNotifications = computed(() => {
  const groups: Record<string, Notification[]> = {};
  notifications.value.forEach(n => {
    const dateKey = formatDate(n.date);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(n);
  });
  return groups;
});


function viewAll() {
  // Logic to view all notifications
  console.log('Viewing all notifications');
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-badge location="top right" offset-x="10" offset-y="10" :content="unreadCount" color="error"
        :dot="!unreadCount">
        <v-btn tile icon="mdi-bell-outline" v-bind="props" />
      </v-badge>
    </template>
    <v-card class="notification-panel" width="380">
      <header class="pa-4 d-flex align-center">
        <h6 class="text-h6 font-weight-medium">Notifications</h6>
        <v-chip color="primary" size="small" class="ml-2">{{ unreadCount }} New</v-chip>
        <v-spacer />
        <v-btn icon="mdi-email-outline" variant="text" size="small" />
      </header>

      <v-divider />

      <v-list density="compact" class="py-0">
        <template v-for="(group, date) in groupedNotifications" :key="date">
          <v-list-subheader>{{ date }}</v-list-subheader>
          <v-list-item v-for="notification in group" :key="notification.id" lines="two" class="py-2">
            <template #prepend>
              <v-avatar :image="notification.avatar" :color="notification.initials ? 'primary' : undefined">
                <v-icon v-if="notification.icon" :icon="notification.icon" />
                <span v-if="notification.initials" class="text-white font-weight-bold">{{ notification.initials
                  }}</span>
              </v-avatar>
            </template>

            <v-list-item-title class="font-weight-bold text-subtitle-1">
              {{ notification.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-2">{{ notification.subtitle }}</v-list-item-subtitle>

            <template #append>
              <div class="d-flex flex-column align-end">
                <span class="text-caption text-grey-darken-1">{{ formatTime(notification.date) }}</span>
                <v-icon v-if="notification.unread" icon="mdi-circle" color="primary" size="x-small" class="mt-1" />
              </div>
            </template>
          </v-list-item>
        </template>
        <div v-if="!notifications.length" class="text-center py-8 text-grey">
          <p>No new notifications</p>
        </div>
      </v-list>
      <v-divider />
      <div class="pa-2">
        <v-btn block color="primary" @click="viewAll">View All Notifications</v-btn>
      </div>
    </v-card>
  </v-menu>
</template>

<style scoped>
.notification-panel {
  border-radius: 8px;
}

.v-list-item {
  align-items: flex-start;
}
</style>
