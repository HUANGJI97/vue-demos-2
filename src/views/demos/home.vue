<template>
    <div class="p-4 bg-gray-50 h-100vh">
        <van-cell-group title="Vue3-Demos" inset>
            <van-cell v-for="(item,index) in demos" 
                :key="index" 
                :title="item.name" 
                :to="item.path"
                is-link
                :label="item.text"
            />
            <!-- <van-cell title="单元格" value="内容" label="描述信息" /> -->
        </van-cell-group>

    </div>
</template>
<script lang='ts' setup>
const demos = [
    { name: "useRealTime()", path: "/realtime",text:"Hooks封装实例" },
    { name: "useWeatherInfo()", path: "/weather" ,text:"结合异步请求"},
];
</script>
<style lang='scss'>
    
</style>