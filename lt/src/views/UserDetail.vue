<template>
  <div>trang thông tin chi tiết user
    <p>username: {{ findUser() }} </p>
  </div>
</template>

<script setup>
// danh sách data của user
import { useRoute } from 'vue-router';
const router = useRoute();
const {id} = router.params; 
console.log(111111,router);

let users = [
  { id: 1, name: "Minh Thu", age: 20 },
  { id: 2, name: "Thu", age: 21 },
  { id: 3, name: "Minh ", age: 22 },
  { id: 4, name: "Minh Thị Thu", age: 23 },
];
const findUser = ()=>{
    return users.find((user)=> user.id==+id ).name
}
</script >

<style>
</style>