import { Component } from "react";
import "./index.css";
import GoogleSearchList from "./search";

const searchResultsList = [
    {
        id: 1,
        result: "Price of Ethereum",
    },
    {
        id: 2,
        result: "Oculus Quest 2 specs",
    },
    {
        id: 3,
        result: "Tesla Share price",
    },
    {
        id: 4,
        result: "Price of Ethereum today",
    },
    {
        id: 5,
        result: "Latest trends in AI",
    },
    {
        id: 6,
        result: "Latest trends in ML",
    },
]

class GoogleSearch extends Component {

    state = { searchInput: "" }
    
    searchInputValue = (event) => {
        const inputValue = event.target.value

        this.setState({ searchInput: inputValue });

    }

    buttonClickValue = (result) => {
        this.setState({ searchInput: result });
    }

    render() {

        const { searchInput } = this.state;
        const filteredList = searchResultsList.filter(eachItem => eachItem.result.toLowerCase().includes(searchInput.toLowerCase())); 

        return (
            <div className="bg-container-google">
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg"
                    alt="googleImage" className="google-image" /> 
                <div className="google-search-card-main shadow">
                    <input type="search" placeholder="Search Google" className="google-search-input"
                    onChange={this.searchInputValue} value={searchInput}/>
                    <ul className="google-search-results-container">
                        {filteredList.map(eachResult => (
                            <GoogleSearchList eachResult={eachResult} key={eachResult.id} buttonClickValue={this.buttonClickValue} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}


export default GoogleSearch;

