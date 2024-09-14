import { Metadata, NextPage } from 'next'
import Footer from '~components/footer'
import Header from '~components/header'
import ContactSection from '~components/contact'

export const metadata: Metadata = {
  title: "British Women's Group - Contact",
  description:
    "Contact us today to join us for any upcoming events",
}

const Contact: NextPage<any> = () => {
  return (
    <>
      <Header />
      <section>
        <ContactSection />
      </section>
      <Footer />
    </>
  )
}

export default Contact
