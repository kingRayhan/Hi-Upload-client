<template>
  <div class="w-10/12 mx-auto md:w-6/12">
    <form action="#" @submit.prevent="login">
      <div class="mb-3">
        <label class="inline-block mb-2 text-sm" for="email">
          Email adress
        </label>
        <input
          type="email"
          v-model="form.email"
          id="email"
          class="w-full h-10 px-3 border-2 border-gray-200 rounded-md  focus:outline-none focus:ring ring-indigo-500"
        />
      </div>
      <div class="mb-3">
        <label class="inline-block mb-2 text-sm" for="password">
          Password
        </label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="w-full h-10 px-3 border-2 border-gray-200 rounded-md  focus:outline-none focus:ring ring-indigo-500"
        />
      </div>

      <div>
        <button
          class="px-4 py-3 font-medium leading-none text-white bg-indigo-500 rounded-md "
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

/**
 * Login user
 */
const form = reactive({
  email: "",
  password: "",
});

async function login() {
  await store.dispatch("auth/login", form);
  router.push({ name: "home" });
}
</script>
