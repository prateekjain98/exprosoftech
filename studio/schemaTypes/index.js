import { clientsType } from './Clients'
import post from './Post'
import author from './Author'
import blockContent from './BlockContent'
import { dynamicProductPageType } from './dynamicProductPage'
import { dynamicServicePageType } from './dynamicServicePage'
import homePage from './homePage'
import about from './about'
import contact from './contact'
import { caseStudyType } from './caseStudy.ts'
import testimonialSection from './testimonialSection.ts'
import { serviceDropdownType } from './serviceDropdown'
import { productDropdownType } from './productDropwdown'
import industries from './industries'
import { productBlogType } from './productBlog'
import footer from './footer'

export const schemaTypes = [ 
    clientsType , post , author , blockContent  , dynamicServicePageType , dynamicProductPageType , homePage,      
    about , contact , caseStudyType  , serviceDropdownType , productDropdownType , industries, productBlogType , testimonialSection, footer
]