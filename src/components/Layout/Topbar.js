import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import {
  Container,
  Form,
  Modal,
  ModalBody,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import images
import logodark from '../../assets/images/logo-dark.png';
import logolight from '../../assets/images/logo-light.png';
import shop1 from '../../assets/images/shop/product/s-1.jpg';
import shop2 from '../../assets/images/shop/product/s-2.jpg';
import shop3 from '../../assets/images/shop/product/s-3.jpg';

import NavbarButtons from '../Shared/NavbarButtons';
import appStore from '../../assets/images/app/app-store.png';
import playStore from '../../assets/images/app/play-store.png';

import corporate from '../../assets/images/demo/corporate.png';
import crypto from '../../assets/images/demo/crypto.png';
import shop from '../../assets/images/demo/shop.png';
import portfolio from '../../assets/images/demo/portfolio.png';
import helpCenter from '../../assets/images/demo/help-center.png';
import hosting from '../../assets/images/demo/hosting.png';
import job from '../../assets/images/demo/job.png';
import forums from '../../assets/images/demo/forums.png';
import blog from '../../assets/images/demo/blog.png';
import nft from '../../assets/images/demo/nft.png';
import RightSidebar from './RightSidebar';

// menu
// import { navLinks } from './menu';
// import { MenuItem } from './NavBarComponents';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      wishlistModal: false,
      dropdownIsOpen: false,
      open: false,
      position: 'right',
      dropdownOpen: false,
      landing: false,
      components: false,
      demo: false,
      doc: false,
      pages: false,
      company: false,
      account: false,
      email: false,
      blog: false,
      case: false,
      auth: false,
      login: false,
      signup: false,
      reset: false,
      utility: false,
      special: false,
      contact: false,
      multi: false,
      level2: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.toggleDropdown.bind(this);
    this.togglemodal.bind(this);
  }

  /**
   * Right sidebar drawer
   **/

  toggleRightDrawer = () => {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  };
  onDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  initMenu() {
    this.activateParentDropdown();
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  activateParentDropdown() {
    var menuItems = document.getElementsByClassName('sub-menu-item');

    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');

        const immediateParent = matchingMenuItem.closest('li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }
        const parent = immediateParent.closest('.parent-menu-item');

        if (parent) {
          parent.classList.add('active');

          var parentMenuitem = parent.querySelector('a');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = parent.closest('.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          parentOfParent = matchingMenuItem.closest('.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
      return false;
    }
    return false;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initMenu();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.tagline ? this.props.tagline : null}

        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              <Link className="logo" to="/">
                <span className="logo-light-mode">
                  <img src={logodark} className="l-dark" height="50" alt="" />
                  <img src={logolight} className="l-light" height="50" alt="" />
                </span>
              </Link>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? 'navbar-toggle open' : 'navbar-toggle'
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            {(() => {
              if (this.props.location.pathname === '/index-developer') {
                return <NavbarButtons />;
              } else {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                      <a className="btn" href="#">
                        <div
                          className="btn shadow-md text-white"
                          style={{ backgroundColor: '#9dce66' }}
                        >
                          (773) 870-1718
                        </div>
                      </a>
                    </li>
                  </ul>
                );
              }
            })()}

            <div
              id="navigation"
              style={{
                display: this.state.isOpen ? 'block' : 'none',
              }}
            >
              <ul className="navigation-menu nav-light" id="top-menu">
                <li>
                  <a href="#home" className="sub-menu-item">
                    Home
                  </a>
                </li>
                <li className="has-submenu parent-parent-menu-item">
                  <a href="#about-us">About Us</a>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  <a href="#projects">Projects</a>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>

              {/* <ul className="navigation-menu" id="top-menu">
                {(navLinks || []).map((item, key) => {
                  const hasChildren = item.child && item.child.length;
                  return (
                    <MenuItem
                      item={item}
                      key={key}
                      itemClassName={hasChildren ? 'parent-parent-menu-item' : ''}
                      arrowClassName="menu-arrow"
                    />
                  );
                })}
              </ul> */}
              {/* menu end */}
              {/* <div className="buy-menu-btn d-none">
                <Link
                  to="//1.envato.market/landrickreactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Buy Now
                </Link>
              </div> */}
            </div>
          </Container>
        </header>

        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
