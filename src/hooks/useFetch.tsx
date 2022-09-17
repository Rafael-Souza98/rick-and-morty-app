import { useEffect, useState } from "react"
import { ImageProps } from "react-native";
import { api }  from '../services/ApiConfig'

type DataAPI = {
    info:{
        counte: number;
        page: number;
        next: string;
        prev: null;
    }
    results: DataChar[]
};

type DataChar = {
    id: number;
    name: string;
    image: ImageProps["source"]
    status: string;
    species: string;

};

type DataEpisodes={
    id: number;
    name: string;
    air_date: string;
    episode: string;

}

export const useFetch = () =>{

    const [character , setCharacter] = useState<DataChar[]>();
    const [episodes, setEpisodes] = useState<DataEpisodes[]>();

    useEffect(() => {
        api.get('/character')
        .then(res => {
           setCharacter(res.data.results)
        })
    },[])

    useEffect(() => {
        api.get('/episode')
        .then(res =>{
            setEpisodes(res.data.results)
        })
    },[]);

    return { character, episodes }
}