const changeNameAction = (name)=>{
    return {
        type:"change_name",
        name
    }
}

const addNumberAction = (num)=>{
    return {
        type:"add_number",
        num
    }
}

module.exports = {
    changeNameAction,
    addNumberAction
}