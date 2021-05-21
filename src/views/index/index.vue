<template>
    <div class="container">
        <div class="info-text">Hi, {{ name }}!</div>
    </div>
</template>
<script>
import { onMounted, ref, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
export default {
    name: "Index",
    setup() {
        const { proxy } = getCurrentInstance();
        window.proxy = proxy;
        //const route = useRoute();
        const name = ref("");
        onMounted(() => {
            //console.log("nameIndex", proxy.$route.query.name)
            name.value = proxy.$route.query.name;
        });
        return {
            name
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    .info-text{
        font-size: 36px;
        font-weight: bold;
        color: #333;
        margin-top: 260px;
    }
}
</style>