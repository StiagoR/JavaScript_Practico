const list1 = [100,200,300,9000];


function calculateAverage(list1){
    let sumaList = 0;
    for(let i=0; i< list1.length; i++){
        sumaList = sumaList + list1[i];
    }

    const average = sumaList / list1.length;
    return average;
}

const midlist1 = parseInt(list1.length /2);

function esPar(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if (esPar(list1.length)){
    const element1 = list1[midlist1 - 1];
    const element2 = list1[midlist1];
    const average1and2 = calculateAverage([element1,element2]);

    mediana = average1and2;   
} 
else {
        mediana = list1[midlist1];
    }
