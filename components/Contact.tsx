import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Define the form data type
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Send data to the Vercel backend function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[40px] p-8 md:p-16 border-white/5 relative overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Side (Visuals) */}
            <div>
              <h2 className="text-rose-400 font-semibold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-6xl font-black font-display mb-8">
                Let's build <br />
                <span className="text-gray-400">something great.</span>
              </h3>
              <div className="space-y-8 mt-12">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600 transition-all duration-300">
                📧
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
                <a href="mailto:avlon020@gmail.com" className="text-xl text-white hover:text-indigo-400 transition-colors font-medium">avlon020@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl group-hover:bg-rose-600 transition-all duration-300">
                📍
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl text-white font-medium">London, United Kingdom</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-all duration-300">
                🔗
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Social</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/divyani-kamburugamuwa/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="https://github.com/Avlon2002" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
      
              
              
            </div>

            {/* Right Side (Form) */}
            <div className="glass-card p-8 rounded-3xl bg-white/5 border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none"
                    placeholder="Tell me about your vision..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                    loading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25'
                  } text-white`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-400 text-center mt-4">Failed to send message.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;