
function dateToMilliseconds(dateString: string):any {

    const parts:any = dateString.split('.');
    
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    
    return date.getTime();
}





export function doSort(array:any):any {
    let status:boolean = false;
    while (!status) {
        for (let i = 0; i < array.length-1; i++) {
            status = true;
            if (dateToMilliseconds(array[i].date) > dateToMilliseconds(array[i+1].date)) {
                status = false;
                let a:any = array[i];
                array[i] = array[i+1];
                array[i+1] = a;
            }
        }
    }



    return array;
}



export function validateDate (text: string) {
    return /[0-9][0-9].[0-9][0-9].[0-9][0-9]/.test(text);
}

export function validateKm (text: string) {
    return /^\d*(\.\d+)?$/.test(text);
}