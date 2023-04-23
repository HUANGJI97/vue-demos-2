<template>
  <div class="flex flex-col items-center p-4">
       <div class=" text-xl text-gray-500">{{ weatherData.city }}</div>  
       <div class="text-5xl mt-2 flex items-start">15<span class="text-base">℃</span></div>
       <div class="mt-2">{{weatherData.today.dayweather}}</div>
       <div class="mt-2 flex gap-2 text-gray-500">
            <div>最高{{weatherData.today.daytemp}}℃</div>
            <div>最低{{weatherData.today.nighttemp}}℃</div>
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
       <div class="p-4 py-2 w-full bg-gray-200 mt-4 rounded-xl">
            <div class="text-sm mb-2">天气预报</div> 
            <div v-for="(item,index) in weatherData.list" class="flex justify-between not-last:border-b-1px  border-gray-300 py-3 ">
               <div class="flex gap-2 ">
                  <div class="font-bold">{{item.week}}</div>
                  <div>{{item.dayweather}}</div>
               </div>
               <div class="flex gap-2 items-center">
                  <div>{{ item.nighttemp }}<span>℃</span></div>
                  <!-- bg-gradient-3 -->
                  <div class="h-2px bg-gray-300  w-80px h-2px">
                    <div class="h-2px bg-gradient-3 rounded w-50px ml-20px"></div>
                  </div>
                  <div>{{ item.daytemp }}<span>℃</span></div>
               </div>

            </div>
       </div>
       <div class="grid grid-cols-2  gap-4 mt-4 bg-red  w-full">
          <div class="bg-gray-200 rounded-xl  p-2">
             <div class="text-sm">紫外线指数</div>
             <div class="text-3xl font-bold mt-2">5</div>
             <div class="text-xl font-bold">中等</div>
             <div class="mt-4 h-4px w-full bg-gradient-6 rounded-full flex items-center relative">
                <div class="bg-red-500 w-6px shadow h-6px rounded-full border-1 border-white absolute left-40px "></div>
             </div>
             <div class="mt-3">16:00 前注意防晒</div>
          </div>
          <div class="bg-gray-200  rounded-xl p-2">
             <div class="text-sm">降雨</div>
             <div class="text-3xl font-bold mt-2">4毫米</div>
             <div class="text-xl font-bold">过去24小时</div>
             <div class="mt-3">预计未来24小时内降水量为8毫米</div>
          </div>
          <div class="bg-gray-200  rounded-xl p-2">
             <div class="text-sm">体感温度</div>
             <div class="text-3xl font-bold mt-2 flex items-start">16<span class="text-sm">℃</span></div>
             <div class="text-xl font-bold h-30px"></div>
             <div class="mt-3">与实际温度相似</div>
          </div>
          <div class="bg-gray-200  rounded-xl p-2">
             <div class="text-sm">湿度</div>
             <div class="text-3xl font-bold mt-2 flex items-start">75<span class="text-sm">℃</span></div>
             <div class="text-xl font-bold h-30px"></div>
             <div class="mt-3">目前露点温度为12℃</div>
          </div>

       </div>
  </div>
</template>
<script lang="ts" setup>
import { useWeatherData } from "../../hooks/weather";
const weatherData = useWeatherData()
</script>
