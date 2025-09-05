import {useEffect} from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-transitions.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-autoplay.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-transitions.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import fjGallery from 'flickr-justified-gallery';
import {Container, Text, WrapperCard} from "./styles.tsx";

const images = [
    'kuguio_C&K-4.jpg',
    'kuguio_C&K-6.jpg',
    'kuguio_C&K-7.jpg',
    'kuguio_C&K-32.jpg',
    'kuguio_C&K-19.jpg',
    'kuguio_C&K-20.jpg',
    'kuguio_C&K-23.jpg',
    'kuguio_C&K-35.jpg',
    'kuguio_C&K-38.jpg',
    'kuguio_C&K-49.jpg',
    'kuguio_C&K-42.jpg',
    'kuguio_C&K-43.jpg',
    'kuguio_C&K-45.jpg',
    'kuguio_C&K-69.jpg',
    'kuguio_C&K-72.jpg',
    'kuguio_C&K-74.jpg',
    'kuguio_C&K-51.jpg',
    'kuguio_C&K-54.jpg',
    'kuguio_C&K-57.jpg',
    'kuguio_C&K-58.jpg',
    'kuguio_C&K-64.jpg',
    'kuguio_C&K-65.jpg',
    'kuguio_C&K-75.jpg',
    'kuguio_C&K-76.jpg',
    'kuguio_C&K-77.jpg',
    'kuguio_C&K-78.jpg',
    'kuguio_C&K-79.jpg',
    'kuguio_C&K-85.jpg',
    'kuguio_C&K-87.jpg',
    'kuguio_C&K-89.jpg',
    'kuguio_C&K-90.jpg',
    'kuguio_C&K-91.jpg',
    'kuguio_C&K-92.jpg',
    'kuguio_C&K-98.jpg',
    'kuguio_C&K-102.jpg',
    'kuguio_C&K-103.jpg',
    'kuguio_C&K-106.jpg',
    'kuguio_C&K-119.jpg',
    'kuguio_C&K-109.jpg',
    'kuguio_C&K-111.jpg',
    'kuguio_C&K-113.jpg',
    'kuguio_C&K-117.jpg',
    'kuguio_C&K-122.jpg',
    'kuguio_C&K-128.jpg',
    'kuguio_C&K-132.jpg',
    'kuguio_C&K-135.jpg',
    'kuguio_C&K-138.jpg',
    'kuguio_C&K-142.jpg',
    'kuguio_C&K-143.jpg',
    'kuguio_C&K-146.jpg',
    'kuguio_C&K-149.jpg',
    'kuguio_C&K-151.jpg',
    'kuguio_C&K-154.jpg',
    'kuguio_C&K-197.jpg',
    'kuguio_C&K-156.jpg',
    'kuguio_C&K-160.jpg',
    'kuguio_C&K-164.jpg',
    'kuguio_C&K-166.jpg',
    'kuguio_C&K-170.jpg',
    'kuguio_C&K-174.jpg',
    'kuguio_C&K-178.jpg',
    'kuguio_C&K-188.jpg',
    'kuguio_C&K-193.jpg',
    'kuguio_C&K-195.jpg',
]

export function Gallery() {
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 180,
            lastRow: 'start',
            gutter: 4,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
        });
    }, []);
    return (
        <WrapperCard>
            <Container>
                <Text>
                    “Grandes coisas fez o Senhor por nós, e por isso estamos alegres.” – Salmos 126:3
                </Text>
                <LightGallery
                    speed={500}
                    plugins={[lgFullscreen, lgAutoplay, lgThumbnail, lgZoom]}
                    mode="lg-fade"
                    pager={false}
                    thumbnail={true}
                    animateThumb={true}
                    galleryId={'nature'}
                    licenseKey={'19618204-E93C-43CE-9A60-C64B2A4D4AC2'}
                    autoplayFirstVideo={false}
                    elementClassNames={'gallery'}
                    mobileSettings={{
                        controls: false,
                        showCloseIcon: false,
                        download: false,
                        rotate: false,
                    }}
                >
                    {images.map((image, index) => (
                        <a key={index} href={`/static/galery/prewedding/${image}`} className="gallery__item">
                            <img className="img-responsive" alt={image}
                                 src={`/static/galery/prewedding/thumb/${image}`}/>
                        </a>
                    ))}
                </LightGallery>
            </Container>
        </WrapperCard>
    );
}

export default Gallery;
