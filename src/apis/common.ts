/**
 * 公共接口
 */
import axios from "axios"
import {GaodeWeatherReuslt} from "./types"




export async function getWeatherInfo (){
    const {data} = await axios.get<GaodeWeatherReuslt>("https://restapi.amap.com/v3/weather/weatherInfo?key=049544e67c485fc4f0c9d3a169947bbc&city=330000&extensions=all")
    return data
}