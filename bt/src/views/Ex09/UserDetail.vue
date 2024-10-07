<template>
  <div v-if="user" class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center mb-6">
      Thông tin chi tiết người dùng
    </h2>
    <ul class="space-y-4">
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
    <router-link to="/listUser">
      <button
        class="mt-6 w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Quay lại
      </button>
    </router-link>
  </div>
</template>
  
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
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

const user = ref(null);

// Khi route.params.id thay đổi, tìm user theo ID
watch(
  () => route.params.id,
  (id) => {
    user.value = users.value.find((u) => u.id === Number(id));
  },
  { immediate: true }
);
</script>
  
  <style  >
</style>
  