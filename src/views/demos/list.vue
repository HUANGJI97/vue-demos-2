<template>
   <div class="w-100vw min-h-100vh bg-gray-100">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
      <van-list
        class="p-4"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
       
       >
          <van-cell v-for="(item,index) in data" class="p-2 rounded-xl mb-4 h-80px" :title="item.name"></van-cell>
      </van-list>


   </van-pull-refresh>

   </div>
</template>
<script lang="ts" setup>
import { getFakeList } from "../../apis/common";
import { usePaginationQuery } from "../../hooks/usePaginationQuery";
const {refreshing,finished,loading,data,onLoad,onRefresh} = usePaginationQuery(getFakeList)

</script>
