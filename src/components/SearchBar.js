import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from '../nba-client';
import { PROFILE_PIC_URL_PREFIX } from '../constants';
const { Option } = AutoComplete;

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
        //console.log(players);
    }
    onSelect = (value) =>{
        this.props.handleSelectPlayer(value);
    }
    render() {
        const{ dataSource }  = this.state;
        const options = dataSource.map(
            player =>(
             <Option key = {player.fullName}
                value = {player.fullName}
                     className="player-option">

                 <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                 <span className="player-option-label">{player.fullName}</span>


             </Option>
            ));
        return (

            <AutoComplete
                className="search-bar"
                placeholder="Search NBA Player"
                size="large"
                //match with option property key as 'value'
                optionLabelProp="value"

                onSearch={this.handleSearch}
                dataSource={options}
                onSelect = {this.onSelect}
            >

                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>


        );
    }
}

export default SearchBar;