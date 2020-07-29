import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync  } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import IconBoxes from '../../components/icon-boxes/icon-boxes.component';
import Newsletter from '../../components/newsletter/newsletter.component';
import Footer from '../../components/footer/footer.component';
import { addCollectionAndDocuments } from '../../firebase/firebase.utils';
import { DATA } from '../../redux/shop/shop.data'
import { MainContainer, Container } from './shop.styles';

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {

    useEffect(() => {
        fetchCollectionsStartAsync();
        // addCollectionAndDocuments('collections', DATA)
    }, [fetchCollectionsStartAsync]);


    return (
        <MainContainer>
            <Container>                            

                <Route 
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />

                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />                

                <IconBoxes />
                
                <Newsletter />
                
                <Footer />

            </Container>
        </MainContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);