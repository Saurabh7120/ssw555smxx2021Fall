import React,{createContext,useState,useEffect} from 'react';
import data from "../../../data/data";


export const QuestionsContext = createContext()

function QuestionsContextProvider({children}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState(null);
    const [selectedPrimary, setSelectedPrimary] = useState(null);
    const [primaryQuestions, setPrimaryQuestions] = useState([]);
    const [subQuestions, setSubQuestions] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let cat = Object.keys(data);
        setCategories(cat);

        let category = localStorage.getItem("category");
        let primary = localStorage.getItem("primary");
        let s = localStorage.getItem("score");
   
            setFinalScore(s);
            selectCategory(category);
      
            selectPrimary(primary);     
   
    },[]);

    const selectCategory = cat => {
        let primary = Object.keys(data[cat]);
        setSelectedCategory(cat);
        localStorage.setItem('category',cat);
        console.log(primary);
        setPrimaryQuestions(primary);
    }

    const selectPrimary = primary => {
        let category;
        if(!selectedCategory) {
            category = localStorage.getItem("category");
            setSelectedCategory(category);
        }else{
            category = selectedCategory;
        }
        setSelectedPrimary(primary);
        localStorage.setItem('primary',primary);
        
        let sub = data[category][primary].questions;
        setSubQuestions(sub);
    }

    const setFinalScore = s => {
        setScore(s);
        localStorage.setItem('score',s);
    }

    const finish = () => {
        localStorage.removeItem('category');
        localStorage.removeItem('score');
        localStorage.removeItem('primary');
    }

    return (
        <QuestionsContext.Provider value={{categories,primaryQuestions,subQuestions,score,selectCategory,selectPrimary,setFinalScore,selectedCategory,selectedPrimary,finish}}>
            {children}
        </QuestionsContext.Provider>
    );
}

export default QuestionsContextProvider;