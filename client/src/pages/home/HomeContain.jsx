import React, {useEffect} from 'react';
import {getAllKindOfRoom} from "../../actions/example";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HomeContain = ({getAllKindOfRoom, example: { room }}) => {
    useEffect(() => {
        getAllKindOfRoom();
    }, [getAllKindOfRoom]);
    return (
        <div>
            {
                room.map((val, index) => {
                        return val.name
                    }
                )}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        example: state.example,
    };
};
HomeContain.propTypes = {
    getAllKindOfRoom: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { getAllKindOfRoom })(HomeContain);
