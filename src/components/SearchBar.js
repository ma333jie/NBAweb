import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from '../nba-client';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

class SearchBar extends Component {



    render() {
        return (

            <AutoComplete
                className="search-bar"


                placeholder="Search NBA Player"
                size="large"
                optionLabelProp="value"
            >

                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>


        );
    }
}

export default SearchBar;