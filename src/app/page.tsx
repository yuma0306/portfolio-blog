/**
 * module読み込み
 */
import Wrapper from '@/app/components/Wrapper';
import Header from '@/app/components/Header';
import Kv from '@/app/components/Kv';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';
import Works from '@/app/components/Works';
import Skills from '@/app/components/Skills';

export default async function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Kv />
        <About />
        <Works />
        <Skills />
        <Footer />
      </Wrapper>
    </>
  );
}
