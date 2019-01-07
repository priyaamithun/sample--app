import React from 'react';
import * as Autosuggest from 'react-autosuggest';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {
    suggestlist: any;
    onSelected: ((v: any) => void);
}

@observer
export class AutoComp extends React.Component<Props, {}>{
    @observable public value: string = '';
    

    render() {
        let inputProps = {
            value: this.value,
            onChange: this.onChange
        };
        return (
            <Autosuggest
                suggestions={this.props.suggestlist}
                onSuggestionSelected={this.props.onSelected}
                onSuggestionsFetchRequested={this.getSuggestions}
                renderSuggestion={this.renderSuggestion}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                inputProps={inputProps}
            />
        );
    }

    getSuggestionValue = (sug: any) => {
        return sug.value;
    }

    onSuggestionsClearRequested = () => {

    }

    onChange = (e: any, value: any) => {
        this.value = value.newValue;

        e.preventDefault();
        e.stopPropagation();
    }

    getSuggestions = (inp: any) => {
        let res = this.props.suggestlist.filter(f => f.name.toLowerCase().includes(inp.value.toLowerCase()));
        return res;
    }

    renderSuggestion = (suggestion: any) => {
        return (<div className="autoSuggest">{suggestion.name}</div>);
    }
}

export default AutoComp;