import { useState } from "react";

/**
 * ### usage
 * ```react
 *  <div 
 *      className={cn(
 *          "btn",
 *          [old > 18,"ok","ng"],
 *          [old >= 60,"silver"]
 *      )}>
 *      push !
 *  </div>
 * ```
 */
export default function cn(...classNames:(string|[boolean,string,string?])[]):string{
    let ans = "" ;
    classNames.forEach((className)=>{
        if(typeof className === "string" ){
            ans += className ;
            ans += " " ;
        }else if(className instanceof Array){
            const [con,t,f=""] = className ;
            if(con){
                ans += t ;
            }else{
                ans += f ;
            }
            ans += " " ;
        }else{
            throw new Error("className must be string or array "+className) ;
        }
    });
    return ans ;
}

