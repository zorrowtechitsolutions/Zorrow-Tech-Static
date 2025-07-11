import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="pt-32 pb-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
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
            <div className="md:col-span-2 h-[300px] overflow-hidden flex justify-end ">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.4947040551085!2d76.07961950212783!3d11.041803445034844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9f35db59bb%3A0xc7540f7fcdffdc93!2sMalayala%20Manorama%20Circle!5e0!3m2!1sen!2sin!4v1742115226812!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d489.5043813040484!2d76.10250399781484!3d11.035997159470721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752252529802!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
