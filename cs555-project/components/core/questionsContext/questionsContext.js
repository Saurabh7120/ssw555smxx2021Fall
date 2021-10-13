import React,{createContext,useState,useEffect} from 'react';
import data from "../../../data/data";


export const QuestionsContext = createContext({
    categories:[],
    primaryQuestions:[],
    subQuestions:[],
    selectCategory: cat => {},
    selectPrimary: primary => {},
})

function QuestionsContextProvider({children}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState(null);
    const [primaryQuestions, setPrimaryQuestions] = useState([]);
    const [subQuestions, setSubQuestions] = useState([]);

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
        let sub = data[selectedCategory][primary].questions;
        setSubQuestions(sub);
    }

    return (
        <QuestionsContext.Provider value={{categories,primaryQuestions,subQuestions,selectCategory,selectPrimary}}>
            {children}
        </QuestionsContext.Provider>
    );
}

export default QuestionsContextProvider;