
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "MESSAGE SENT!",
      description: "Your quest request has been received. I'll respond within 24 hours!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'player1@retrogame.dev',
      color: 'text-retro-cyan'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+1 (555) RETRO-99',
      color: 'text-retro-lime'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Digital Realm, Cloud City',
      color: 'text-retro-pink'
    },
    {
      icon: MessageSquare,
      label: 'RESPONSE TIME',
      value: '< 24 Hours',
      color: 'text-retro-yellow'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl text-retro-lime mb-4">
            START NEW QUEST
          </h2>
          <div className="w-24 h-1 bg-retro-cyan mx-auto mb-8"></div>
          <p className="font-retro text-lg text-white/80 max-w-2xl mx-auto">
            Ready to embark on a new adventure? Send me a message and let's 
            create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-black/60 border-2 border-retro-purple rounded-lg p-6">
              <h3 className="font-pixel text-xl text-retro-cyan mb-6">QUEST DETAILS</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-pixel text-sm text-retro-lime mb-2">
                      PLAYER NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border-2 border-retro-cyan rounded px-4 py-2 font-retro text-white focus:border-retro-lime focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block font-pixel text-sm text-retro-lime mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border-2 border-retro-cyan rounded px-4 py-2 font-retro text-white focus:border-retro-lime focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-pixel text-sm text-retro-lime mb-2">
                    QUEST TYPE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border-2 border-retro-cyan rounded px-4 py-2 font-retro text-white focus:border-retro-lime focus:outline-none transition-colors"
                    placeholder="Web Development, Consultation, etc."
                  />
                </div>

                <div>
                  <label className="block font-pixel text-sm text-retro-lime mb-2">
                    QUEST DESCRIPTION
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/40 border-2 border-retro-cyan rounded px-4 py-2 font-retro text-white focus:border-retro-lime focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project ideas, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full retro-button flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-black/60 border-2 border-retro-cyan rounded-lg p-6">
              <h3 className="font-pixel text-xl text-retro-pink mb-6">CONTACT INFO</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-r from-retro-purple/20 to-retro-pink/20 border border-retro-cyan rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <div className="font-pixel text-sm text-retro-cyan">
                        {info.label}
                      </div>
                      <div className="font-retro text-white/90">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Panel */}
            <div className="bg-black/60 border-2 border-retro-lime rounded-lg p-6">
              <h3 className="font-pixel text-xl text-retro-lime mb-4">PLAYER STATUS</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-retro text-white/90">Availability</span>
                  <span className="font-pixel text-sm text-retro-lime flex items-center gap-2">
                    <div className="w-2 h-2 bg-retro-lime rounded-full animate-pulse"></div>
                    ONLINE
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-retro text-white/90">Response Rate</span>
                  <span className="font-pixel text-sm text-retro-lime">98%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-retro text-white/90">Current Queue</span>
                  <span className="font-pixel text-sm text-retro-cyan">2 QUESTS</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-retro text-white/90">Time Zone</span>
                  <span className="font-pixel text-sm text-retro-pink">UTC-5</span>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-gradient-to-r from-retro-purple/20 to-retro-pink/20 border-2 border-retro-yellow rounded-lg p-4 text-center">
              <div className="font-pixel text-lg text-retro-yellow mb-2">
                🏆 ACHIEVEMENT UNLOCKED
              </div>
              <div className="font-retro text-sm text-white/90">
                "Communication Master" - Respond to all messages within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
