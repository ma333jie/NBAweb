import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from '../nba-client';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

class SearchBar extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) =>{
        const players = nba.searchPlayers(value);

        this.setState ({
            dataSource: players.map(player => ({
                fullName: player.fullName,
                playerId: player.playerId,
            }))
        })
        console.log(players);
    }
    render() {
        const{ dataSource }  = this.state;
        return (

            <AutoComplete
                className="search-bar"
                placeholder="Search NBA Player"
                size="large"
                optionLabelProp="value"
                onSearch={this.handleSearch}
            >

                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>


        );
    }
}

export default SearchBar;