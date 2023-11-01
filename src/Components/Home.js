import { useEffect,useState } from "react";
import Cards from "./Cards";

const Dummy_Data = [
    {
        key:1,
        title:'First Title',
        body:'First Body',
        date:new Date()
    },
    {
        key:1,
        title:'Second Title',
        body:'Second Body',
        date:new Date()
    },
]

export default function Home(){
    const[data,setData]=useState(null);

    useEffect(( )=> { 
        setData(Dummy_Data);
    },[]);

    return(
        <>
        <img alt="background" style={{height:'100vh',width:'100vw'}} src='https://media.istockphoto.com/id/1449495507/photo/notebook-and-pen-on-wooden-cutting-board-with-christmas-decorations-christmas-to-do-list-or.webp?s=2048x2048&w=is&k=20&c=KvUjPd21TU2EQzoASvwY1OjAf0MYqwjXWZ-nT--jBiY='></img>
        <div className="container_fluid" style={{position:'absolute',top:'0',left:'0',height:'100vh',width:'100vw',background:'rgba(0,0,0,0.3)',backdropFilter:'blur(3px)'}} >
            <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
                <div className="col-md-4">
                    <h3 className="display-1">Manage Yourself & Set Goals</h3>
                    <button className="btn btn-primary btn-lg text-white fst-italic">Add Goals</button>
                </div>
                <div className="col-md-6">
                    {
                       data ?
                        <Cards data={data} setData={setData} />
                        :
                        <h3 className="display-2 fw-bold text-white">Start Creating Goals</h3>
                    }
                </div>
            </div>
        </div>
        </>
    );
}