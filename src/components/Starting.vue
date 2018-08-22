<template>
    <div>
        <img src="../assets/logo.png" style="width: 100px">
        <h3> Start New Discovery Game</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis sed, dolorem nostrum dolor magnam quisquam incidunt ad quam neque porro expedita nesciunt ut illo. Optio tempora reiciendis et itaque.</p>
        <router-link to="/category" class="btn"> Start New </router-link>
    </div>
</template>

<style>
.btn {
    padding: 10px 20px;
    background-color:transparent;
    border-radius: 5px;
    color: #FFF;
    border: 2px solid #FFF;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none !important;
}

</style>

<script>
    export default {
        name: 'Starting'
    }
</script>