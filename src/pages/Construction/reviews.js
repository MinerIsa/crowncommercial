import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Containers
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';
import ReviewsSlider2 from '../../components/Shared/ReviewSlider2';

//Import Images
import img1 from '../../assets/images/client/01.jpg';
import img2 from '../../assets/images/client/02.jpg';
import img3 from '../../assets/images/client/03.jpg';
import img4 from '../../assets/images/client/04.jpg';
import img5 from '../../assets/images/client/05.jpg';
import img6 from '../../assets/images/client/06.jpg';

class Reviews extends Component {
  state = {
    reviews: [
      {
        id: 1,
        img: img1,
        name: 'Colleen Claussner',
        post: 'Natural Distribution',
        desc: 'Lights are done and look great!',
        rating: 5,
      },
      {
        id: 2,
        img: img2,
        name: 'Sandra Cohen',
        post: 'M. Holland',
        desc: 'Everything is perfect – thanks Mike!',
        rating: 5,
      },
      {
        id: 3,
        img: img3,
        name: 'Allison Oba',
        // post: 'P.A',
        desc: 'The garage looks phenomenal - no one can get over how bright and clean it looks. We feel like our cars are featured in a new car lot!',
        rating: 5,
      },
      // {
      //   id: 4,
      //   img: img4,
      //   name: 'Christa Smith',
      //   post: 'Manager',
      //   desc: 'According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.',
      //   rating: 5,
      // },
      // {
      //   id: 5,
      //   img: img5,
      //   name: 'Dean Tolle',
      //   post: 'Developer',
      //   desc: 'There is now an abundance of readable dummy texts. These are usually used when a text is required.',
      //   rating: 5,
      // },
      // {
      //   id: 6,
      //   img: img6,
      //   name: 'ill Webb',
      //   post: 'Designer',
      //   desc: 'Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.',
      //   rating: 5,
      // },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container
          className=" my-5 px-5 py-5 rounded"
          style={{
            backgroundColor: '#9dce66 ',
            boxShadow: '0 0.5px 30px #5A5A5A inset',
          }}
        >
          {/* section title */}
          <SectionTitle
            title="What our clients say..."
            // desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          {/* clients slider */}
          <ReviewsSlider reviews={this.state.reviews} colClass="mt-4 pt-2" />
          {/* <ReviewsSlider2 reviews={this.state.revuews} colClass="mt-4 pt-2" /> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
