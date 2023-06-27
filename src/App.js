import React, { Component } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currentPageUrl: "https://pokeapi.co/api/v2/pokemon",
      nextPageUrl: "",
      prevPageUrl: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchPokemonData();
  }

  fetchPokemonData = () => {
    const { currentPageUrl } = this.state;
    this.setState({ loading: true });

    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const { next, previous, results } = res.data;
        this.setState({
          loading: false,
          nextPageUrl: next,
          prevPageUrl: previous,
          pokemon: results.map((p) => p.name),
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("Error:", error);
        }
      });

    this.cancelRequest = () => cancel();
  };

  gotoNextPage = () => {
    const { nextPageUrl } = this.state;
    this.setState({ currentPageUrl: nextPageUrl }, () => {
      this.fetchPokemonData();
    });
  };

  gotoPrevPage = () => {
    const { prevPageUrl } = this.state;
    this.setState({ currentPageUrl: prevPageUrl }, () => {
      this.fetchPokemonData();
    });
  };

  render() {
    const { pokemon, loading, nextPageUrl, prevPageUrl } = this.state;

    if (loading) return "Loading...";

    return (
      <>
        <Navbar
          gotoNextPage={nextPageUrl ? this.gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? this.gotoPrevPage : null}
        />
        <PokemonList pokemon={pokemon} />
      </>
    );
  }
}

export default App;
