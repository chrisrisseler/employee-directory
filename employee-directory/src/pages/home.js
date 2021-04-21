import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
    state = {
        search: "",
        people: [{}],
        results: [{}],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getRandomPeople()
            .then(res => {
                console.log(res)
                this.setState({
                    people: res.data.results,
                    results: res.data.results
                })

            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const filter = event.target.value
        // console.log(filter)
        const filterList = this.state.people.filter(person => {
            // console.log(person)
            let values = Object.values(JSON.stringify(person)).join("").toLowerCase()
            // console.log(values)
            return values.indexOf(filter.toLowerCase()) !== -1
        })
        // this.setState({ search: filter });
        this.setState({ results: filterList })
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getDogsOfBreed(this.state.search)
    //         .then(res => {
    //             if (res.data.status === "error") {
    //                 throw new Error(res.data.message);
    //             }
    //             this.setState({ results: res.data.message, error: "" });
    //         })
    //         .catch(err => this.setState({ error: err.message }));
    // };

    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Employee Database</h1>
                    <Alert
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
                        {this.state.error}
                    </Alert>
                    <SearchForm
                        // handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />

                    <SearchResults results={this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Search;
