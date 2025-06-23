import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to get in touch with me for collaboration or job
          opportunities.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="space-y-6 md:w-2/3 w-full">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:phadat1495@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  phatdat1495@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:0354760438"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0354760438
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Sai Gon, Viet Nam</p>
              </div>
            </div>
          </div>

          <div className="w-32 md:w-40 flex-shrink-0 self-start md:self-center mx-auto md:mx-0">
            <img
              src="/chibi/contact.png"
              alt="Chibi Contact"
              className="w-full h-auto max-h-60 object-contain"
            />
          </div>
        </div>

        <div className="pt-12 text-center">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/phat-dat-610699322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Dabeztt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://www.facebook.com/dat.phats.14661261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/kophaidatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
