import { ref } from 'vue';
import { getWeatherInfo } from '../apis/common';
import { Forecasts, GaodeWeatherReuslt, WeatherCasts } from './../apis/types';
/**
 * 自定义天气数据格式
 */
interface WeatherData extends Partial<Forecasts> {
    today:Partial<WeatherCasts>,
    list:WeatherCasts[]
}
const WEEK_NAME_DICT:Record<string,string> = {
    1:"周一",
    2:"周二",
    3:"周三",
    4:"周四",
    5:"周五",
    6:"周六",
    7:"周日"
}
/**
 * 天气数据使用
 * @param areaCode 地区编码
 */
export function useWeatherData(areaCode?:string){
    const weatherData = ref<WeatherData>({
        today:{},
        list:[]
    })
    async function load(){
        const data =  await getWeatherInfo(areaCode);
        const forecasts = data.forecasts[0]
     
        forecasts.casts = forecasts.casts.map(item=>{
            item.week = WEEK_NAME_DICT[item.week]
            return item
        })
        weatherData.value = {
            ...forecasts,
            today:data.forecasts[0].casts[0],
            list:data.forecasts[0].casts
        }
    }
    load();
    return weatherData
}