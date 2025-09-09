import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';

export default function Home() {
	return (
		<>
			<Header />

			<main id='main-content' className='relative'>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Timeline />
				<Contact />
			</main>

			<Footer />
		</>
	);
}
