

export const getSeleledIndex =(lavel,options)=>{
    if(lavel){
        const index = options.findIndex(item=>item.value===lavel)
        return index
    }
    return 0

}