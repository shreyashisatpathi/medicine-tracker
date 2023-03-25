import React,{useState , FC } from 'react';

type Props = {
  inputWeightCB: (weight: number) => void;
};
type InputWeight ={
    date : Date;
    weight : number;
}

const InputWeight: FC<Props> = ({ inputWeightCB }) => {
const [input ,setInput] =  useState<InputWeight[]>([])

const onChangeHandler = (event: any)=>{
    console.log(event.target.value);
}

const handleSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
 event.preventDefault();
 //inputWeightCB()
}

  return <div>
    <h2>Enter your weight today:</h2>
    <form onSubmit={handleSubmit}>
    <label>Weight</label>    
    <input 
    value = {InputWeight}
    onChange={onChangeHandler}></input>
    </form>
  </div>;
};

export default InputWeight;
