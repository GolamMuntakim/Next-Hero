"use client"
import { useEffect, useState } from "react";
const Meals = () => {
    const [search, setSearch] = useState("beef")
    const [error,setError] = useState("")
    const [meals, setMeals] = useState([])
    const loadData = async()=>{
       try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        console.log(data.meals)
        setMeals(data.meals)
        setError("")
       }catch(error){
        setError("No Data Found")
       }
    }
    const handler = (e) =>{
        // console.log(e.target.value)
        setSearch(e.target.value)
    }
    useEffect(()=>{
        loadData()
    },[search])
    
    return (
        <div>
              <div className="mt-12">
                <input onChange={handler} className="h-10 rounded-md p-2 text-black outline-none border-transparent" type="text" placeholder="search meals..."/>
                <button onClick={()=>loadData()} className="bg-cyan-300 p-2 rounded-md text-black m-2">Search</button>
                <div className="mt-12 grid grid-cols-3 gap-12">
                    {
                        meals?.length > 0 && !error && meals?.map((meal)=>(
                            <div key={meal?.idMeal} className="border-2 p-4">
                                <h6>{meal?.strMeal}</h6>
                                <h6>{meal?.strInstructions}</h6>
                               <p> <img src={meal.strMealThumb} alt="no pic" /></p>
                            </div>
                        ))}
                    {
                        error && <h6>No Data Found....</h6>
                    }
                </div>
            </div>
        </div>
    );
};

export default Meals;