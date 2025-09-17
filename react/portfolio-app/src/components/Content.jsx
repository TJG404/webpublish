import { Home } from './content/Home.jsx';
import { About } from './content/About.jsx';
import { Skills } from './content/Skills.jsx';
import { Work } from './content/Work.jsx';
import { Testimonials } from './content/Testimonials.jsx';
import { ArrowTop } from './content/ArrowTop.jsx';

export function Content({data}) {
    return (
        <>
            <Home data={data.home}/>
            <About data={data.about} />
            <Skills data={data.skills} />
            <Work data={data.work}/>
            <Testimonials testimonials={data.testimonials}/>
            <ArrowTop />
        </>
    );
}