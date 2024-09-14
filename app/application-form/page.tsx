import { Metadata, NextPage } from 'next'
import Footer from '~components/footer'
import Header from '~components/header'
import JoinUs from '~components/join_us'
import PdfViewer from '~components/pdfviewer'

export const metadata: Metadata = {
  title: "British Women's Group - Application Form",
  description: 'Submit your application form to join our group today',
}

const About: NextPage<any> = (props) => {
  return (
    <>
      <Header />
      <JoinUs />
      <section className='max-w-4xl mx-auto p-20 h-screen'>
        <PdfViewer
          url={
            'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Application%20form%20Aug%202024-xVkcx3iDBhRNaLnRimh2EKA9V1YGHC.pdf'
          }
        />
      </section>
      <Footer />
    </>
  )
}

export default About
