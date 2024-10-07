<template>
    <div>
      <h1 class="text-2xl font-bold">Danh sách nhân viên</h1>
      <div v-for="user in employees" :key="user.id" class="p-6 bg-gray-100 shadow-md max-w-md">
          <ul class="mb-4 p-4 bg-white rounded-lg shadow">
              <li class="font-semibold text-lg mb-2">ID: {{ user.id }}</li>
              <li class="font-semibold text-lg mb-2">Tên: {{ user.name }}</li>
              <li class="font-semibold text-lg mb-2">Vị trí: {{ user.position }}</li>
          </ul>
          <router-link :to="'/listEmployee/' + user.id">
              <button class="p-3 w-full flex justify-center items-center text-xl border border-gray-700">Xem chi tiết</button>
          </router-link>
      </div>
  
      <router-view />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const employees = ref([
    { id: 1, name: 'Nguyễn Văn A', position: 'Quản lý' },
    { id: 2, name: 'Nguyễn Văn B', position: 'Nhân viên' },
    { id: 3, name: 'Nguyễn Văn C', position: 'Kỹ sư' }
  ])
  </script>