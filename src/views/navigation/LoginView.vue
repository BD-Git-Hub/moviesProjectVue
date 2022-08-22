<template>
  <div class="container">
    <div class="Content">
      <div class="registerContent">
        <form action="register.php"  method="POST">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName"/>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" />
          <label for="userName">Username:</label>
          <input type="text" id="userName" />
          <label for="password">Password: </label>
          <input type="password" id="password" />
          <base-button title="Create" type="submit" />
        </form>
      </div>
      <div class="loginContent">
        <form action="login.php" method="POST">
          <label for="loginUsername">Username:</label>
          <input type="text" id="loginUsername" name="loginUsername"/>
          <label for="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="loginPassword"/>
          <base-button title="Login"/>
        </form>
      </div>
    </div>
  </div>
  
</template>



<style scoped>
.container {
  width: auto;
  height: 92vh;
  background-color: blueviolet;
}

.Content {
  position: relative;
  top: 5%;
  height: 90%;
  width: 60%;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.registerContent {
  background-color: yellowgreen;
  height: relative;
  width: 50%;
}
.loginContent {
  background-color: yellow;
  height: relative;
  width: 50%;
}
</style>
