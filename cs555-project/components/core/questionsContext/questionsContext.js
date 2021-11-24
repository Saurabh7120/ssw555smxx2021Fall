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
    },[data]);

    const selectCategory = cat => {
        let primary = Object.keys(data[cat]);
        setSelectedCategory(cat);
        console.log(primary);
        setPrimaryQuestions(primary);
    }

    const selectPrimary = primary => {
        setSelectedPrimary(primary);
        let sub = data[selectedCategory][primary].questions;
        setSubQuestions(sub);
    }

    const setFinalScore = s => {
        setScore(s);
    }

    return (
        <QuestionsContext.Provider value={{categories,primaryQuestions,subQuestions,score,selectCategory,selectPrimary,setFinalScore,selectedCategory,selectedPrimary}}>
            {children}
        </QuestionsContext.Provider>
    );
}

export default QuestionsContextProvider;