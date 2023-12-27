import { createSlice } from "@reduxjs/toolkit";
import { v4 as id} from 'uuid';

const todoslice=createSlice({
name:"todo",
initialState:[{id:id(),disc:"A daily productivity to-do list is a focused and time-bound compilation of tasks that need to be accomplished within a single day. It typically includes essential work assignments, personal errands, and any other activities that contribute to a productive and fulfilling day. ", isdone:false},
{id:id(),disc:"A project milestone checklist is a strategic list outlining key tasks and goals required to reach specific project milestones. It serves as a roadmap for project management, breaking down complex projects into manageable steps. Each task is associated with a project timeline, ensuring that the team stays on track and meets critical deadlines. ", isdone:false }],
reducers:{
    add:(state,action)=>
       [...state,{id:id(),disc:action.payload, isdone:false}],
    check:(state,action)=>state.map(el=>(el.id===action.payload)? {...el,isdone:!el.isdone}:el),
    filtre:(state,action)=>state.filter(pt=>pt.isdone===true ),
        
    
    updatetodo:(state,action)=>state.map(a=>(a.id===action.payload.id)? {...a, id:a.id ,disc:action.payload.disc ,isdone:a.isdone}:a ),

}});
export default todoslice.reducer;
export  const  {add,check,updatetodo, filtre}=todoslice.actions