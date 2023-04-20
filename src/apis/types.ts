/**
 * 预报信息数据项
 */
 interface Forecasts{
    adcode:string
    casts:{
        date:string,
        daypower:number,
        daytemp:number,
        daytemp_float:string,
        dayweather:string,
        daywind:string,
        nightpower:string,
        nighttemp:string
        nighttemp_float:string
        nightweather:string
        nightwind:string
        week:string
    },
    city:string
    province:string
    reporttime:string
}


export interface GaodeWeatherReuslt{
    count:string,
    forecasts:Forecasts[],
    /**返回的状态信息 */
    info:"OK",
    /** 返回状态说明,10000代表正确 */
    infocode:"1000"
    /**  1：成功；0：失败 */
    status: "0" |"1"

}