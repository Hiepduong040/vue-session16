<template>
    <div class="p-4">
      <h3 class="text-xl font-bold">Thông tin cá nhân</h3>
      <p>Id: {{ id }}</p>
      <p>Tên: Nguyễn Văn A</p>
      <p>Vị trí: Quản lý</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const id = route.params.id
  </script>
  
  <style>
  
  </style>