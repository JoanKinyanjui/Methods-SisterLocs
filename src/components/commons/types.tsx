export  type inputFieldProps ={
    placeholder:string;
    value:string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type buttonProps = {
    buttonText:string,
    onButtonClick:()=>void;
}