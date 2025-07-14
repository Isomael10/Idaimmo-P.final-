import React, { useRef, useEffect } from "react";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [slide, setSlide] = React.useState(0);

  useEffect(() => {
    const total = 3;
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slide * 33.333}%)`;
    }
  }, [slide]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonials-slider" ref={sliderRef}>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/message-circle.svg" alt="Quote" width="24" height="24" />
              <p>
                J&apos;ai trouvé mon appartement de rêve grâce à ImmoGest. Leur équipe a été très professionnelle et m&apos;a accompagné tout au long du processus d&apos;achat.
              </p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Abdoulaye Diop" />
              <div>
                <h4>Abdoulaye Diop</h4>
                <p>Dakar</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/message-circle.svg" alt="Quote" width="24" height="24" />
              <p>
                ImmoGest a géré la vente de ma villa en un temps record. Je recommande vivement leurs services pour leur efficacité et leur professionnalisme.
              </p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fatou Ndiaye" />
              <div>
                <h4>Fatou Ndiaye</h4>
                <p>Saly</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/message-circle.svg" alt="Quote" width="24" height="24" />
              <p>
                Excellente agence ! J&apos;ai pu trouver rapidement un local commercial pour mon entreprise. Le service est impeccable et l&apos;équipe très réactive.
              </p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Moussa Sall" />
              <div>
                <h4>Moussa Sall</h4>
                <p>Dakar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-controls">
          <button
            id="prev-testimonial"
            className="testimonial-btn"
            onClick={() => setSlide((slide + 2) % 3)}
          >
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/chevron-left.svg" alt="Previous" width="20" height="20" />
          </button>
          <button
            id="next-testimonial"
            className="testimonial-btn"
            onClick={() => setSlide((slide + 1) % 3)}
          >
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/chevron-right.svg" alt="Next" width="20" height="20" />
          </button>
        </div>
      </div>
    </section>
  );
}