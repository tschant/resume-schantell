import { ReactNode } from 'react';
import { Contact } from './contact';
import { Education } from './education';
import { Intro } from './intro';
import { Portfolio } from './portfolio';
import { Skills } from './skills';
import { Summary } from './summary';
import { Work } from './work';

export interface Files {
	[index: string]: ReactNode | string;
}

export const files: Files = {
	'intro.md': <Intro />,
	'summary.md': <Summary />,
	'contact.md': <Contact />,
	'work.md': <Work />,
	'education.md': <Education />,
	'skills.md': <Skills />,
	'portfolio.md': <Portfolio />,
};
