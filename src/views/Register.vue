<template>
  <main>
    <h2>Account Sign up</h2>
    <form @submit.prevent="submit()">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input
        type="password"
        v-model="confirm_password"
        placeholder="Confirm password"
        required
      />
      <button type="submit">Sing Up</button>
    </form>
  </main>
</template>

<script>
import Swal from "sweetalert2";
import router from "@/router";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    async submit() {
      if (this.confirm_password !== this.password) {
        Swal.fire({
          icon: "warning",
          title: "Passwords do not match",
          allowEscapeKey: false,
          allowOutsideClick: false,
        });
      } else {
        const response = await fetch("http://localhost:3000/register", {
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
          this.successHandle();
        }
      }
    },
    errorHandle(error) {
      Swal.fire({
        icon: "warning",
        title: error,
        confirmButtonText: "ยืนยัน",
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    },
    successHandle() {
      Swal.fire({
        icon: "success",
        title: "Account created️! You can now log in and explore",
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => router.push({ path: "/login" }));
    },
  },
};
</script>

<style scoped>
main {
  padding: 5rem;
}
</style>
