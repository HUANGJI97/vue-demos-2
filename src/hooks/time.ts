import dayjs from "dayjs";
import { ref } from "vue";
export function useRealTime() {
  const now = ref("YYYY-MM-DD HH:mm:ss");
  function refreshTime() {
    setInterval(() => {
      now.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
    });
  }
  refreshTime();
  return now;
}
