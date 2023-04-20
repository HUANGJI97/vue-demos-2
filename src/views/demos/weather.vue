<template>
  <div class="flex flex-col items-center p-4">
       <div class=" text-xl text-gray-500">杭州市</div>  
       <div class="text-5xl mt-2 flex items-start">15<span class="text-base">℃</span></div>
       <div class="mt-2">多云</div>
       <div class="mt-2 flex gap-2 text-gray-500">
            <div>最高18℃</div>
            <div>最低14℃</div>
       </div>
       
       <div class="p-4 py-2 w-full bg-gray-200 mt-8 rounded-xl">
          <div class="text-sm">空气质量</div> 
          <div class="flex gap-1 text-lg font-bold mt-2">
            <div>81</div>
            <div>-</div>
            <div>良</div>
          </div>
          <div>当前AQI(CN)为81</div>
          <div class="mt-4 h-4px w-full bg-gradient-6 rounded-full flex items-center relative">
             <div class="bg-red-500 w-6px shadow h-6px rounded-full border-1 border-white absolute left-40px "></div>
          </div>
       </div>
       <div class="p-4 py-2 w-full bg-gray-200 mt-8 rounded-xl">
            <div class="text-sm">天气预报</div> 
            <div class="flex">
                <div>今天</div>
                <div>小雨</div>
            </div>
       </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getWeatherInfo } from "../../apis/common";
import { useRealTime } from "../../hooks/time";
onMounted(async ()=>{
  const res = await getWeatherInfo();
  console.log("天气信息返回值",res)
})
const relTime = useRealTime();
const message = ref("hello");
</script>
