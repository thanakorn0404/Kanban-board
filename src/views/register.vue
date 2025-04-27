<template>
  <div class="container">
    <div class="login-page">
      <div>
        <h2>Account Sign up</h2>
      </div>
      <div class="bx-usps">
        <input placeholder="Username" />
      </div>
      <div class="bx-usps">
        <input placeholder="Password" />
      </div>
      <div class="bx-usps">
        <input placeholder="Confirm password" />
      </div>
      <button>Sing Up</button>
      <div>
        <h6>Already have an account? Login</h6>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 750px;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
h2 {
  padding: 10px;
  color: (145, 255, 218);
}
button {
  margin-top: 5px;
  background: rgb(28, 179, 255);
  color: rgb(0, 0, 0);
  border: 0;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.bx-usps {
  padding: 5px;
}
</style>
