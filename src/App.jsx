import Hero from './sections/Hero.jsx'
import PopularProduct from './sections/PopularProduct.jsx'
import SuperQuality from './sections/SuperQuality.jsx'
import Services from './sections/Services.jsx'
import SpecialOffers from './sections/SpecialOffers.jsx'
import CustomerReviews from './sections/CustomerReviews.jsx'
import Subscribe from './sections/Subscribe.jsx'
import Footer from './sections/Footer.jsx'
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <main className="relative">
        <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>

      <section className="padding">
        <PopularProduct/>
      </section>

      <section className="padding">
        <SuperQuality/>
      </section>

      <section className="padding-x py-10">
        <Services/>
      </section>

      <section className="padding">
        <SpecialOffers/>
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>

      <section className="padding-x padding-t bg-black pb-8">
        <Footer/>
      </section>
    </main>
  )
}