export const testimonialVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};


export const testimonials = [
  {
    name: "Ujjwal Singh",
    position: "Founder & CTO",
    company: "Finboard",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQHrpa78PLmFxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732618214297?e=1763596800&v=beta&t=7qsiJ7u3hQ7NYto0gaorPhvqUsePy8wGvdQtw9Wam4Y",
    text: "Aarjya single-handedly built FinBoard’s core plugin in just three months using React, React Query, and Shadcn UI, delivering a scalable, real-time solution with 50% faster data updates. He also elevated our website in Framer with clean, high-converting designs. A self-driven frontend expert who owns and ships — any team would be lucky to have him.",
  },
];