import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    emailjs.init("2Hxs_NkcmiwJ2vn9p");
  }, []);

  const contactInfo: ContactInfo[] = [
    {
      icon: '📱',
      title: 'Phone',
      content: '+91',
      link: 'tel:+91'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'vaishnavib2428@gmail.com',
      link: 'mailto:vaishnavib2428@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Bhandara, India',
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_w1gp4ug',
        'template_6dalv4k',
        form.current,
        '2Hxs_NkcmiwJ2vn9p',
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map EmailJS field names to state fields
    const fieldMap: { [key: string]: string } = {
      user_name: 'name',
      user_email: 'email',
      subject: 'subject',
      message: 'message'
    };
    
    const stateField = fieldMap[name] || name;
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  return (
    <section id="contact" className="section bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-4">CONTACT</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Contact With Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-gradient p-6 rounded-lg shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h4 className="text-white text-xl font-bold mb-2">{info.title}</h4>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-text-light hover:text-primary transition-colors duration-300"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-text-light">{info.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-card-gradient p-8 rounded-lg shadow-card"
        >
          <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-text-light">Your Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-text-light">Your Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="example@domain.com"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="subject" className="text-text-light">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Subject"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="text-text-light">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`md:col-span-2 text-center p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;