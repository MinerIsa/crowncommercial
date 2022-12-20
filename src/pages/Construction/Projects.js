import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Fade in effect
import FadeIn from 'react-fade-in';

//Import Images
import work1 from '../../assets/images/construction/o1.jpeg';
import work11 from '../../assets/images/construction/o11.jpeg';
import work2 from '../../assets/images/construction/b1.jpg';
import work22 from '../../assets/images/construction/b11.jpg';
import work3 from '../../assets/images/construction/r1.jpg';
import work33 from '../../assets/images/construction/r11.jpg';
import work4 from '../../assets/images/construction/b2.jpg';
import work5 from '../../assets/images/construction/r2.jpg';
import work6 from '../../assets/images/construction/o2.jpg';
import work7 from '../../assets/images/construction/offices-led.jpeg';
import work8 from '../../assets/images/construction/multifamily-residential.jpeg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: 'Landrick', link: '/' },
        { id: 2, name: 'Pages', link: '#' },
        { id: 3, name: 'Work', link: '#' },
        { id: 4, name: 'Classic' },
      ],
      works: [
        {
          image: work1,
          image2: work11,
          title: 'Before',
          title1: 'Auto Dealership',
          title2: 'After',
          desc: 'Enhance the look of your dealership while saving money. Let your automobiles shine, and eliminate the need to change bulbs and ballasts. The rebate programs in place make now the time to install LED lights.',
          subtitle: 'Dealerships',
          category: 'Parking Lots',
        },
        {
          image: work2,
          image2: work22,
          title: 'Before',
          title1: 'Centech Plastics , Elk Grove , IL',
          title2: 'After',
          desc: 'Installed LED for Chicago warehouse.Lowered annual energy usage. Lowered annual electric costs. Improve occupant productivity and safety.',
          subtitle: 'Warehouses',
          category: 'Warehouses',
        },
        {
          image: work3,
          image2: work33,
          title: 'Before',
          title1: 'Willow Hill Executive Center, Northfield IL',
          title2: 'After',
          desc: 'Installed LED area lights, garage lights, flood lights. Lowered annual electric costs by $11,824.00',
          subtitle: 'Garages',
          category: 'Garages',
        },
        {
          image: work4,
          title: 'Yellow bg with Books',
          title1: 'Mobil Gas Station, Chicago, IL',
          desc: 'Installed LED canopy, soffit, pole, wallpack and cooler lighting. Lowered annual energy usage from 194,000 kWh/yr to 108,000 kWh/yr. Lowered annual electric costs by $7,244/yr',
          subtitle: 'Company V-card',
          category: 'Gas Stations',
        },
        {
          image: work5,
          title: 'Roosevelt Plaza – Next Realty, Lombard IL',
          title1: 'Roosevelt Plaza – Next Realty, Lombard IL',
          desc: 'Crown Commercial Lighting Inc. has installed hundreds of LED pole, area and security lighting in hundreds of parking lots. From condo buildings to strip malls to shopping centers, contact us today to schedule a free assessment of your property.',
          subtitle: 'V-card',
          category: 'Parking Lots',
        },
        {
          image: work6,
          title: 'Mockup box with paints',
          title1: 'Warehouse',
          desc: 'Improve occupant productivity and safety with LED Lights in your Warehouse.',
          subtitle: 'Photography',
          category: 'Warehouses',
        },
        {
          image: work7,
          title: 'Mockup box with paints',
          title1: 'Office',
          desc: 'Crown has retrofitted hundreds of offices from old florescent lighting to LED.',
          subtitle: 'Photography',
          category: 'Offices',
        },
        // {
        //   image: work8,
        //   title: 'Mockup box with paints',
        //   title1: 'Multifamily Residential',
        //   desc: 'Crown has installed LED lighting in common areas of numerous multifamily apartment and condo buildings including parking garages, hallways, stairways, parking lots, elevators.',
        //   subtitle: 'Photography',
        //   category: 'Residential',
        // },
      ],
      displayCategory: 'All',
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var topnav = document.getElementById('topnav');
    if (top > 80 && topnav) {
      topnav.classList.add('nav-sticky');
    } else if (topnav) {
      topnav.classList.remove('nav-sticky');
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <Container className="mt-100 mt-60 pb-5" id="projects">
          <Row>
            <Col lg={4} md={6}>
              <div className="section-title sticky-bar position-sticky">
                <span className="badge rounded-pill bg-soft-primary">
                  Projects
                </span>
                <h4 className="title mt-3 mb-4">
                  Our latest projects <br />
                </h4>
                <div className="mt-4 d-none d-md-block">
                  <a href="#home" className="btn btn-soft-primary">
                    Book a Free Energy Assessment{' '}
                    <i>
                      <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                    </i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Row>
                <div className="col-12 filters-group-wrap">
                  <div className="filters-group">
                    <ul
                      className="container-filter list-inline mb-0 filter-options"
                      id="filter"
                    >
                      <li
                        onClick={() => this.setCategory('All')}
                        className={
                          this.state.displayCategory === 'All'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white '
                        }
                      >
                        All
                      </li>{' '}
                      <li
                        onClick={() => this.setCategory('Parking Lots')}
                        className={
                          this.state.displayCategory === 'Parking Lots'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white'
                        }
                      >
                        Parking Lots
                      </li>{' '}
                      <li
                        onClick={() => this.setCategory('Warehouses')}
                        className={
                          this.state.displayCategory === 'Warehouses'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white'
                        }
                      >
                        Warehouses
                      </li>{' '}
                      <li
                        onClick={() => this.setCategory('Garages')}
                        className={
                          this.state.displayCategory === 'Garages'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white'
                        }
                      >
                        {' '}
                        Garages
                      </li>
                      <li
                        onClick={() => this.setCategory('Gas Stations')}
                        className={
                          this.state.displayCategory === 'Gas Stations'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white'
                        }
                      >
                        {' '}
                        Gas Stations
                      </li>
                      <li
                        onClick={() => this.setCategory('Offices')}
                        className={
                          this.state.displayCategory === 'Offices'
                            ? 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white active'
                            : 'list-inline-item categories-name border text-dark rounded shadow-sm bg-white'
                        }
                      >
                        {' '}
                        Offices
                      </li>
                      {/* <li
                        onClick={() => this.setCategory('Residential')}
                        className={
                          this.state.displayCategory === 'Residential'
                            ? 'list-inline-item categories-name border text-dark rounded bg-white shadow-sm active'
                            : 'list-inline-item categories-name border text-dark rounded bg-white shadow-sm'
                        }
                      >
                        {' '}
                        Residential
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Row>

              <Row className="projects-wrapper">
                {this.state.works
                  .filter(
                    ({ category }) =>
                      this.state.displayCategory === category ||
                      this.state.displayCategory === 'All',
                  )
                  .map(
                    (
                      { title, desc, title1, title2, image, image2, subtitle },
                      key,
                    ) => (
                      <Col key={key} lg="12" className="mt-4 pt-2 offices">
                        <FadeIn delay={100}>
                          <Card className="bg-white border-0 work-container work-classic shadow-lg overflow-hidden">
                            <div className="mt-3 ms-lg-4 ms-md-3">
                              <h4 className="para-desc">{title1}</h4>
                              <p className="text-muted para-desc">{desc}</p>
                            </div>
                            {image2 ? (
                              <Row>
                                <Col>
                                  <CardBody className="p-0">
                                    <Link to="#">
                                      <img
                                        src={image}
                                        className="img-fluid work-image p-0"
                                      />
                                    </Link>
                                    <div className="content p-4 text-center">
                                      <h5 className="mb-0">
                                        <Link
                                          to="page-work-detail"
                                          className="text-dark title"
                                        >
                                          {title}
                                        </Link>
                                      </h5>
                                      {/* <h6 className="text-muted tag mb-0">
                                          {subtitle}
                                        </h6> */}
                                    </div>
                                  </CardBody>
                                </Col>
                                <Col>
                                  <CardBody className="p-0">
                                    <Link to="#">
                                      <img
                                        src={image2}
                                        className="img-fluid work-image"
                                      />
                                    </Link>
                                    <div className="content p-4 text-center">
                                      <h5 className="mb-0">
                                        <Link
                                          to="page-work-detail"
                                          className="text-dark title"
                                        >
                                          {title2}
                                        </Link>
                                      </h5>
                                      {/* <h6 className="text-muted tag mb-0">
                                          {subtitle}
                                        </h6> */}
                                    </div>
                                  </CardBody>
                                </Col>
                              </Row>
                            ) : (
                              <Row>
                                <Col>
                                  <CardBody className="p-0 text-center">
                                    <Link to="#">
                                      <img
                                        src={image}
                                        className="img-fluid work-image p-0"
                                        style={{ width: '100%' }}
                                      />
                                    </Link>
                                    {/* <div className="content p-4">
                                        <h5 className="mb-0">
                                          <Link
                                            to="page-work-detail"
                                            className="text-dark title"
                                          >
                                            {title}
                                          </Link>
                                        </h5>
                                        <h6 className="text-muted tag mb-0">
                                          {subtitle}
                                        </h6>
                                      </div> */}
                                  </CardBody>
                                </Col>
                              </Row>
                            )}
                          </Card>
                        </FadeIn>
                      </Col>
                    ),
                  )}
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Projects;
