<template>
  <main>
    <div>
      <h2>Account Login</h2>
    </div>
    <form @submit.prevent="submit()">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <fieldset>
        <small>Forget your password? <a href="#">click here.</a></small
        ><br />
        <a href="/register"><small>Don't have account yet?</small></a>
      </fieldset>
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script>
import router from "@/router";
import { useLocalStorage } from "@vueuse/core";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: "",
      password: "",
      api_key: "",
    };
  },
  methods: {
    async submit() {
      const response = await fetch("http://localhost:3000/login", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        this.errorHandle(data.message);
      } else {
        const data = await response.json();
        useLocalStorage("api_key", data.api_key);
        useLocalStorage("user_id", data.id);
        useLocalStorage("username", data.username);
        this.successHandle();
      }
    },
    errorHandle(error) {
      Swal.fire({
        icon: "warning",
        title: error,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    },
    successHandle() {
      Swal.fire({
        icon: "success",
        title: "Success! You are now logged in",
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => router.push({ path: "/" }));
    },
  },
};
</script>

<style scoped>
main {
  padding: 5rem;
}
</style>
