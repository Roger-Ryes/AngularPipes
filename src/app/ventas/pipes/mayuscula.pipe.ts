import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(value: string, ...arg: boolean[]):string{
        
        const returValue: string = (arg[0]==false) ? value.toLowerCase():value.toUpperCase(); 
        return returValue;
    }
    
}