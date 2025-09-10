import { About } from '@/components/features/About';
import { Contact } from '@/components/features/Contact';
import { Hero } from '@/components/features/Hero';
import { Projects } from '@/components/features/Projects';
import { Skills } from '@/components/features/Skills';
import { Timeline } from '@/components/features/Timeline';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

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
