<template>
  <div class="footer">
    <span id="year"> </span
    ><span> 2024 DS Tube. All rights reserved.</span>
  </div>
</template>

<script setup></script>

<style scoped>
:root {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body {
  height: 100vh;
  overflow: hidden;
}
.footer {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem; /* Adjust the padding as needed */
  background: #282828;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 50%;
  /* fallback height */
  min-height: 40px; /* Adjust the height as needed */
}
</style>
