import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../actions';

import HelpfulLinkCard from '../../components/HelpfulLinkCard/HelpfulLinkCard';



const HelpfulLink = (props) => {
    const { newsHeadlines, isLoading, fetchNewsHeadlines } = props;

    useEffect(() => {
        fetchNewsHeadlines()
    }, [fetchNewsHeadlines])

    return (
            <HelpfulLinkCard newsItems={newsHeadlines}
                isLoading={isLoading} />
    )
}
const mapStateToProps = state => {
    return {
        newsHeadlines: state.helpfulLink.newsHeadlines,
        isLoading: state.helpfulLink.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return { fetchNewsHeadlines: () => dispatch(actions.fetchNewsHeadlines()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(HelpfulLink);