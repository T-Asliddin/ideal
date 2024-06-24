import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from '@mui/material/Button';
import {auth} from '@service';

const Index = () => {
  const [form, setForm] = useState({});

  const hendleChange = (e) => {
    const {name,value}=e.target
    setForm({...form ,[name]:value})
    console.log(form);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const res =await auth.sigin_up(form)
      console.log(res);
    }catch(error){}
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[600px]  p-5">
        <h1 className="text-[50px] my-3 text-center ">Registr</h1>
        <form className=" flex flex-col gap-3 ">
          <TextField
            fullWidth
            type="email"
            label="Email"
            id="email"
            name="email"
            onChange={hendleChange}
          />
          <TextField
            fullWidth
            type="name"
            label="Full Name"
            id="full_name"
            name="full_name"
            onChange={hendleChange}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            id="password"
            name="password"
            onChange={hendleChange}
          />
          <TextField
            fullWidth
            type="phone"
            label="Phone"
            id="phone"
            name="phone"
            onChange={hendleChange}
          />
           <Button onClick={handleSubmit} variant="contained">Contained</Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
