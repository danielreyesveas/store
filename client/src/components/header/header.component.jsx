import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as SearchLogo } from '../../assets/search.svg';

import { HeaderMain, HeaderContainer, Container, Row, Col, HeaderContent, LogoContainer, Nav, HeaderExtra, ShoppingCart, Search, SearchIcon, Hamburger, OptionSub } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderMain>
		<HeaderContainer>
			<Container>
				<Row>
					<Col>
						<HeaderContent>
                            <LogoContainer to='/'><Logo /></LogoContainer>
							<Nav>
								<ul>
									<li><Link to='/'>Home</Link></li>
                                    <OptionSub>
                                        <Link to='/shop'>Shop</Link>
                                        <ul>
                                            <li><a href="/">Category</a></li>
                                            <li><a href="/">Category</a></li>
                                            <li><a href="/">Category</a></li>
                                            <li><a href="/">Category</a></li>
                                            <li><a href="/">Category</a></li>
                                        </ul>
                                    </OptionSub>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </Nav>
                            <HeaderExtra>
								<ShoppingCart>
                                    <CartIcon />
								</ShoppingCart>
								<Search>
									<SearchIcon>
                                        <SearchLogo />
									</SearchIcon>
								</Search>
								<Hamburger>
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </Hamburger>
							</HeaderExtra>
                        </HeaderContent>
                        {
                            hidden ? null : <CartDropdown />
                        }   
                    </Col>
                </Row>
            </Container>
        </HeaderContainer>
    </HeaderMain>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);