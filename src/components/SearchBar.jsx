import { useEffect, useState } from 'react'
import style from './SearchBar.module.css'
import { useNavigate } from 'react-router-dom';
export default function SearchBar( {q} ) {

    const [search , SetSearch] = useState("");
    const nav = useNavigate();

    useEffect(()=>{
        SetSearch(q);
    }, [q])

    const onChangeSearch = (e) => {
        SetSearch(e.target.value);
    }
    const onClickSearch = () => {
        if(search !== ""){
            nav(`/search?q=${search}`);
        }
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onClickSearch();
        }
    }

    return (
        <div className={style.container}>
            <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder='검색어를 입력하세요...'/>
            <button onClick={onClickSearch}>검색</button>
        </div>
    )
}