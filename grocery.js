const prompt=require('prompt-sync')();
const fs=require('fs')
let grocerry=[]
// const stringify=JSON.stringify(grocerry)
let price=[]

for (let i=0; ;i++){
    let  options=prompt("add item,show items,remove item,total price,saved")
    if (options=="add"){
        let add_grocerry=prompt("name of grocerry item ")
        let add_price=parseFloat(prompt("enter price of item"))
        let your_grocerry={
        item:add_grocerry,
        price:add_price,
        }        
        grocerry.push(your_grocerry)
        price.push(add_price)
    }           
        if (options=="show items"){
            console.log('all your items are here',"grocerry")
            }
        if (options=="total price"){
            let sum=price.reduce((acc,x)=> acc+x,0)
            console.log(' total price ',sum)
            } 
        if (options=="saved"){
            const stringify=JSON.stringify(grocerry)
            fs.writeFileSync('grocery.json',stringify)
            console.log("saved to file")
        }    
        if (options=="remove"){
            let remove=prompt("what you want to remove")
            let removed=grocerry.findIndex(entery=>entery.item===remove)
           if (removed!==-1){
            let groc= grocerry.filter(entery=>entery.item!==remove)
            console.log(groc)
           }
        
        }
       
        //     console.log("try again ")
        
}