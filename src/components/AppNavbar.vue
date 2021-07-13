<template>
  <nav
    class="flex flex-wrap items-center justify-between mb-6 -mx-3  md:flex-nowrap"
  >
    <ul class="flex items-center">
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="inline-block p-3 text-sm text-gray-800"
        >
          Home
        </router-link>
      </li>

      <li>
        <router-link
          :to="{ name: 'my-files' }"
          class="inline-block p-3 text-sm text-gray-800"
        >
          Your files
        </router-link>
      </li>
    </ul>

    <p v-if="authenticated">{{ user.name }}</p>

    <ul class="flex items-center">
      <template v-if="!authenticated">
        <li>
          <router-link
            :to="{ name: 'login' }"
            class="inline-block p-3 text-sm text-gray-800"
          >
            Sign In
          </router-link>
        </li>

        <li>
          <router-link
            :to="{ name: 'register' }"
            class="inline-block p-3 text-sm text-gray-800"
          >
            Register
          </router-link>
        </li>
      </template>
      <template v-else>
        <li>
          <router-link
            :to="{ name: 'register' }"
            class="inline-block p-3 text-sm text-gray-800"
          >
            Account
          </router-link>
        </li>
        <li>
          <button
            @click="logout"
            class="inline-block p-3 text-sm text-gray-800"
          >
            Logout
          </button>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const authenticated = computed(() => store.state.auth.authenticated);
const user = computed(() => store.state.auth.user);

function logout() {
  if (!confirm("Sure to logout?")) return;

  store.dispatch("auth/logout");
}
</script>
