export function CapitalizeFilter(){
    return function(input){
        return input[0].toUpperCase() + input.substr(1);
    }

}
