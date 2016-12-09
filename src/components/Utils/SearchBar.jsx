import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.filtered = this.filtered.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    filtered(name) {

        function contains(value) {
            // OMG FIX THIS!!!!
            var bigTempHack = value.name != null ? value.name : value.Name;
            return bigTempHack.toLowerCase().includes(name.toLowerCase());
        }

        var filteredList = this.props.searchables.filter(contains);

        this.props.callback(filteredList);
    };

    handleNameChange(event) {
        this.filtered(event.target.value);
    };

    render() {
        return (
            <div>
              <label>Search by name: </label>
              <input type="text" onChange={ this.handleNameChange } />
            </div>
            );
    }
}

SearchBar.propType = {
    searchables: React.PropTypes.arrayOf(React.PropTypes.shape(
        {
            Name: React.PropTypes.string.isRequired
        }
    )).isRequired
};

export default SearchBar