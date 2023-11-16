import axios from "axios";

// async 이 함수는 비정기적으로 동작을 하며,
export async function fetchCountries (){
    // 내부에 await 키워드를 사용할 수 있게됨
    // 비동기적 함수 앞에 붙여주면 비동기 함수가 종료되기까지 기다려줌
    try {
    const response = await axios.get('https://naras-api.vercel.app/all');
    return response.data;
    } catch (e) {
        // 에러 대응
        return [];
    }
}

export async function fetchSearchResults(q){
    try {
    const response = await axios.get(`https://naras-api.vercel.app/search?q=${q}`);

    return response.data;
    } catch (e) {
        return [];
    }
}

export async function fetchCountry(code){
    try{
        const response = await axios.get(`https://naras-api.vercel.app/code/${code}`)
        return response.data;
    }catch (e) {
        // 배열 반환이 아닌 하나의 국가 객체를 가져오는 것! 그래서 null 
        return null;
    }
}

