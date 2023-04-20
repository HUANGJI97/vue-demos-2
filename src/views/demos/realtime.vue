<template>
  <div class=" h-90vh flex items-center  justify-center text-xl font-bold">{{relTime}}</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRealTime } from "../../hooks/time";
const relTime = useRealTime();
const message = ref("hello");
</script>
