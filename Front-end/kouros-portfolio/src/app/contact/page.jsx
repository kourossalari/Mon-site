"use client";

import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const containerRef = useScrollReveal()

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Le nom est requis."
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis."
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide."
    }
    if (!form.message.trim()) newErrors.message = "Le message est requis."
    return newErrors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus("sending")
    try {
      // À adapter : appel vers ton backend ou service d'envoi d'email (ex: Resend, Formspree)
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus("success");
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section ref={containerRef} className="block contact-page">
      <span className="eyebrow reveal-up">Contact</span>
      <h2 className="reveal-up">
        Travaillons <em>ensemble</em>
      </h2>
      <p className="sub reveal-up">
        Une question, un projet, une opportunité ? Écrivez-moi, je réponds rapidement.
      </p>

      <form className="contact-form reveal-up" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className="form-error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className="form-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className="form-error" id="message-error">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {status === "success" && (
          <p className="form-status success" role="status">
            Message envoyé, merci ! Je reviens vers vous rapidement.
          </p>
        )}
        {status === "error" && (
          <p className="form-status error" role="alert">
            Une erreur est survenue, réessaie dans un instant.
          </p>
        )}
      </form>
    </section>
  );
}
