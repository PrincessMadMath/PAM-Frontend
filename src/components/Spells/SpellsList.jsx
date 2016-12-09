import React, { Component } from 'react';
import SpellInfo from './SpellInfo'

import LazyLoad, { forceCheck } from 'react-lazyload';



class SpellsList extends Component {

    componentDidUpdate() {
        forceCheck();
    }

    render() {

        return (
            <div>
              { this.props.spellsToRender
                    .map(function(value) {
                        return (
                            <LazyLoad key={ value.Name } height={ 200 } offset={ 500 }>
                              <SpellInfo spellToRender={ value }></SpellInfo>
                            </LazyLoad>
                            );
                    }) }
            </div>
            );
    }
}

SpellsList.propType = {
    spellsToRender: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default SpellsList;