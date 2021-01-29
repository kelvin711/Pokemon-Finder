import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {GetPokemonList} from "../actions/pokemonActions";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import pokeBall from "../assets/img/pokeballicon.png";



const PokemonList = (props) => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);

    useEffect(() => {
        FetchData(1)
    }, []);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {

        if(pokemonList.loading) {
            return <p>Loading . . .</p>
        }

        if (!_.isEmpty(pokemonList.data)) {
            return(
                <div className="list-wrapper">
                {pokemonList.data.map((el, i) => {
                    let capitalName = el.name.charAt(0).toUpperCase() + el.name.slice(1)
                    return(                   
                    <div className={"pokemon-item"}>
                        <p key={i}>{capitalName}</p>
                        <Link  to={`/pokemon/${el.name}`}>View</Link>
                    </div>
                    )
                })}
                </div>
            )
        }

    
        if(pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>Unable to get data</p>

    }

    return (
        <div className="row">
            <div className={"search-wrapper"}>
                <img className={"pokeball-icon"} src={pokeBall} alt="pokeBall icon"/>       
                <input
                className={"searchTerm"}
                type="text" 
                name="search" 
                placeholder="Pokemon name!" 
                onChange={ event => setSearch(event.target.value)}/>
                <button 
                className={"searchButton"} 
                onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
                {ShowData()}
                {!_.isEmpty(pokemonList.data) && (
                    <ReactPaginate
                        pageCount={Math.ceil(pokemonList.count/15)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={(data) => FetchData(data.selected + 1)}
                        containerClassName={"pagination"}
                    />
                )}
            </div>
    );
};


export default PokemonList;