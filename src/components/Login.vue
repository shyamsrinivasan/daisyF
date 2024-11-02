<script setup lang="ts">
interface Props {
    authenticated: bool;    
};
interface Emits {
    (event: 'login', payload: null): void; 
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

async function logInPressed() {
    push.success('Hello from your first notification!');
    if (!props.authenticated) {
        emit('login');
    }    
}
</script>

<template>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    <button 
        class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
        @click="logInPressed">Login</button>
</template>