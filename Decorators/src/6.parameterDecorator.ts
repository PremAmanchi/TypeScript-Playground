// usually not used; specific for framework use or anything of that kind


type WatchedParameter = {
    methodName: string, 
    parameterIndex: number
}

const watchedParameters: WatchedParameter[] = [];

function Watch(
    target: any,
    methodName: string,
    parameterIndex: number
) {
    watchedParameters.push({
        methodName,
        parameterIndex
    })
}

class Vehicle{
    move(@Watch speed: number ){}
}

console.log(watchedParameters)