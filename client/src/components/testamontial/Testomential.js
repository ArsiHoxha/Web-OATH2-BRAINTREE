import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Testimonial({ children, imageSrc, name, title, animationDirection }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: animationDirection === 'up' ? 100 : -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.figure
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r bg-neutral-900/50 dark:border-gray-700"
    >
      <blockquote className="mx-auto mb-8 max-w-2xl text-white">
        {children}
      </blockquote>
      <figcaption className="flex justify-center items-center space-x-3">
        <img className="w-9 h-9 rounded-full" src={imageSrc} alt="profile" />
        <div className="space-y-0.5 font-medium text-white text-left">
          <div>{name}</div>
          <div className="text-sm font-light text-white">{title}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-gray-900 dark:bg-gray-900 " id="testimonials">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Testimonials</h2>
          <p className="mb-8 font-light lg:mb-16 sm:text-xl text-white">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <Testimonial
            imageSrc="https://www.harryfultz.edu.al/wp-content/uploads/2024/02/arsi-hoxha.png"
            name="Bonnie Green"
            title="Developer at Open AI"
            animationDirection="up"
          >
            <h3 className="text-lg font-semibold text-white">Speechless with how easy this was to integrate</h3>
            <p className="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme."</p>
            <p className="my-4">"Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customize it and integrate within a Laravel + Vue application."</p>
            <p className="my-4">"If you care for your time, I hands down would go with this."</p>
          </Testimonial>
          
          <Testimonial
            imageSrc="https://www.harryfultz.edu.al/wp-content/uploads/2024/02/arsi-hoxha.png"
            name="Roberta Casas"
            title="Lead designer at Dropbox"
            animationDirection="up"
          >
            <h3 className="text-lg font-semibold text-white">Solid foundation for any project</h3>
            <p className="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project."</p>
            <p className="my-4">"Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
          </Testimonial>
          
          <Testimonial
            imageSrc="https://www.harryfultz.edu.al/wp-content/uploads/2024/02/arsi-hoxha.png"
            name="Jese Leos"
            title="Software Engineer at Facebook"
            animationDirection="up"
          >
            <h3 className="text-lg font-semibold text-white">Mindblowing workflow and variants</h3>
            <p className="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯."</p>
            <p className="my-4">"Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit)."</p>
            <p className="my-4">"Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
          </Testimonial>
          
          <Testimonial
            imageSrc="https://www.harryfultz.edu.al/wp-content/uploads/2024/02/arsi-hoxha.png"
            name="Joseph McFall"
            title="CTO at Google"
            animationDirection="up"
          >
            <h3 className="text-lg font-semibold text-white">Efficient Collaborating</h3>
            <p className="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind."</p>
            <p className="my-4">"You have many examples that can be used to create a fast prototype for your team."</p>
          </Testimonial>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
