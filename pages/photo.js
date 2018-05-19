import Gallery from 'react-photo-gallery';

import Layout from '../components/Layout'

// import "../static/styles/index.css"
import "../static/styles/photo.css"
// import "../static/photo.css"

export default () => (
  <Layout title="photo">
    <div className="gallery">
      <Gallery
        photos={PHOTO_SET}
        margin={10}
        columns={4}
      />
    </div>
  </Layout>
)

const PHOTO_SET = [
  {
    src: '../static/images/home.jpg',
    width: 4,
    height: 5
  },
  {
    src: '../static/images/photos/photo_6.jpg',
    width: 4,
    height: 5
  },
  {
    src: '../static/images/photos/photo_5.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_3.jpg',
    width: 4,
    height: 5
  },
  {
    src: '../static/images/photos/photo_14.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_17.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_21.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_15.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_16.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_4.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_7.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_8.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_9.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_10.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_1.jpg',
    width: 1,
    height: 1
  },
  {
    src: '../static/images/photos/photo_2.png',
    width: 2,
    height: 1
  },
  {
    src: '../static/images/photos/photo_11.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_12.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_13.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_18.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_19.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_20.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_22.jpg',
    width: 2,
    height: 3
  },
  {
    src: '../static/images/photos/photo_23.jpg',
    width: 3,
    height: 2
  },
  {
    src: '../static/images/photos/photo_24.jpg',
    width: 2,
    height: 3
  } 
];