import { useState , useEffect } from 'react'; 

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutCard from './contact';


export default function ContactList() {
  const [firstName,setFirstName ]= useState("");
  const [lastName,setLastName]= useState("");
  const [mail,setMail ]= useState("");
  const [ adress,setAdress ]= useState("");
  const [ number,setNumber ]= useState("");
  const [userList , setUserList]= useState(JSON.parse(localStorage.getItem("contactlist")||[]));

 /*********** use effect  */

  useEffect(()=>{

localStorage.setItem("contactList", JSON.stringify(userList))


  },[userList]);
  function addUser(){
    let  user = {first:firstName , last :lastName , email :mail , localtion : adress , phone : number };
    setUserList([...userList ,user])
    console.log(userList); 
    setFirstName ('') ; 
    setLastName ('') ; 
    setMail ('') ; 
    setAdress ('') ; 
    setNumber ('') ;  
  }




  return (
    <div className='cart'>
      <div container spacing={5} >
        <div >

        <h4>Name :</h4>
      <TextField id="name" onChange={(e)=> {setFirstName(e.target.value)}} value={firstName} label="Full Name " variant="standard" />
      </div>
      <div>
        <h4>Last name :</h4>
      <TextField id="Last" onChange={(e)=>{setLastName(e.target.value)}}  value ={lastName}label="Last Name  " variant="standard" />
      </div>
      <div>
        <h4>Mail :</h4>
      <TextField id="mail"  onChange={(e)=>{setMail(e.target.value)}} value ={mail} type ="mail" label="Your Mail " variant="standard" />
      </div>
      <div>
        <h4> Adresse :</h4>
      <TextField id="adresse"  onChange={(e)=>{setAdress(e.target.value)}}  value ={adress} label="Your  adress " variant="standard" />
      </div>
      <div>
        <h4>Number:</h4>
      <TextField id="number"   onChange={(e)=>{setNumber(e.target.value)}} value={number} label="Number " variant="standard" />
      </div>
      
      <Button  size ='medium'   type ='submit' onClick={()=>addUser()} color="secondary" variant='outlined'>Contained</Button>
      </div>
      {userList.map((el,index)=>{
        return(
          <OutCard key={index} name ={el.firstName} last={el.lastName} mail={el.mail}  adress ={el.adress} phone ={el.number}/>
        )


      })}
    

    </div>
  )
}
