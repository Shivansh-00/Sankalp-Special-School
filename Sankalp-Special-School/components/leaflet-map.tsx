"use client"

export default function LeafletMap() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890123!2d80.2962325!3d26.4645232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47f53e72f78d%3A0x819e685022544373!2sSankalp%20Special%20School%20(for%20Children%20with%20special%20Needs%20)!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sankalp Special School Location - 121/396, Shastri Nagar, Kanpur"
        aria-label="Interactive map showing Sankalp Special School location in Shastri Nagar, Kanpur"
      />
    </div>
  )
}
