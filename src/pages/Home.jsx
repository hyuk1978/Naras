import { fetchCountries } from "../Api";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import style from "./Home.module.css"

export default function Home () {
    const [countries, setCountries] = useState([]);

    const setInitData = async()=>{
        // await으로 불러줘야만 response.data를 그대로 받아올 수 있음
        const data = await fetchCountries();
        setCountries(data);
    }

    // 마운트될때 호출!
    useEffect(() => {
        setInitData()
    }, []);

    return (
        <div className={style.container}>
            <SearchBar/>
            <CountryList countries={countries}/>
        </div>
    )
}