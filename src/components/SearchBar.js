import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";

function SearchBar({ className, styles, handleKeyPress, handleSearch }) {
    const stylesheet = styles();

    const [ term, setTerm ] = useState('');

    return (
        <div className={className}>
            <div id="search-bar">
                <input 
                    type="text"
                    placeholder="Insira o termo desejado para a pesquisa"
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                    onKeyPress={event => handleKeyPress(event, term, setTerm)} 
                />
                <IconButton 
                    className={stylesheet.button} 
                    onClick={() => handleSearch(term, setTerm)}
                >
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
}

const SearchHome = styled(SearchBar)`
    margin-top: 20px;
    width: 850px;

    #search-bar {
        width: calc(95% + 40px);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    #search-bar input {
        font-family: 'Sarala';
        width: 95%;
        height: 40px;
        border: none;
        padding-left: 10px;
    }

    @media (max-width: 850px) {
        & {
            width: 550px;
        }
    }
    
    @media (max-width: 580px) {
        & {
            width: 400px;
        }
    
        #search-bar input {
            padding-left: 5px;
        }
    }
    
    @media (max-width: 400px) {
        & {
            width: 300px;
        }
    }
`;

const SearchHeader = styled(SearchBar)`
    width: 550px;
    margin-right: 50px;

    #search-bar {
        width: calc(95% + 40px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    #search-bar input {
        font-family: 'Sarala';
        width: 95%;
        height: 40px;
        border: none;
        padding-left: 10px;
        background-color: #A4A4A4;
        border-radius: 10px 0 0 10px;
    }

    @media (max-width: 850px) {
        & {
            width: 450px;
        }
    }

    @media (max-width: 770px) {
        & {
            width: 300px;
        }

        #search-bar {
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 400px) {
        & {
            width: 300px;
            margin-right: 10px;
        }
    }

    @media (max-width: 400px) {
        & {
            width: 300px;
        }
    }
`;

export { SearchHome, SearchHeader };