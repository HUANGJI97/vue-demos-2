import { ref } from "vue";

type AsyncTask = (page:number,size?:number) => Promise<any>
/**
 * 
 * @param asyncTask 分页查询器
 * @returns 
 */
export function usePaginationQuery(asyncTask:AsyncTask){
  const refreshing = ref(false)
  async function onRefresh(){
    data.value = []
    page.value = 1
    await onLoad();
    refreshing.value = false
  }
  //列表逻辑
  const page = ref(1)
  const total = ref(0)
  const data =ref<{id:number,name:string}[]>([])
  const loading = ref(false)
  const finished = ref(false)
  async function onLoad(){
      const result = await asyncTask(page.value)
      if(result.success){
        total.value = result.total
        if(data.value.length >= total.value){
          finished.value = true
          return
        }
        data.value = data.value.concat(result.list)
        
        page.value ++ 
      }
      loading.value = false
  }
  return {
    page,total,loading,data,refreshing,finished,onLoad,onRefresh
  }

}