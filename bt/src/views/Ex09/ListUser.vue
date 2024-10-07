<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="user in users"
      :key="user.id"
      class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <ul class="space-y-3">
        <li class="text-lg font-semibold">
          ID: <span class="text-gray-700">{{ user.id }}</span>
        </li>
        <li class="text-lg font-semibold">
          Tên: <span class="text-gray-700">{{ user.name }}</span>
        </li>
        <li class="text-lg font-semibold">
          Email: <span class="text-gray-700">{{ user.email }}</span>
        </li>
        <li class="text-lg font-semibold">
          Địa chỉ: <span class="text-gray-700">{{ user.address }}</span>
        </li>
      </ul>
      <router-link :to="'/userDetail/' + user.id">
        <button
          class="mt-4 w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Xem chi tiết
        </button>
      </router-link>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const users = ref([
  {
    id: 1,
    name: "Dương Sỹ Hiệp",
    email: "hiepduong0409@gmail.com",
    address: "Hà Tây",
  },
  {
    id: 2,
    name: "Dương Quỳnh Anh",
    email: "quanh204@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 3,
    name: "Nguyễn Thạch Kim Ngọc",
    email: "ngocnguyen205@gmail.com",
    address: "Quy Nhơn",
  },
]);
</script>
  
  <style  >
</style>
  