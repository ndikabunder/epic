import Card from '../components/Card';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <div className='border-b border-white/10 my-8 md:mx-5'></div>
      <Card />
      <Footer />
    </>
  );
}
