import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome() {
  return (
    <div className="d-flex justify-content-center">
        <div className="col-md-12">
        <div className='mt-4'>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 carousel-banner rounded shadow-card"
            style={{ borderRadius: "15px", boxShadow: "0px 11px 18px -5px rgba(0,0,0,0.63)" }}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/6/28/335fb9de-0b7d-4219-85de-dcb481515cb7.jpg.webp?ect=3g"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 carousel-banner rounded shadow-card"
            style={{ borderRadius: "15px", boxShadow: "0px 11px 18px -5px rgba(0,0,0,0.63)" }}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/6/23/bc4b0035-bf16-4c72-ac31-99e86146a828.jpg.webp?ect=3g"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 carousel-banner rounded shadow-card"
            style={{ borderRadius: "15px", boxShadow: "0px 11px 18px -5px rgba(0,0,0,0.63)" }}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/6/28/a9152d7b-f46f-4683-bb05-7de3fa366ca9.jpg.webp?ect=3g"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
        </div>
    </div>
  )
}
