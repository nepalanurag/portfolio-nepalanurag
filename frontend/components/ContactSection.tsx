import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "../config";

interface ContactSectionProps {
  handleContactSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => Promise<boolean>;
}

export default function ContactSection({
  handleContactSubmit,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await handleContactSubmit(formData);

    if (success) {
      setFormData({ name: "", email: "", message: "" });
    }

    setIsLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-inter">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-work-sans">
            I'm always interested in discussing data science opportunities,
            research collaborations, or just connecting with fellow data
            enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-inter">
                Get in touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-work-sans"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <a
                    href={`callto:+16502706636`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg font-work-sans"
                  >
                    <span className="text-gray-700 dark:text-gray-300 text-lg font-work-sans">
                      (650) 270-6636
                    </span>
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-work-sans">
                    San Francisco, CA(Willing to relocate)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => window.open(SOCIAL_LINKS.github, "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white font-inter">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 font-work-sans">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
