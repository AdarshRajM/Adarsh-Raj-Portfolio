import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasPlayedSound) {
        try {
          // Play soft notification chime (Mixkit royalty free)
          const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
          audio.volume = 0.3;
          const playPromise = audio.play();
          if (playPromise !== undefined) {
             playPromise.catch(_ => {}); // Ignore strict auto-play policy blocks silently
          }
          setHasPlayedSound(true);
        } catch (e) {}
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasPlayedSound]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');

    // EmailJS credentials
    // Store these in your .env file: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"; 
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // If EmailJS hasn't been configured, fallback to Formspree
    if (SERVICE_ID === "YOUR_SERVICE_ID" || !SERVICE_ID) {
      console.log('EmailJS keys not configured. Falling back to Formspree.');
      try {
        const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_ID";
        const formspreeUrl = `https://formspree.io/f/${FORMSPREE_ID}`;
        
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            to: "adarshrajmanii@gmail.com"
          })
        });

        if (response.ok) {
          console.log('SUCCESS! Form submitted via Formspree.');
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('FAILED to send using Formspree.');
          setStatus('error');
        }
      } catch (err) {
        console.error('FAILED...', err);
        setStatus('error');
      }
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      to_email: "adarshrajmanii@gmail.com",
      date_time: new Date().toLocaleString()
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
      })
      .finally(() => {
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-flex flex-col items-center">
            Get In Touch
            <div className="h-1 w-20 bg-primary-600 mt-4 rounded-full"></div>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center transform hover:-translate-y-2 hover:shadow-lg transition-all">
              <a href={portfolioData.hero.socials.email} className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-primary-200 transition-colors">
                <Mail size={32} />
              </a>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">I usually reply within 24 hours.</p>
              <a 
                href={portfolioData.hero.socials.email}
                className="inline-block text-primary-600 dark:text-primary-500 font-medium hover:underline text-lg break-all"
              >
                adarshrajmanii@gmail.com
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center transform hover:-translate-y-2 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Social Profiles</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Connect with me directly.</p>
              <div className="flex justify-center space-x-6">
                <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-500 font-medium hover:underline text-lg">LinkedIn</a>
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 font-medium hover:underline text-lg">GitHub</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  minLength="10"
                  maxLength="1000"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Hey, I'd like to talk about..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="text-emerald-600 dark:text-emerald-400 font-medium p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-center">
                  Message sent successfully! Thank you for contacting me.
                </div>
              )}
              
              {status === 'error' && (
                <div className="text-red-600 dark:text-red-400 font-medium p-3 bg-red-50 dark:bg-red-900/30 rounded-lg text-center">
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>Message Sent!</>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
