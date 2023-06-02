<template>
    <div>
        <ul>
            <li v-for="user in users">
                <router-link to="/a">ID:{{user["id"]}}, Name:{{user["name"]}}, Email:{{user["email"]}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
</style>