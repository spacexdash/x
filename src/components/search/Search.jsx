import React, { useState } from 'react';
import { searchLaunches } from '../../service/SpaceXApi';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Card, Form } from 'react-bootstrap';
import {
    SEARCH_LAUNCH
} from '../launches/LaunchConsts';
import { useHistory } from 'react-router-dom';
const filterBy = () => true;

const search = (fn, setIsLoading, setOptions) => {
    return fn().then((d) => {
        setOptions(d.docs);
        setIsLoading(false);
    }).catch(() => setIsLoading(false))
}

const SEARCH_CONTEXTS = [ SEARCH_LAUNCH ];

const SEARCH_PLACEHOLDERS = {
    [SEARCH_LAUNCH]: 'Search for a launch e.g. Crew',
};
const searchFn = (term, searchContext, setIsLoading, setOptions) => {
    switch(searchContext) {
        case SEARCH_LAUNCH:
            return search(() => searchLaunches(term),  setIsLoading, setOptions);
        default:
            console.log('Not implemented ', searchContext)
            return null;
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
                minLength={3}
                labelKey={"name"}
                options={options}
                placeholder={SEARCH_PLACEHOLDERS[searchContext]}
                isLoading={isLoading}
                renderMenuItemChildren={(option, props) => (<span>{option.name}</span>)}
                onChange={(e) => {
                    if (e.length > 0) {
                        console.log('wahahahahah');
                        history.push(`/launch/${e[0].id}`, { launch: e[0] });
                    }
                }}
            />
            {/* <div className='row pt-2'>
                <div className='col'>
                Search By: {SEARCH_CONTEXTS.map((ctx) => <Form.Check inline
                    label={ctx}
                    value={ctx}
                    key={ctx}
                    type='radio'
                    onChange={(e) => setSearchContext(e.target.value)}
                    checked={searchContext === ctx} />)}
                </div>
            </div> */}
        </Card.Body>
    </Card>
};