<template>
    <div class="container">
        <div class="info-text">错误信息： {{ log }}</div>
    </div>
</template>
<script>
import { onMounted, ref, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
export default {
    name: "Error",
    setup() {
        const { proxy } = getCurrentInstance();
        window.proxy = proxy;
        //const route = useRoute();
        const log = ref("");
        onMounted(() => {
            //console.log("nameIndex", proxy.$route.query.name)
            log.value = proxy.$route.query.errorLog;
        });
        return {
            log
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