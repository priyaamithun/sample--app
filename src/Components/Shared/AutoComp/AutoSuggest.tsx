import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';

const languages = [
    {
        name : 'C',
        year : 1972
    },
    {
        name:'Elm',
        year : 2012
    },
];


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
    };


const getSuggestionValue = suggestion => suggestion.name;


const renderSuggestion = suggestion =>(
    <div>{suggestion.name}</div>
);


class AutoSuggest extends React.Component{
    constructor (){
        super();

this.state ={
    value : '',
    suggestion : []
};

    }

    onChange = (event, {newValue}) =>{
        this.setState({
            value:newValue
        });
    };

onSuggestionsFetchRequested = ({value}) => {
    this.setState({
        suggestion : getSuggestions(value)
    });
};

onSuggestionsClearRequested = () => {
this.setState({
    suggestion : []
});
};

render(){
    const {value, suggestion } = this.state;

const inputProps = {
    placeholder : 'Type a langauage',
    value,
    onChange : this.onChange
};

return (
<Autosuggest suggestion = {suggestion}
onSuggestionsFetchRequested = {this.onSuggestionsClearRequested}
onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
getSuggestionValue = {getSuggestionValue}
renderSuggestion = {renderSuggestion}
inputProps = {inputProps}
/>
);







}
















    }

export default AutoSuggest;