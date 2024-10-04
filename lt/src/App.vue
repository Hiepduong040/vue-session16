<template>
  <div>
    <h1>Vue-router</h1>
    <router-link  to="/"> click home</router-link>
    <router-link  to="/contact"> click contact</router-link>
    <router-link  to="/about"> click about</router-link>
    <!-- <a href="/">Click home</a>||
    <a href="/about">Click about</a>||
    <a href="/contact">Click contact</a>|| -->
    <button @click="redicreatPage">redirect</button>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
// khai báo hàm điều hướng sang các trang
const redicreatPage =()=>{
  // router.push("/contact")
  router.replace("/contact")

}
</script>

<style>
</style>