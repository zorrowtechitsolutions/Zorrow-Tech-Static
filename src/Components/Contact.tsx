import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="pt-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-3 gap-2 items-center">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8 bg-white rounded-lg p-6 shadow">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=zorrowtech@gmail.com"
                      target="_blank"
                    >
                      zorrowtech@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919400517720">+91 9400517720</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    Malappuram, Kerala,
                    <br />
                    India 676505
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}

            <div className="md:col-span-2 h-[300px] flex justify-end">
              <div className="border border-primary overflow-hidden relative rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0341502587694!2d76.09970620971255!3d11.036064689083567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba635234a0a9c23%3A0x4cdc30ff6ec49fe4!2sZORROW%20TECH%20IT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1752500323024!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  style={{ border: 0, margin: 0, padding: 0 }}
                ></iframe>
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-40 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
