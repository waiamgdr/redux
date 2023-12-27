import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, check, updatetodo, filtre } from "./redux/slice";
import { useEffect, useState } from "react";
import Map from "./Map";

function App() {
  const dispatch = useDispatch();
  const [disc, setDesc] = useState();
  const [modifier, setModifier] = useState();
  const [done, setDone] = useState("all");
  const todos = useSelector((state) => state.todoslice);
 
  
  return (




    <div className="App">
      <header className="App-header">


      <div className="css">

        <input type="text" className="input-group__input"   onChange={(e) => setDesc(e.target.value)} />

        <button  className="button-arounder" onClick={() => dispatch(add(disc))}>add new</button>
        <button className="button-arounder" onClick={() => setDone("all")}>all</button>
        <button className="button-arounder" onClick={() => setDone("true")}>Is Done</button>
        <button className="button-arounder" onClick={() => setDone("false")}>Not Done</button>
        {/* {console.log( (todos)?todos.filter((pt)=>(pt.isdone==true))  :null)} */}
        </div>
        <div className="css">
        {done == "true"
          ? todos
              .filter((el) => el.isdone == true)
              .map((el) => (
                <div className="css">
                  {el.isdone ? (
                    <div style={{ color:"green"  }}>
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>) : (
                      <div style={{ color:"red" }} >
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>)}

                  <input
                    type="checkbox"
                    onChange={() => dispatch(check(el.id))}
                  ></input>
                  <input
                    type="text"
                    onChange={(f) => setModifier(f.target.value)}
                  />

                  <button className="button-arounder"
                    onClick={() =>
                      dispatch(updatetodo({ disc: modifier, id: el.id }))
                    }
                  >
                    update
                  </button>
                </div>
              ))
          : done == "false"
          ? todos.filter((el) => el.isdone == false).map((el) => (
                <div >
                  {el.isdone ? (
                    <div style={{ color:"green" }}>
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>) : (
                      <div style={{ color:"red" }} >
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>)}
                  

                  <input
                    type="checkbox"
                    onChange={() => dispatch(check(el.id))}
                  ></input>
                  <input
                    type="text"
                    onChange={(f) => setModifier(f.target.value)}
                  />

                  <button className="button-arounder" 
                    onClick={() =>
                      dispatch(updatetodo({ disc: modifier, id: el.id }))
                    }
                  >
                    update
                  </button>
                </div>
              ))
          : todos.map((el) => (
              <div>
                {el.isdone ? (
                    <div style={{ color:"green" }}>
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>) : (
                      <div style={{color:"red" }} >
                    <p>{el.disc}</p>
                    <h3>{el.id}</h3>
                    </div>)}

                <input
                  type="checkbox"
                  onChange={() => dispatch(check(el.id))}
                ></input>
                <input
                  type="text"
                  onChange={(f) => setModifier(f.target.value)}
                />

                <button className="button-arounder"
                  onClick={() =>
                    dispatch(updatetodo({ disc: modifier, id: el.id }))
                  }
                >
                  update
                </button>

              </div>
            ))}
            </div>
            
      </header>
    </div>
  );
}

export default App;
