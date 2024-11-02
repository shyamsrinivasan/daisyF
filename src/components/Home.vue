<script setup lang="ts">
import Login from "@/components/Login.vue";
import HeaderNavBar from "@/components/HeaderNavBar.vue";

const isAuthenticated = ref(false);

function logInPressed() {
    isAuthenticated.value = true;
}

function logOutPressed() {
    isAuthenticated.value = false;
}
</script>

<template>    
    <Login v-if="!isAuthenticated" :authenticated="isAuthenticated" @login="logInPressed"></Login>
    <div v-else>
        <HeaderNavBar></HeaderNavBar>
        <h1 class="text-3xl font-bold underline">
            Profile page
        </h1>    
        <button 
            class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
            @click="logOutPressed">Logout
        </button>  
        <RouterView></RouterView>  
    </div>
</template>