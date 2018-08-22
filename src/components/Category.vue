<template>
    <div>
        <img src="../assets/logo.png" style="width: 100px">
        <p>Select category </p>
        <ul>
            <li>
             <router-link to="/discovery">🎨 Places</router-link>
            </li>
            <li>
              🍾 People
            </li>
            <li>
                🔥 Animal
            </li>
            <li>
                🔥 Programming
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'Category'
}
</script>

<style>
    ul {
        margin: 0px;
        padding: 0px;
    }

    ul li {
        padding: 5px;
        display: block;
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
        color: #ffffff;
    }

    ul li:hover {
        text-decoration: none;
        color: #994400;
    }
</style>

