//Objective is to find the x and y coord of a skyline as seen in it's shadow

let buildings = [[2,9,10], [3,7,15], [5,12,12], [15,20,10], [19,24,8]]


//O(nlogn) solution that sorts all of the unique left and right endpoints
//of the buildings, sorts them, then goes through each of them to find the
//correct height

let lr = new Set()
    
//Add all left and right endpoints and sort them
for (let [l,r,h] of buildings) {
    lr.add(l)
    lr.add(r)
}

let lr1 = [...lr].sort((a,b) => a - b)
let n = buildings.length 

//Initialize w/ height of 0
let result = [[0, 0]]

for (let x of lr1) {
    let index = 0
    let height = 0
    
    //Check whether the x coordinate is in between the left and right of the current building
    while (index < n && x >= buildings[index][0]) {
        if (x < buildings[index][1]) {
            height = Math.max(height, buildings[index][2])
        }
        index++
    }
    
    //See if it's necessary to push based on previous height
    if (result[result.length - 1][1] == height) {
        continue
    }
    
    result.push([x, height])
}

//Don't include initial comparator
return result.slice(1)