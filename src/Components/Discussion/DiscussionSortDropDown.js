import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import store from '../../Store/DataStore';
import { sortIcon } from '../../Constants/DiscussionConstant';

class SortDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        };
    }

    onClickSortBy = () => {
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    }

    onClickDropDownItem = (itemClicked) => {
        if (store.get('discussionSortedBy') !== itemClicked) {
            store.set('discussionSortedBy', itemClicked);
        }
    }

    getFliterDropDown = () => {
        return (
            <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.onClickSortBy} onClick={(e) => e.preventDefault()} className="dropDownContainer">
                <DropdownToggle color={false} className="discussionSortByButton" onClick={(e) => e.preventDefault()}>{sortIcon}</DropdownToggle>
                <DropdownMenu className="dropDownMenu">
                    <DropdownItem className="dropDownItem" onClick={() => this.onClickDropDownItem("vote")}>Upvote</DropdownItem>
                    <DropdownItem className="dropDownItem" onClick={() => this.onClickDropDownItem("date_of_created")}>Recent</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

    render() {
        return <>{this.getFliterDropDown()}</>;
    }
}
export default SortDropDown;