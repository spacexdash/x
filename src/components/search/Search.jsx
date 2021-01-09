import React, { useState } from 'react';
import { searchCores, searchLaunches } from '../../service/SpaceXApi';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Card, Form } from 'react-bootstrap';
import {
    SEARCH_CORES,
    SEARCH_LAUNCH
} from '../launches/LaunchConsts';
import { useHistory } from 'react-router-dom';
const filterBy = () => true;

const search = (fn, setIsLoading, setOptions) => {
    return fn().then((d) => {
        setOptions(d);
        setIsLoading(false);
    }).catch(() => setIsLoading(false))
}

const SEARCH_CONTEXTS = [ SEARCH_LAUNCH, SEARCH_CORES ];

const SEARCH_PLACEHOLDERS = {
    [SEARCH_LAUNCH]: 'Search for a launch e.g. STP-2',
    [SEARCH_CORES]: 'Search for launches containing a core e.g. B1040',
};
const searchFn = (term, searchContext, setIsLoading, setOptions) => {
    switch(searchContext) {
        case SEARCH_LAUNCH:
            return search(() => searchLaunches(term)
                .then((d) => d.docs.map(r => ({ ...r, type: SEARCH_LAUNCH}))),  setIsLoading, setOptions);
        case SEARCH_CORES:
            return search(() => searchCores(term)
                .then((d => d.docs.map(r => ({ ...r, name: r.serial, type: SEARCH_CORES})))), setIsLoading, setOptions);
        default:
            console.log('Not implemented ', searchContext)
            return null;
    }
}

export const handleTransition = (history, item) => {
    switch(item.type) {
        case SEARCH_LAUNCH:
            history.push(`/x/launch/${item.id}`, { launch: item });
            break;
        case SEARCH_CORES:
            console.log(item);
            history.push(`/x/core/${item.id}/launches`, { core: item })
            return;
        default:
            return;
    }
}

export const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchContext, setSearchContext] = useState(SEARCH_LAUNCH);
    const history = useHistory();

    return <Card>
        <Card.Body>
            <AsyncTypeahead
                id='search'
                filterBy={filterBy}
                onSearch={(e) => searchFn(e, searchContext, setIsLoading, setOptions)}
                minLength={0}
                labelKey={"name"}
                options={options}
                placeholder={SEARCH_PLACEHOLDERS[searchContext]}
                isLoading={isLoading}
                renderMenuItemChildren={(option, props) => (<span>{option.name}</span>)}
                onChange={(e) => {
                    if (e.length > 0) {
                        const item = e[0];
                        handleTransition(history, item);
                    }
                }}
            />
            <div className='row pt-2'>
                <div className='col'>
                Search By: {SEARCH_CONTEXTS.map((ctx) => <Form.Check inline
                    label={ctx}
                    value={ctx}
                    key={ctx}
                    type='radio'
                    onChange={(e) => setSearchContext(e.target.value)}
                    checked={searchContext === ctx} />)}
                </div>
            </div>
        </Card.Body>
    </Card>
};