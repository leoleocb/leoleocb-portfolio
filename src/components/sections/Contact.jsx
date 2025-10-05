import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSuccess, setPopupSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar fecha y hora en formato legible
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    emailjs
      .send(
        "service_3fx2pcq", // tu Service ID
        "template_qfyqv4b", // tu Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: formattedTime, // 🔥 Se envía a EmailJS
        },
        "_iKiiccFeAa4-3zTB" // tu Public Key
      )
      .then(() => {
        setPopupMessage("✅ Message sent successfully!");
        setPopupSuccess(true);
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setPopupMessage("❌ An error occurred. Please try again later.");
        setPopupSuccess(false);
        setShowPopup(true);
      });

    // Oculta el popup automáticamente después de 3.5 segundos
    setTimeout(() => setShowPopup(false), 3500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                autoComplete="off"
                spellCheck={false}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-green-500/5"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                autoComplete="off"
                spellCheck={false}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-green-500/5"
                placeholder="example@email.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                autoComplete="off"
                spellCheck={false}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-green-500/5 resize-none"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      {/* Popup moderno */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity z-50">
          <div
            className={`p-6 rounded-xl shadow-xl ${
              popupSuccess
                ? "bg-green-500/20 border border-green-400"
                : "bg-red-500/20 border border-red-400"
            } text-white text-center w-[90%] max-w-sm animate-fadeIn`}
          >
            <p className="text-lg font-semibold">{popupMessage}</p>
          </div>
        </div>
      )}
    </section>
  );
};
