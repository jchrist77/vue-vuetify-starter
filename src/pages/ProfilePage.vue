<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import type { User } from '@/types'

const appStore = useAppStore()

const isEditing = ref(false)

// Initialize with user data, providing fallbacks for new properties
const profileData = ref({
  name: appStore.user?.name || '',
  avatar: appStore.user?.avatar || '',
  phone: appStore.user?.phone || '',
})

// Watch for changes in the store's user object (e.g., after login)
watch(() => appStore.user, (newUser) => {
  if (newUser) {
    profileData.value = {
      name: newUser.name || '',
      avatar: newUser.avatar || '',
      phone: newUser.phone || '',
    }
  }
}, { deep: true })


const saveProfile = () => {
  if (appStore.user) {
    // We create a new object to ensure reactivity works correctly
    const updatedUser: User = {
      ...appStore.user,
      name: profileData.value.name,
      avatar: profileData.value.avatar,
      phone: profileData.value.phone,
    }
    appStore.setUser(updatedUser)
    isEditing.value = false
  }
}

const cancelEdit = () => {
  if (appStore.user) {
    profileData.value = {
      name: appStore.user.name || '',
      avatar: appStore.user.avatar || '',
      phone: appStore.user.phone || '',
    }
  }
  isEditing.value = false
}

</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-h5 d-flex justify-space-between align-center">
            <span>Profile</span>
            <v-btn v-if="!isEditing" color="primary" @click="isEditing = true">Edit Profile</v-btn>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="saveProfile">
              <div class="d-flex justify-start">
                <v-avatar size="128" class="elevation-4" :image="profileData.avatar" />
              </div>

              <template v-if="isEditing">
                <div class="text-subtitle-1 text-medium-emphasis mt-4">Avatar</div>
                <v-text-field v-model="profileData.avatar" density="compact" variant="outlined" />
              </template>

              <div class="text-subtitle-1 text-medium-emphasis mt-4">Username</div>
              <v-text-field v-if="isEditing" v-model="profileData.name" density="compact" variant="outlined" />
              <p v-else>{{ appStore.user?.name }}</p>

              <div class="text-subtitle-1 text-medium-emphasis mt-4">Email</div>
              <p>{{ appStore.user?.email }}</p>

              <div class="text-subtitle-1 text-medium-emphasis mt-4">Phone</div>
              <v-text-field v-if="isEditing" v-model="profileData.phone" density="compact" variant="outlined" />
              <p v-else>{{ appStore.user?.phone || '- Not set -' }}</p>

              <div v-if="isEditing" class="d-flex justify-space-between mt-4">
                <v-btn @click="cancelEdit" class="mr-2" text="Cancel" variant="text" />
                <v-btn color="primary" type="submit" text="Save" />
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
