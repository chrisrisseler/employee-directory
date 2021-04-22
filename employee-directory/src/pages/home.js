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
        error: "",
        order: "descending"
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

    handleSortChange = header => {
        // console.log("handlesortchange")
        if (this.state.order === "descending") {
            this.setState({ order: "ascending" })

        }
        else {
            this.setState({ order: "descending" })
        }
        const sortedResults = this.state.results.sort((a, b) => {
            // console.log(header)
            if (this.state.order === "ascending") {
                if (header === "name") {
                    if (a.name.first < b.name.first) {
                        return -1;
                    }
                    if (a.name.first > b.name.first) {
                        return 1;
                    }
                    return 0;
                };
                if (header === "address") {
                    if (a.location.street.number < b.location.street.number) {
                        return -1;
                    }
                    if (a.location.street.number > b.location.street.number) {
                        return 1;
                    }
                    return 0;
                };
                if (header === "username") {
                    if (a.login.username < b.login.username) {
                        return -1;
                    }
                    if (a.login.username > b.login.username) {
                        return 1;
                    }
                    return 0;
                };
            }
            else {
                if (header === "name") {
                    if (b.name.first < a.name.first) {
                        return -1;
                    }
                    if (b.name.first > a.name.first) {
                        return 1;
                    }
                    return 0;
                };
                if (header === "address") {
                    if (b.location.street.number < a.location.street.number) {
                        return -1;
                    }
                    if (b.location.street.number > a.location.street.number) {
                        return 1;
                    }
                    return 0;
                };
                if (header === "username") {
                    if (b.login.username < a.login.username) {
                        return -1;
                    }
                    if (b.login.username > a.login.username) {
                        return 1;
                    }
                    return 0;
                };
            }

        })
        this.setState({ results: sortedResults })

    }

    headerValues = [{
        name: "Name"
    },
    {
        name: "Address"
    },
    {
        name: "Username"
    }]

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

                    <SearchResults results={this.state.results} handleSortChange={this.handleSortChange} tableHeaders={this.headerValues} />
                </Container>
            </div>
        );
    }
}

export default Search;
