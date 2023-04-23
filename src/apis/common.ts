/**
 * 公共接口
 */
import axios from "axios"
import {GaodeWeatherReuslt} from "./types"




export async function getWeatherInfo (areaCode:string='330000'){
    const {data} = await axios.get<GaodeWeatherReuslt>(`https://restapi.amap.com/v3/weather/weatherInfo?key=049544e67c485fc4f0c9d3a169947bbc&city=${areaCode}&extensions=all`)
    return data
}
interface FakListResult {
    code:number,
    success:boolean,
    total:number,
    list:{id:number,name:string}[]
}
export async function getFakeList(page:number = 1,size:number=10):Promise<FakListResult>{
    const total = 50
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                code:200,
                success:true,
                total,
                list:Array.from({length:size},(_,index)=>{
                    const id = (((page - 1) * size) + index +1)
                    return {
                        id,
                        name:`假数据${id}`
                    }
                })
            })
        },1500)
    })
}