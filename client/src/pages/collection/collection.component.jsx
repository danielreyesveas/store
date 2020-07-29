import React, { useEffect, useRef, useState }  from 'react';
import { connect } from 'react-redux';
import Isotope from 'isotope-layout'


import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import Carousel from '../../components/carousel/carousel.component';


import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer,

    Row,
    Col,
    SortingBar,
    Results,
    SortingContainer,
    ItemSorting
  } from './collection.styles';


const CollectionPage = ({ collection }) => {
console.log(collection)
    const { title, items } = collection;
    const isoRef = useRef()
     // store the isotope object in one state
    const [isotope, setIsotope] = useState(null);
    const [state, setState] = useState({ isotope: null })
    // store the filter keyword in another state
    const [filterKey, setFilterKey] = useState("*");
    const [sortKey, setSortKey] = useState("price");

    // initialize an Isotope object with configs
    useEffect(() => {
        setIsotope(
        new Isotope(isoRef.current, {
            itemSelector: ".product",
            layoutMode: 'fitRows',
            fitRows:
            {
                gutter: 30
            },
            getSortData:
            {
                price: '.price parseInt',
                name: '.name',
            },
        })
        );
    }, []);

    useEffect(
        () => {
          if (isotope) {
            filterKey === "*"
              ? isotope.arrange({ filter: `*` , sortBy: sortKey})
            : isotope.arrange({ filter: `.${filterKey}` , sortBy: sortKey});
          }
        },
        [isotope, filterKey, sortKey]
      );


      return (
        <>
            {/* <ul>
                <li onClick={() => setFilterKey("*")}>Show Both</li>
                <li onClick={() => setFilterKey("vege")}>Show Veges</li>
                <li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
            </ul> */}

            <CollectionPageContainer>
                <Carousel />
           
                <Row>
                    <Col>					

                        <CollectionTitle>{title}</CollectionTitle>

                        <SortingBar>
                            <Results>Showing <span>12</span> results</Results>
                            <SortingContainer>
                                <ItemSorting>
                                    <li>
                                        <span>Sort by</span>
                                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                        <ul>
                                            <li onClick={() => setSortKey("name")}><span>Nombre</span></li>
                                            <li onClick={() => setSortKey("price")}><span>Precio</span></li>
                                        </ul>
                                    </li>
                                </ItemSorting>
                            </SortingContainer>
                        </SortingBar>                        

                        <CollectionItemsContainer className="product_grid"  ref={isoRef}>
                            {items.map(item => (
                                <CollectionItem                         
                                    key={item.id} 
                                    item={item} 
                                />
                            ))}
                        </CollectionItemsContainer>

                    </Col>
                </Row>
            </CollectionPageContainer>
        </>
      
    );

    // return (
    //     <CollectionPageContainer>
    //         <CollectionTitle>{title}</CollectionTitle>
    //         <CollectionItemsContainer>
    //             {items.map(item => (
    //                 <CollectionItem 
    //                     key={item.id} 
    //                     item={item} 
    //                 />
    //             ))}
    //         </CollectionItemsContainer>
    //     </CollectionPageContainer>
    // );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(
    mapStateToProps
)(CollectionPage);