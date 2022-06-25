const chunks = (arr: any[], size: number) => {
    return arr.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/size)
      
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
      
        resultArray[chunkIndex].push(item)
      
        return resultArray
    }, [])
}

export default chunks